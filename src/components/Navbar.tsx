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
    className="relative text-sm font-medium text-stone-600 transition-colors duration-300 hover:text-stone-900 group py-2"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C2410C] transition-all duration-300 group-hover:w-full" />
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
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleResumeDownload = () => {
    window.open('/Ngo_Huu_Dong_Resume.pdf', '_blank')
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-xl font-bold tracking-tight text-stone-900 flex items-center gap-2.5 group">
            <img 
              src="/avatar.jpg" 
              alt="Ngo Huu Dong" 
              className="h-8 w-8 rounded-full object-cover border border-stone-200/80 group-hover:border-stone-900 transition-colors duration-300 shadow-sm shrink-0"
            />
            <span className="flex items-center gap-1 font-serif">
              <span>Dong Ngo</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#064E3B] animate-pulse" />
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
              className="flex items-center gap-2 px-4 py-2 border border-stone-200 hover:border-stone-900 text-sm font-medium rounded-full text-stone-600 hover:text-stone-900 bg-white/40 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
            >
              <FileDown size={14} className="text-stone-500 group-hover:text-stone-900" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="fixed inset-0 top-[60px] z-40 bg-[#FDFBF7]/98 backdrop-blur-lg md:hidden border-t border-stone-200/60 flex flex-col justify-between p-8"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-semibold text-stone-700 hover:text-stone-900 transition-colors py-2 border-b border-stone-200/60"
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
                className="w-full flex items-center justify-center gap-3 py-4 border border-stone-200 hover:border-stone-900 bg-white text-stone-800 font-medium rounded-xl hover:bg-stone-50 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <FileDown size={18} className="text-stone-500" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
