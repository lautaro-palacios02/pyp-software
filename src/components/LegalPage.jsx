import Brand from './Brand'
import Footer from './Footer'
import { legalConfig, legalIdentityNotice } from '../config/legal'

const sections = {
  privacidad: [
    ['Responsable del sitio', `P&P Software administra este sitio. ${legalIdentityNotice}`],
    ['Información recopilada', 'La navegación no solicita datos personales. Si enviás una consulta, recibimos nombre, email, mensaje y los datos opcionales que decidas proporcionar.'],
    ['Finalidad y servicios', 'Usamos la consulta únicamente para atenderla. El formulario utiliza Brevo SMTP para entregar el correo. No usamos analítica, píxeles publicitarios ni trackers.'],
    ['Almacenamiento y conservación', 'Las preferencias se guardan localmente en el navegador. Las consultas se conservan el tiempo necesario para atenderlas y cumplir obligaciones aplicables.'],
    ['Seguridad y derechos', 'Aplicamos medidas razonables de seguridad. Podés solicitar acceso, rectificación o eliminación de los datos enviados, sujeto a obligaciones legales aplicables.'],
    ['Contacto y cambios', `Para consultas de privacidad escribí a ${legalConfig.privacyEmail}. Los enlaces externos aplican sus propias políticas. Esta política puede actualizarse cuando cambien las prácticas del sitio.`],
  ],
  cookies: [
    ['Qué son y uso actual', 'Las cookies y el almacenamiento local son tecnologías del navegador. Actualmente no utilizamos cookies ni tecnologías opcionales de preferencias, analítica o marketing.'],
    ['Tecnología detectada', 'localStorage: pyp-consent · Proveedor: P&P Software · Finalidad: recordar la decisión de privacidad · Categoría: necesaria · Duración: hasta eliminar los datos del sitio o cambiar la versión del consentimiento.'],
    ['Terceros y preferencias', 'Los enlaces externos, como Instagram o WhatsApp si están habilitados, pueden aplicar sus propias políticas. Podés abrir “Configurar privacidad” desde el pie de página o eliminar los datos del sitio desde tu navegador.'],
  ],
  terminos: [
    ['Identificación y objeto', `P&P Software presenta servicios de desarrollo de software a medida, automatización y sistemas de gestión. ${legalIdentityNotice}`],
    ['Servicios y presupuestos', 'La información es general y no constituye una oferta vinculante. Enviar una consulta no crea una relación contractual; cada alcance y condición se definirá por escrito.'],
    ['Uso y propiedad intelectual', 'El sitio debe utilizarse de forma lícita y sin interferir con su funcionamiento. Los contenidos, diseño y materiales están protegidos por la normativa aplicable.'],
    ['Enlaces, disponibilidad y responsabilidades', 'Los enlaces externos se ofrecen para facilitar el contacto. Buscamos mantener el sitio disponible y seguro, sin limitar derechos que la ley no permita limitar.'],
    ['Modificaciones, privacidad y contacto', `Podemos actualizar estos términos. El tratamiento de datos se rige por la Política de Privacidad. Consultas: ${legalConfig.contactEmail}. Legislación aplicable: ${legalConfig.country}.`],
  ],
}

function LegalPage({ type }) {
  const title = type === 'terminos' ? 'Términos y Condiciones' : type === 'cookies' ? 'Política de Cookies' : 'Política de Privacidad'
  return <div className="min-h-screen bg-background text-white"><header className="border-b border-white/[0.07] bg-[#05070a]"><div className="mx-auto flex h-[72px] max-w-7xl items-center px-5"><Brand /></div></header><main className="mx-auto max-w-3xl px-5 py-16 sm:py-24"><a href="/" className="text-sm text-blue-400">← Volver al inicio</a><h1 className="mt-8 text-3xl font-semibold sm:text-4xl">{title}</h1><div className="mt-10 space-y-8">{sections[type].map(([heading, text]) => <section key={heading}><h2 className="text-lg font-semibold">{heading}</h2><p className="mt-2 leading-7 text-slate-400">{text}</p></section>)}</div><p className="mt-12 text-sm text-slate-500">Última actualización: {legalConfig.lastUpdated}.</p></main><Footer /></div>
}

export function NotFound() { return <div className="grid min-h-screen place-items-center bg-background px-5 text-center text-white"><div><Brand /><p className="mt-12 text-sm font-semibold uppercase tracking-widest text-blue-400">Error 404</p><h1 className="mt-3 text-3xl font-semibold">Esta página no existe.</h1><a href="/" className="button-primary mt-8 px-5 py-3">Volver al inicio</a></div></div> }
export default LegalPage
