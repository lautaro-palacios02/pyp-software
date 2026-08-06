export const WHATSAPP_NUMBER = '+5493584241056'
export const INSTAGRAM_HANDLE = 'pyp.software'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
export const CONTACT_EMAIL = 'argroup.pyp@gmail.com'

export const WHATSAPP_MESSAGE =
  'Hola PYP Software, quisiera consultar por el desarrollo de un sistema.'

export const isWhatsAppConfigured = /^\d{10,15}$/.test(WHATSAPP_NUMBER)

const contactPhoneDigits = CONTACT_PHONE.replace(/\D/g, '')
export const isPhoneConfigured =
  !/[xX]/.test(CONTACT_PHONE) && /^\d{10,15}$/.test(contactPhoneDigits)

export const getPhoneUrl = () =>
  isPhoneConfigured ? `tel:+${contactPhoneDigits}` : null

export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE) => {
  if (!isWhatsAppConfigured) return null

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
