# Seguridad en Render

Configurá estos encabezados en el servicio o proxy de Render, después de probarlos en staging:

| Header | Valor |
| --- | --- |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self' data:; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests` |

En Render, agregalos en la configuración del servicio/proxy que entrega el sitio. La CSP corresponde a los recursos actualmente detectados: assets propios, API propia y ningún iframe, CDN, fuente externa o tracker. Si se agrega un servicio externo, actualizá y probá primero la CSP.

Para que las rutas SPA (`/privacidad`, `/cookies`, `/terminos`) funcionen al refrescar, agregá una regla de rewrite del hosting estático: `/*` → `/index.html` (status 200). No usar redirect. Confirmá que la función de contacto siga disponible en la plataforma que la provee: `api/contact.js` tiene formato de función Vercel y no se ejecuta por sí sola en un sitio estático de Render.
