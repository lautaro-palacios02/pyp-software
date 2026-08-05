import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Problems from './components/Problems'
import Solutions from './components/Solutions'
import Process from './components/Process'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import WhyUs from './components/WhyUs'
import About from './components/About'
import MainCta from './components/MainCta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Problems />
        <Solutions />
        <Process />
        <Projects />
        <Technologies />
        <WhyUs />
        <About />
        <MainCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
