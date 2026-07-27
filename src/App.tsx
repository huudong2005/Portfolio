import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Preloader from './components/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <div className="bg-[#FDFBF7] text-[#1C1917] min-h-screen selection:bg-[#1C1917] selection:text-[#FDFBF7] font-sans antialiased relative overflow-hidden">
      {/* Editorial subtle grid lines in background */}
      <div className="absolute inset-0 editorial-grid opacity-75 pointer-events-none z-0" />

      {/* Preloader Waiting Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
