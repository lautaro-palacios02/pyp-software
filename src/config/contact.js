export const WHATSAPP_NUMBER = ''
export const INSTAGRAM_HANDLE = 'pyp.software'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
export const CONTACT_EMAIL = ''

export const WHATSAPP_MESSAGE =
  'Hola PYP Software, quisiera consultar por el desarrollo de un sistema.'

export const getWhatsAppUrl = () => {
  const number = WHATSAPP_NUMBER.replace(/\D/g, '')

  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}
