# API de contacto en Render

## Web Service

1. En Render elegí **New → Web Service** y seleccioná este repositorio.
2. Dejá **Root Directory** vacío (la API y el frontend comparten repositorio).
3. Usá **Build Command**: `npm ci`.
4. Usá **Start Command**: `npm run start:api`.
5. Cargá como variables privadas: `BREVO_SMTP_USER`, `BREVO_SMTP_KEY`, `CONTACT_EMAIL` y `CONTACT_FROM_EMAIL`. No uses nombres `VITE_*`.
6. Cuando el servicio esté activo, copiá su URL, por ejemplo `https://xxxxx.onrender.com`, y verificá `https://xxxxx.onrender.com/health`. Debe responder `{ "ok": true }`.

## Static Site

En el Static Site, en **Redirects/Rewrites**, agregá primero:

| Source | Destination | Action |
| --- | --- | --- |
| `/api/*` | `https://xxxxx.onrender.com/api/*` | Rewrite |
| `/*` | `/index.html` | Rewrite |

La regla de API debe estar antes del fallback SPA. Al ser un rewrite de mismo origen, no hace falta habilitar CORS amplio.

## Brevo SMTP

El backend usa Nodemailer con esta configuración: host `smtp-relay.brevo.com`, puerto `587`, `secure: false` y TLS mediante STARTTLS.

- `BREVO_SMTP_USER` es el SMTP login de Brevo.
- `BREVO_SMTP_KEY` es la SMTP key de Brevo; no es una API key.
- `CONTACT_EMAIL` debe ser `argroup.pyp@gmail.com`.
- `CONTACT_FROM_EMAIL` debe ser `contacto@pypsotware.com`.
- El dominio `pypsotware.com` debe estar autenticado en Brevo.

Guardá las credenciales sólo como variables privadas de Render; nunca en GitHub ni en el frontend.

## Prueba

Desde la web publicada enviá una consulta de prueba. El navegador debe recibir `200` y `{ "success": true, "message": "Consulta enviada correctamente" }`; confirmá que llega a `CONTACT_EMAIL` y que responder al correo usa el email del visitante mediante `Reply-To`.
