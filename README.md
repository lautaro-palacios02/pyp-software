# PYP Software

Landing institucional de PYP Software, orientada a presentar servicios de desarrollo de software a medida, automatización y sistemas de gestión para empresas.

## Desarrollo local

```bash
npm install
npm run dev
```

## Verificaciones

```bash
npm run lint
npm run build
```

## Configuración de contacto

El teléfono, WhatsApp, Instagram y el email público se centralizan en `src/config/contact.js`.

- `CONTACT_PHONE`: número visible, con código de país y área.
- `WHATSAPP_NUMBER`: número internacional, sólo dígitos.
- `INSTAGRAM_HANDLE`: nombre de usuario de Instagram.
- `CONTACT_EMAIL`: dirección de contacto.

Mientras no se configure un número válido, los accesos públicos de teléfono y WhatsApp permanecen ocultos.

## Envío del formulario

En producción, el formulario se procesa mediante el Web Service de Render definido en `server/index.js`. El Static Site reescribe `/api/*` a ese servicio; por eso el frontend conserva `fetch("/api/contact")`.

Para desarrollo local de la API:

```bash
npm run start:api
```

Configurá estas variables sólo en el Web Service o en tu entorno local:

- `BREVO_SMTP_USER` (SMTP login de Brevo)
- `BREVO_SMTP_KEY` (SMTP key de Brevo; no es una API key)
- `CONTACT_EMAIL`
- `CONTACT_FROM_EMAIL`

Nunca uses una variable `VITE_*` para secretos. Las instrucciones de despliegue están en `docs/RENDER_CONTACT_API.md`.

## Identidad visual

La marca temporal se encuentra en `src/components/Brand.jsx` y el favicon en `public/favicon.svg`. Ambos pueden reemplazarse cuando esté disponible el logo oficial.
