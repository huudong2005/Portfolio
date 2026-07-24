import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds total loading duration
    const intervalTime = 20
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 300) // Small delay before transition
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: '-100svh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glowing Orb */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center z-10">
        {/* Animated Brand text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-outfit text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center gap-1.5"
        >
          <span>Dong Ngo</span>
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
        </motion.div>

        {/* Dynamic percentage counter */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-mono text-cyan-400 mt-6 tracking-widest"
        >
          {Math.floor(progress)}%
        </motion.span>

        {/* Elegant sleek Loading Bar */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full mt-3 overflow-hidden relative border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut' }}
          />
        </div>

        {/* Minimalist Sub-Status text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.4 }}
          className="text-[9px] font-mono text-gray-500 mt-2 uppercase tracking-widest"
        >
          Initializing Portfolio
        </motion.span>
      </div>
    </motion.div>
  )
}
