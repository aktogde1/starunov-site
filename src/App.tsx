import { useEffect, useState } from 'react'
import { LangProvider } from './i18n/LangContext'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Features } from './sections/Features'
import { Pricing } from './sections/Pricing'
import { Technology } from './sections/Technology'
import { Complex } from './sections/Complex'
import { Education } from './sections/Education'
import { Reviews } from './sections/Reviews'
import { Certificates } from './sections/Certificates'
import { FAQ } from './sections/FAQ'
import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'
import { StickyCTA } from './sections/StickyCTA'

function App() {
  const [a11y, setA11y] = useState(() => localStorage.getItem('a11y') === 'on')

  useEffect(() => {
    if (a11y) {
      document.documentElement.dataset.a11y = 'on'
      localStorage.setItem('a11y', 'on')
    } else {
      delete document.documentElement.dataset.a11y
      localStorage.setItem('a11y', 'off')
    }
  }, [a11y])

  return (
    <LangProvider>
      <Navbar a11y={a11y} setA11y={setA11y} />
      <main>
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Technology />
        <Complex />
        <Education />
        <Reviews />
        <Certificates />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
    </LangProvider>
  )
}

export default App
