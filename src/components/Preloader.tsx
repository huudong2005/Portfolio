import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1600 // 1.6 seconds total loading duration
    const intervalTime = 20
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 200) // Small delay before transition
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
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[100] bg-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center z-10">
        {/* Animated Brand text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 flex items-center gap-1.5"
        >
          <span>Dong Ngo</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
        </motion.div>

        {/* Dynamic percentage counter */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.15 }}
          className="text-xs font-serif italic text-stone-500 mt-4 tracking-widest"
        >
          {Math.floor(progress)}%
        </motion.span>

        {/* Elegant sleek Loading Bar */}
        <div className="w-40 h-[1.5px] bg-stone-200/60 rounded-full mt-2.5 overflow-hidden relative border-none">
          <motion.div
            className="h-full bg-stone-900 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut' }}
          />
        </div>

        {/* Minimalist Sub-Status text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3 }}
          className="text-[9px] font-sans text-stone-500 mt-2 uppercase tracking-widest"
        >
          Initializing Portfolio
        </motion.span>
      </div>
    </motion.div>
  )
}
