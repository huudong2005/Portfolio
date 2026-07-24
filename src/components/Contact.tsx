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
    <section id="contact" className="pt-24 pb-8 relative overflow-hidden bg-black/10">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/2 w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something Great Together.
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
            Currently seeking a <span className="text-cyan-400 font-medium">Frontend / UI/UX Design Internship</span> in Ho Chi Minh City, Vietnam. I am excited to collaborate on real-world projects and grow alongside experienced developers. Feel free to reach out!
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {/* Email Card with Copy-to-Clipboard */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-between text-center relative overflow-hidden group">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Email Address</h3>
              <p className="text-gray-400 text-sm font-mono break-all">{emailAddress}</p>
            </div>
            <div className="mt-4 w-full flex items-center justify-center gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Send Mail
              </a>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/30 text-indigo-300 hover:text-indigo-200 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer"
                title="Copy to clipboard"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="flex items-center gap-1"
                    >
                      <Check size={12} className="text-emerald-400" />
                      <span>Copied!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="flex items-center gap-1"
                    >
                      <Copy size={12} />
                      <span>Copy</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <a
            href="tel:0378113807"
            className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:bg-white/5 transition-colors duration-300 cursor-pointer"
          >
            <div className="p-3.5 rounded-2xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone size={24} />
            </div>
            <h3 className="text-white font-semibold mb-1">Phone / Zalo</h3>
            <p className="text-gray-400 text-sm font-mono">0378113807</p>
            <span className="mt-4 text-xs font-semibold text-cyan-400/80 group-hover:text-cyan-400 transition-colors">
              Call or Chat on Zalo &rarr;
            </span>
          </a>

          {/* Location Card */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={24} />
            </div>
            <h3 className="text-white font-semibold mb-1">Location</h3>
            <p className="text-gray-400 text-sm">Ho Chi Minh City, Vietnam</p>
            <span className="mt-4 text-xs font-mono text-gray-500">HUFLIT District 10</span>
          </div>
        </div>

        {/* Center piece: Resume download callout */}
        <div className="max-w-md mx-auto text-center mb-16">
          <button
            onClick={handleResumeDownload}
            className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <FileDown size={22} className="animate-bounce" />
            <span>Download Full Resume (PDF)</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="https://www.linkedin.com/in/huu-dong-ngo-839193424"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-white/5 hover:bg-indigo-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] cursor-pointer"
            title="LinkedIn profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="https://github.com/huudong2005"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-white/5 hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer"
            title="GitHub profile"
          >
            <GithubIcon size={20} />
          </a>
        </div>

        {/* Horizontal separator */}
        <div className="w-full h-[1px] bg-white/5 max-w-7xl mx-auto mb-8" />

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 font-mono space-y-1.5 pb-4">
          <p>© 2026 Ngo Huu Dong. All rights reserved.</p>
          <p>Built with React, Tailwind CSS & Framer Motion.</p>
        </footer>
      </div>
    </section>
  )
}
