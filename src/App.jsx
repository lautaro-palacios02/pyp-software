import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustBar from "./components/TrustBar"
import Services from "./components/Services"
import Problems from "./components/Problems"
import Solutions from "./components/Solutions"
import Process from "./components/Process"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import WhyUs from "./components/WhyUs"
import About from "./components/About"
import MainCta from "./components/MainCta"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import LegalPage, { NotFound } from "./components/LegalPage"
import CookieBanner from "./components/privacy/CookieBanner"
import CookieSettings from "./components/privacy/CookieSettings"

const legalRoutes = { "/privacidad": "privacidad", "/cookies": "cookies", "/terminos": "terminos" }

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/"
  if (legalRoutes[path]) return <><LegalPage type={legalRoutes[path]} /><CookieBanner /><CookieSettings /></>
  if (path !== "/") return <NotFound />
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-white">
      <Navbar />
      <main><Hero /><TrustBar /><Services /><Problems /><Solutions /><Process /><Projects /><Technologies /><WhyUs /><About /><MainCta /><Contact /></main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <CookieSettings />
    </div>
  )
}
export default App
