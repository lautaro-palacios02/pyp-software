import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../config/contact'

function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-emerald-300/20 bg-[#14271f] text-emerald-300 shadow-[0_12px_35px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-[#183126] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:bottom-6 sm:right-6 sm:size-13"
      aria-label="Contactar a PYP Software por WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={1.8} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
