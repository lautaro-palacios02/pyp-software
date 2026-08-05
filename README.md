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

WhatsApp, Instagram y email se centralizan en `src/config/contact.js`.

- `WHATSAPP_NUMBER`: número internacional, sólo dígitos.
- `INSTAGRAM_HANDLE`: nombre de usuario de Instagram.
- `CONTACT_EMAIL`: dirección de contacto.

Mientras no se configure un número, los enlaces de WhatsApp abren el selector de conversación con el mensaje precargado. El formulario realiza validación frontend, pero no envía datos hasta que se conecte un backend real.

## Identidad visual

La marca temporal se encuentra en `src/components/Brand.jsx` y el favicon en `public/favicon.svg`. Ambos pueden reemplazarse cuando esté disponible el logo oficial.
