import { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
}

const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="relative text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white group py-2"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
  </a>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleResumeDownload = () => {
    // We will download/open the resume PDF
    window.open('/Ngo_Huu_Dong_Resume.pdf', '_blank')
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-lg shadow-black/10' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-outfit text-xl font-bold tracking-tight text-white flex items-center gap-2.5 group">
            <img 
              src="/avatar.jpg" 
              alt="Ngo Huu Dong" 
              className="h-8 w-8 rounded-full object-cover border border-white/10 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)] shrink-0"
            />
            <span className="flex items-center gap-1">
              <span>Dong Ngo</span>
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse-slow shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href} label={item.label} />
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-cyan-400 text-sm font-medium rounded-full text-gray-300 hover:text-white bg-white/5 hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
            >
              <FileDown size={16} className="text-cyan-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-neutral-950/95 backdrop-blur-lg md:hidden border-t border-white/5 flex flex-col justify-between p-8"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-outfit text-2xl font-semibold text-gray-300 hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mb-12">
              <button
                onClick={() => {
                  setIsOpen(false)
                  handleResumeDownload()
                }}
                className="w-full flex items-center justify-center gap-3 py-4 border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/10 text-white font-medium rounded-xl hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer"
              >
                <FileDown size={20} className="text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
