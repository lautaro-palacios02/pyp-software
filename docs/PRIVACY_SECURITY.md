# Privacidad y seguridad

El consentimiento se guarda sólo en `localStorage` bajo `pyp-consent`. La categoría necesaria está siempre activa; preferencias, analítica y marketing empiezan desactivadas. `VITE_CONSENT_VERSION` (o `1.0`) invalida decisiones antiguas al cambiar.

Actualmente no hay trackers. Si se agrega Analytics o Meta Pixel, crear su cargador y ejecutarlo únicamente tras comprobar `consent.analytics` o `consent.marketing`; actualizar políticas, tabla de tecnologías, CSP y consentimiento. Una cookie nueva requiere identificar proveedor, finalidad, categoría y duración antes de documentarla.

Antes de producción:

- [ ] `npm audit`
- [ ] `npm run build`
- [ ] Revisar cookies, terceros y secretos
- [ ] Probar aceptar, rechazar y configurar
- [ ] Probar formulario, responsive, enlaces y rutas legales
- [ ] Revisar sitemap, robots y HTTPS
