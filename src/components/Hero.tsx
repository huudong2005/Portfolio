import { motion } from 'framer-motion'
import { ArrowDown, Code, Palette, Cpu, Compass } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      } as const,
    },
  }

  return (
    <section className="relative min-h-[92svh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-left space-y-6"
        >
          {/* Badge */}
          <motion.div variants={childVariants} className="inline-flex">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Available for Internships
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={childVariants}
            className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 drop-shadow-sm">
              Ngo Huu Dong
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={childVariants}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          >
            A Frontend & UI/UX Design Intern passionate about crafting intuitive web experiences and bridging the gap between user-centered designs and clean, scalable code.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-medium rounded-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 transform active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowDown size={18} className="animate-bounce" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 glass-panel hover:bg-white/10 text-gray-300 hover:text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform active:scale-95"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual/Decor Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[350px] sm:min-h-[450px]">
          {/* Abstract Floating Interactive UI Cards mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[400px] h-[360px] glass-panel rounded-2xl p-6 shadow-2xl shadow-black/50 overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Canvas Mock Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/40" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <span className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Canvas - Figma + Code</div>
            </div>

            {/* Canvas Node connections overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <line x1="80" y1="120" x2="220" y2="70" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="220" y1="70" x2="310" y2="150" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="80" y1="120" x2="160" y2="240" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="160" y1="240" x2="310" y2="150" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Dynamic Floating Nodes */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-6 top-16 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-lg shadow-indigo-900/10"
            >
              <Palette size={14} />
              <span>UI/UX Designer</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute right-6 top-36 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-900/10"
            >
              <Code size={14} />
              <span>React Developer</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute left-10 bottom-16 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-900/10"
            >
              <Cpu size={14} />
              <span>Figma Prototyper</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute right-12 top-14 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[11px] font-mono shadow-md"
            >
              <Compass size={12} className="text-purple-400" />
              <span>TOEIC 835</span>
            </motion.div>

            {/* Vector point connector graphic inside canvas */}
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {/* Figma style pointer cursor */}
              <motion.div
                animate={{
                  x: [0, 20, -10, 0],
                  y: [0, -15, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute z-30"
                style={{ top: '45%', left: '48%' }}
              >
                {/* SVG Figma Custom Cursor */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
                  <path
                    d="M3 3V21L9.12 14.88L15.24 21L18.12 18.12L12 12L18.12 6.12L3 3Z"
                    fill="#22d3ee"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute top-5 left-4 bg-cyan-400 text-black text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap shadow-sm select-none">
                  Dong Ngo
                </div>
              </motion.div>

              <div className="font-mono text-[11px] text-gray-500 mt-28">
                &lt;div className="gap-bridged" /&gt;
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] text-gray-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Responsive</span>
              </div>
              <div>Scale: 100%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
