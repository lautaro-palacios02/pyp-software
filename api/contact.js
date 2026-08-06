import { Resend } from 'resend'

const ALLOWED_FIELDS = new Set([
  'nombre',
  'empresa',
  'email',
  'telefono',
  'tipoProyecto',
  'mensaje',
  'website',
])

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_BODY_SIZE = 20_000

const htmlCharacters = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => htmlCharacters[character])
}

function isPlainObject(value) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false

  const prototype = Object.getPrototypeOf(value)
  return prototype === Object.prototype || prototype === null
}

function parseBody(body) {
  if (typeof body !== 'string') return body

  try {
    return JSON.parse(body)
  } catch {
    return null
  }
}

export function validatePayload(rawBody) {
  const body = parseBody(rawBody)

  if (!isPlainObject(body)) return { ok: false }

  const keys = Object.keys(body)
  if (keys.some((key) => !ALLOWED_FIELDS.has(key))) return { ok: false }
  if (Object.values(body).some((value) => typeof value !== 'string')) return { ok: false }

  const values = {
    nombre: (body.nombre ?? '').trim(),
    empresa: (body.empresa ?? '').trim(),
    email: (body.email ?? '').trim(),
    telefono: (body.telefono ?? '').trim(),
    tipoProyecto: (body.tipoProyecto ?? '').trim(),
    mensaje: (body.mensaje ?? '').trim(),
    website: (body.website ?? '').trim(),
  }

  if (values.website) return { ok: true, spam: true }

  const isValid =
    values.nombre.length > 0 &&
    values.nombre.length <= 100 &&
    values.empresa.length <= 150 &&
    values.email.length > 0 &&
    values.email.length <= 200 &&
    EMAIL_PATTERN.test(values.email) &&
    values.telefono.length <= 50 &&
    values.tipoProyecto.length <= 100 &&
    values.mensaje.length > 0 &&
    values.mensaje.length <= 3000

  return isValid ? { ok: true, values } : { ok: false }
}

function safeHeader(value) {
  return value.replace(/[\r\n]+/g, ' ')
}

function renderDetail(label, value) {
  return `
    <tr>
      <td style="padding: 8px 0; width: 155px; color: #64748b; font-size: 14px; vertical-align: top;">${label}</td>
      <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600; vertical-align: top;">${escapeHtml(value || 'No informado')}</td>
    </tr>
  `
}

function createEmailContent(values) {
  const formattedDate = new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'America/Argentina/Buenos_Aires',
  }).format(new Date())

  const html = `
    <!doctype html>
    <html lang="es">
      <body style="margin: 0; padding: 0; background: #f1f5f9; font-family: Arial, Helvetica, sans-serif;">
        <div style="padding: 32px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 640px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff; overflow: hidden;">
            <tr>
              <td style="height: 4px; background: #2563eb;"></td>
            </tr>
            <tr>
              <td style="padding: 32px;">
                <p style="margin: 0; color: #2563eb; font-size: 12px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase;">PYP Software</p>
                <h1 style="margin: 10px 0 8px; color: #0f172a; font-size: 24px; line-height: 1.3;">Nueva consulta desde la web</h1>
                <p style="margin: 0 0 24px; color: #64748b; font-size: 14px; line-height: 1.6;">Un potencial cliente completó el formulario de contacto.</p>

                <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 14px 0;">
                  ${renderDetail('Nombre', values.nombre)}
                  ${renderDetail('Empresa', values.empresa)}
                  ${renderDetail('Email', values.email)}
                  ${renderDetail('Teléfono', values.telefono)}
                  ${renderDetail('Tipo de proyecto', values.tipoProyecto)}
                </table>

                <div style="margin-top: 24px;">
                  <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">Mensaje</p>
                  <div style="padding: 16px; border-left: 3px solid #3b82f6; border-radius: 0 8px 8px 0; background: #f8fafc; color: #0f172a; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(values.mensaje)}</div>
                </div>

                <p style="margin: 24px 0 0; color: #94a3b8; font-size: 12px;">Fecha: ${escapeHtml(formattedDate)} (Argentina)</p>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `

  const text = [
    'PYP Software - Nueva consulta desde la web',
    '',
    `Nombre: ${values.nombre}`,
    `Empresa: ${values.empresa || 'No informado'}`,
    `Email: ${values.email}`,
    `Teléfono: ${values.telefono || 'No informado'}`,
    `Tipo de proyecto: ${values.tipoProyecto || 'No informado'}`,
    '',
    'Mensaje:',
    values.mensaje,
    '',
    `Fecha: ${formattedDate} (Argentina)`,
  ].join('\n')

  return { html, text }
}

function sendJson(res, status, payload) {
  res.status(status).json(payload)
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { ok: false, error: 'Método no permitido.' })
  }

  const contentType = req.headers['content-type'] ?? ''
  const contentLength = Number(req.headers['content-length'] ?? 0)

  if (!contentType.includes('application/json') || contentLength > MAX_BODY_SIZE) {
    return sendJson(res, 400, { ok: false, error: 'Datos inválidos.' })
  }

  const validation = validatePayload(req.body)

  if (!validation.ok) {
    return sendJson(res, 400, { ok: false, error: 'Datos inválidos.' })
  }

  if (validation.spam) {
    return sendJson(res, 200, { ok: true })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!resendApiKey || !contactEmail || !fromEmail) {
    console.error('Faltan variables de entorno para el formulario de contacto.')
    return sendJson(res, 500, { ok: false, error: 'No se pudo enviar la consulta.' })
  }

  const { html, text } = createEmailContent(validation.values)

  try {
    const resend = new Resend(resendApiKey)
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: validation.values.email,
      subject: `Nueva consulta web - PYP Software - ${safeHeader(validation.values.nombre)}`,
      html,
      text,
    })

    if (error) {
      console.error('Resend rechazó el envío del formulario:', error)
      return sendJson(res, 500, { ok: false, error: 'No se pudo enviar la consulta.' })
    }

    return sendJson(res, 200, { ok: true })
  } catch (error) {
    console.error('Error interno al enviar el formulario:', error)
    return sendJson(res, 500, { ok: false, error: 'No se pudo enviar la consulta.' })
  }
}
