import nodemailer from "nodemailer"

const ALLOWED_FIELDS = new Set(["nombre", "empresa", "email", "telefono", "tipoProyecto", "mensaje", "website"])
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value) => String(value).replace(/[&<>"\x27]/g, (character) => character === "&" ? "&amp;" : character === "<" ? "&lt;" : character === ">" ? "&gt;" : character === "\"" ? "&quot;" : "&#39;")

export function validateContactPayload(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null
  if (Object.keys(body).some((key) => !ALLOWED_FIELDS.has(key))) return null
  if (Object.values(body).some((value) => typeof value !== "string")) return null

  const values = Object.fromEntries([...ALLOWED_FIELDS].map((key) => [key, (body[key] ?? "").trim()]))
  if (values.website) return { spam: true }

  const valid = values.nombre.length > 0 && values.nombre.length <= 100
    && values.empresa.length <= 150
    && values.email.length > 0 && values.email.length <= 200 && EMAIL_PATTERN.test(values.email)
    && values.telefono.length <= 50 && values.tipoProyecto.length <= 100
    && values.mensaje.length > 0 && values.mensaje.length <= 3000
  return valid ? { values } : null
}

function emailContent(values) {
  const sentAt = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })
  const detail = (label, value) => `<tr><td style="padding:8px 16px 8px 0;color:#64748b">${label}</td><td style="padding:8px 0;color:#0f172a">${escapeHtml(value || "No informado")}</td></tr>`
  const html = `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto"><h1>Nueva consulta desde P&amp;P Software</h1><table>${detail("Nombre", values.nombre)}${detail("Empresa", values.empresa)}${detail("Email", values.email)}${detail("Teléfono", values.telefono)}${detail("Tipo de proyecto", values.tipoProyecto)}${detail("Fecha", sentAt)}</table><h2>Mensaje</h2><p style="white-space:pre-wrap">${escapeHtml(values.mensaje)}</p></div>`
  const text = ["Nueva consulta desde P&P Software", "", "Nombre: " + values.nombre, "Empresa: " + (values.empresa || "No informado"), "Email: " + values.email, "Teléfono: " + (values.telefono || "No informado"), "Tipo de proyecto: " + (values.tipoProyecto || "No informado"), "", "Mensaje:", values.mensaje, "", "Fecha: " + sentAt].join("\n")
  return { html, text }
}

export async function sendContactEmail(values, environment = process.env) {
  const { BREVO_SMTP_USER: user, BREVO_SMTP_KEY: pass, CONTACT_EMAIL: to, CONTACT_FROM_EMAIL: from } = environment
  if (!user || !pass || !to || !from) return { status: 500, body: { success: false, message: "No se pudo enviar la consulta" } }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user, pass },
    })
    const { html, text } = emailContent(values)
    await transporter.sendMail({
      from: `P&P Software <${from}>`,
      to,
      replyTo: values.email,
      subject: "Nueva consulta web - P&P Software - " + values.nombre.replace(/[\r\n]+/g, " "),
      html,
      text,
    })
    return { status: 200, body: { success: true, message: "Consulta enviada correctamente" } }
  } catch {
    console.error("No fue posible enviar una consulta mediante Brevo SMTP.")
    return { status: 502, body: { success: false, message: "No se pudo enviar la consulta" } }
  }
}
