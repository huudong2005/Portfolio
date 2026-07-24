import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
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
    <div className="bg-[#050505] text-[#f5f5f5] min-h-screen selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Preloader Waiting Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
