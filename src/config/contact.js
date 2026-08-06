export const CONTACT_PHONE = ''
export const WHATSAPP_NUMBER = ''
export const INSTAGRAM_HANDLE = 'pyp.software'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`
export const CONTACT_EMAIL = 'argroup.pyp@gmail.com'

const WHATSAPP_MESSAGE =
  'Hola PYP Software, quisiera consultar por el desarrollo de un sistema.'

const contactPhoneDigits = CONTACT_PHONE.replace(/\D/g, '')
export const isPhoneConfigured = /^\d{10,15}$/.test(contactPhoneDigits)
export const isWhatsAppConfigured = /^\d{10,15}$/.test(WHATSAPP_NUMBER)

export const getPhoneUrl = () =>
  isPhoneConfigured ? `tel:+${contactPhoneDigits}` : null

export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE) => {
  if (!isWhatsAppConfigured) return null

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(String(message ?? ''))}`
}
