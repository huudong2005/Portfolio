import { motion } from 'framer-motion'
import { ArrowUpRight, Palette, Code, GraduationCap, Compass } from 'lucide-react'

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 16,
      } as const,
    },
  }

  return (
    <section className="relative min-h-[92svh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent">
      {/* Background Architectural Grid Lines Detail */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-stone-200/40 hidden md:block" />
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-stone-200/40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Content Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-left space-y-8"
        >
          {/* Badge */}
          <motion.div variants={childVariants} className="inline-flex">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#064E3B]" />
              Available for UI/UX Internships
            </span>
          </motion.div>

          {/* Editorial Headline */}
          <div className="space-y-4">
            <motion.h1
              variants={childVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-stone-900"
            >
              Crafting <span className="font-serif italic font-normal text-stone-950">intuitive</span>, <br />
              <span className="font-sans font-extrabold tracking-tight text-stone-900">human-centered</span> <br />
              digital experiences.
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p
            variants={childVariants}
            className="text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-light"
          >
            I’m Ngo Huu Dong, a Software Engineering student bridging the gap between sophisticated interface design and clean, scalable frontend code.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-850 text-[#FDFBF7] font-medium rounded-lg shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(28,25,23,0.15)] transition-all duration-300 transform active:scale-[0.98]"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href="#contact"
              className="editorial-underline py-2 text-stone-900 font-semibold text-sm tracking-wide"
            >
              View Resume / Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual/Decor Column (Editorial Canvas Mockup) */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[350px] sm:min-h-[420px]">
          {/* Magazine/Editorial Canvas Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[380px] h-[400px] bg-white border border-stone-200/80 rounded-lg p-6 shadow-[0_20px_50px_-15px_rgba(28,25,23,0.05)] overflow-hidden flex flex-col justify-between"
          >
            {/* Canvas Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
              </div>
              <div className="text-[9px] text-stone-400 font-mono tracking-widest uppercase">Canvas — Layout Draft</div>
            </div>

            {/* Subtle Vector Curve Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none p-6">
              <svg className="w-full h-full" viewBox="0 0 350 280" fill="none">
                <path d="M40 200 C 120 20, 200 220, 300 60" stroke="#C2410C" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="120" cy="110" r="3" fill="#C2410C" />
                <circle cx="200" cy="140" r="3" fill="#C2410C" />
                <line x1="120" y1="110" x2="200" y2="140" stroke="rgba(28,25,23,0.1)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Layout Coordinates / Rules */}
            <div className="absolute top-16 left-6 text-[8px] text-stone-300 font-mono">X: 120 / Y: 340</div>
            <div className="absolute bottom-16 right-6 text-[8px] text-stone-300 font-mono">W: 100% / H: AUTO</div>

            {/* Minimalist Floating Cards */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-6 top-20 flex items-center gap-2 px-3 py-1.5 rounded-md border border-stone-200/80 bg-white text-stone-700 text-[11px] font-sans font-medium shadow-sm"
            >
              <Palette size={12} className="text-[#064E3B]" />
              <span>UI/UX Designer</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute right-6 top-36 flex items-center gap-2 px-3 py-1.5 rounded-md border border-stone-200/80 bg-white text-stone-700 text-[11px] font-sans font-medium shadow-sm"
            >
              <Code size={12} className="text-[#C2410C]" />
              <span>React Dev</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute left-8 bottom-16 flex items-center gap-2 px-3 py-1.5 rounded-md border border-stone-200/80 bg-white text-stone-700 text-[11px] font-sans font-medium shadow-sm"
            >
              <GraduationCap size={12} className="text-stone-500" />
              <span>HUFLIT SE Student</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute right-10 top-14 flex items-center gap-1.5 px-2 py-1 rounded border border-stone-200/80 bg-stone-50 text-stone-600 text-[9px] font-mono shadow-sm"
            >
              <Compass size={10} className="text-stone-400" />
              <span>TOEIC 830</span>
            </motion.div>

            {/* Custom Figma-Style Cursor and Path Point */}
            <div className="flex flex-col items-center justify-center h-full gap-2 relative">
              <motion.div
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -20, 15, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute z-20"
                style={{ top: '45%', left: '42%' }}
              >
                {/* SVG Pointer Cursor */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
                  <path
                    d="M3 3V21L9.12 14.88L15.24 21L18.12 18.12L12 12L18.12 6.12L3 3Z"
                    fill="#1c1917"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute top-4 left-3.5 bg-stone-900 text-[#FDFBF7] text-[8px] px-1 py-0.5 rounded font-mono shadow-sm select-none">
                  Dong Ngo
                </div>
              </motion.div>

              <div className="font-mono text-[10px] text-stone-400 mt-20 select-none">
                &lt;div className="editorial-style" /&gt;
              </div>
            </div>

            {/* Canvas Footer */}
            <div className="flex items-center justify-between border-t border-stone-100 pt-4 text-[9px] text-stone-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#064E3B]" />
                <span>Responsive Grid</span>
              </div>
              <div>Scale: 100%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
