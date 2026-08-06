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

La función serverless `api/contact.js` envía las consultas con Resend. Para probarla con un entorno compatible con las funciones de Vercel, instalá Vercel CLI y ejecutá `vercel dev`.

Copiá `.env.example` como `.env.local` y completá únicamente en tu entorno local:

- `RESEND_API_KEY`
- `CONTACT_EMAIL` (actualmente `argroup.pyp@gmail.com`)
- `CONTACT_FROM_EMAIL`

Nunca uses una variable `VITE_*` para la API key. En producción, configurá estas variables desde los ajustes del proyecto en Vercel.

## Identidad visual

La marca temporal se encuentra en `src/components/Brand.jsx` y el favicon en `public/favicon.svg`. Ambos pueden reemplazarse cuando esté disponible el logo oficial.
