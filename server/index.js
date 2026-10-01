import http from 'node:http'
import { sendContactEmail, validateContactPayload } from './contact.js'

const port = Number(process.env.PORT || 3001)
const maxBodySize = 20_000
const rateWindowMs = 10 * 60 * 1000
const rateLimit = 10
const requestsByIp = new Map()

function json(response, status, body, headers = {}) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers })
  response.end(JSON.stringify(body))
}

function isRateLimited(request) {
  const ip = request.socket.remoteAddress || 'unknown'
  const now = Date.now()
  const recent = (requestsByIp.get(ip) || []).filter((timestamp) => now - timestamp < rateWindowMs)
  recent.push(now)
  requestsByIp.set(ip, recent)
  return recent.length > rateLimit
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let size = 0
    const chunks = []
    request.on('data', (chunk) => {
      size += chunk.length
      if (size > maxBodySize) {
        reject(new Error('payload-too-large'))
        request.destroy()
        return
      }
      chunks.push(chunk)
    })
    request.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))) } catch { reject(new Error('invalid-json')) }
    })
    request.on('error', reject)
  })
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`)
  if (request.method === 'GET' && url.pathname === '/health') return json(response, 200, { ok: true })
  if (url.pathname !== '/api/contact') return json(response, 404, { success: false, message: 'No encontrado' })
  if (request.method !== 'POST') return json(response, 405, { success: false, message: 'Método no permitido' }, { Allow: 'POST' })
  if (!request.headers['content-type']?.includes('application/json')) return json(response, 400, { success: false, message: 'Datos inválidos' })
  if (Number(request.headers['content-length'] || 0) > maxBodySize) return json(response, 400, { success: false, message: 'Datos inválidos' })
  if (isRateLimited(request)) return json(response, 429, { success: false, message: 'Demasiadas solicitudes. Intentá más tarde.' })

  try {
    const contact = validateContactPayload(await readJsonBody(request))
    if (!contact) return json(response, 400, { success: false, message: 'Datos inválidos' })
    if (contact.spam) return json(response, 200, { success: true, message: 'Consulta enviada correctamente' })
    const result = await sendContactEmail(contact.values)
    return json(response, result.status, result.body)
  } catch {
    return json(response, 400, { success: false, message: 'Datos inválidos' })
  }
})

server.listen(port, '0.0.0.0', () => console.log(`Contact API listening on port ${port}`))
