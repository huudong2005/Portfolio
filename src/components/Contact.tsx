import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Copy, Check, FileDown } from 'lucide-react'

// Custom SVG Icons to avoid lucide version mismatches
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'dongn3889@gmail.com'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleResumeDownload = () => {
    window.open('/Ngo_Huu_Dong_Resume.pdf', '_blank')
  }

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden bg-transparent">
      {/* Editorial layout lines */}
      <div className="absolute left-12 top-0 w-[1px] h-full bg-stone-200/40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-widest text-[#C2410C] uppercase font-bold">03. Connection</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 tracking-tight leading-tight">
            Let's craft meaningful experiences together.
          </h2>
          <p className="text-stone-650 font-sans font-light text-sm md:text-base leading-relaxed">
            Currently seeking a <span className="text-stone-900 font-semibold">Frontend / UI/UX Design Internship</span> in Ho Chi Minh City, Vietnam. Feel free to reach out to discuss ideas, view design files, or explore collaborations!
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {/* Email Card */}
          <div className="bg-white border border-stone-200/80 rounded-xl p-8 flex flex-col items-center justify-between text-center shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)] group">
            <div className="p-3.5 rounded-full bg-stone-50 border border-stone-150 text-stone-900 mb-4 transition-transform duration-300 group-hover:scale-105">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="text-stone-900 font-serif text-lg font-normal mb-1">Email Address</h3>
              <p className="text-stone-500 text-xs font-mono break-all select-all">{emailAddress}</p>
            </div>
            <div className="mt-5 w-full flex items-center justify-center gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="px-3.5 py-1.5 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Send Mail
              </a>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-[#FDFBF7] text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-sm"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-1"
                    >
                      <Check size={12} className="text-[#10B981]" />
                      <span>Copied!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-1"
                    >
                      <Copy size={12} />
                      <span>Copy Address</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <a
            href="tel:0378113807"
            className="bg-white border border-stone-200/80 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)] group hover:border-stone-400 transition-all duration-350 cursor-pointer"
          >
            <div className="p-3.5 rounded-full bg-stone-50 border border-stone-150 text-stone-900 mb-4 transition-transform duration-300 group-hover:scale-105">
              <Phone size={22} />
            </div>
            <h3 className="text-stone-900 font-serif text-lg font-normal mb-1">Phone / Zalo</h3>
            <p className="text-stone-550 text-xs font-mono">0378113807</p>
            <span className="mt-5 text-xs font-medium text-[#C2410C] group-hover:text-stone-900 transition-colors">
              Call or Chat on Zalo &rarr;
            </span>
          </a>

          {/* Location Card */}
          <div className="bg-white border border-stone-200/80 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)] group">
            <div className="p-3.5 rounded-full bg-stone-50 border border-stone-150 text-stone-900 mb-4 transition-transform duration-300 group-hover:scale-105">
              <MapPin size={22} />
            </div>
            <h3 className="text-stone-900 font-serif text-lg font-normal mb-1">Location</h3>
            <p className="text-stone-605 text-sm font-light">Ho Chi Minh City, Vietnam</p>
            <span className="mt-5 text-[10px] font-mono text-stone-400">HUFLIT District 10</span>
          </div>
        </div>

        {/* Center piece: Resume download callout */}
        <div className="max-w-xs mx-auto text-center mb-16">
          <button
            onClick={handleResumeDownload}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-stone-900 hover:bg-stone-800 text-[#FDFBF7] font-semibold rounded-lg shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(28,25,23,0.15)] transition-all duration-300 transform active:scale-[0.98] cursor-pointer"
          >
            <FileDown size={18} />
            <span>Download Resume (PDF)</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <a
            href="https://www.linkedin.com/in/huu-dong-ngo-839193424"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-stone-200 text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-50 shadow-sm transition-all duration-300 cursor-pointer"
            title="LinkedIn profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/huudong2005"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-stone-200 text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-50 shadow-sm transition-all duration-300 cursor-pointer"
            title="GitHub profile"
          >
            <GithubIcon size={18} />
          </a>
        </div>

        {/* Horizontal separator */}
        <div className="w-full h-[1px] bg-stone-200/60 max-w-7xl mx-auto mb-8" />

        {/* Footer */}
        <footer className="text-center text-xs text-stone-450 font-mono space-y-1.5 pb-6">
          <p>© 2026 Ngo Huu Dong. All rights reserved.</p>
          <p>Designed under a Warm Editorial aesthetic. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
