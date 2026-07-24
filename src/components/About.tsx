import { motion } from 'framer-motion'
import { GraduationCap, Award, Sparkles, Activity, Compass, Flame } from 'lucide-react'

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 } as const,
    },
  }

  // Calculate percentage of TOEIC score (835/990)
  const toeicPercent = (835 / 990) * 100
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (toeicPercent / 100) * circumference

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-white flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">01.</span>
            About Me
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-2" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: The Journey (Spans 2 columns) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-2 glass-panel rounded-2xl p-8 flex flex-col justify-between text-left gradient-border-hover shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-outfit text-xl font-semibold text-white">The Journey</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I am currently a Software Engineering student at{' '}
                  <span className="text-indigo-400 font-semibold">HUFLIT University</span> (Ho Chi Minh City University
                  of Foreign Languages - Information Technology).
                </p>
                <p className="text-gray-400 leading-relaxed font-light">
                  My academic path introduced me to core software architectures, but my true excitement ignited when
                  I discovered frontend technologies and digital interface design. I thrive on crafting the visual details in
                  <span className="text-white font-medium"> Figma</span> and translating them into crisp, interactive, and responsive components in code.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono">
                HUFLIT Student
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono">
                Software Engineering
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono">
                Design-to-Code Specialist
              </span>
            </div>
          </motion.div>

          {/* Card 2: Mindset & Superpower / TOEIC 835 (Spans 1 column) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1 glass-panel rounded-2xl p-8 flex flex-col justify-between text-left gradient-border-hover shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  <Award size={24} />
                </div>
                <h3 className="font-outfit text-xl font-semibold text-white">Global Communication</h3>
              </div>

              {/* Visual TOEIC gauge */}
              <div className="flex justify-center my-6 relative">
                <svg className="w-32 h-32 transform -rotate-90">
                  {/* Background track circle */}
                  <circle
                    cx="64"
                    cy="64"
                    r={radius}
                    className="stroke-neutral-900"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  {/* Animated score circle */}
                  <motion.circle
                    cx="64"
                    cy="64"
                    r={radius}
                    className="stroke-cyan-400"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-outfit font-extrabold text-white">835</span>
                  <span className="text-[10px] text-gray-500 font-mono">/ 990 TOEIC</span>
                </div>
              </div>

              <div className="space-y-3 mt-4 text-center md:text-left">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Highly disciplined, curious, and a self-driven learner.
                </p>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  A high TOEIC score enables fluent technical research, comprehension of complex documentation, and ease in global collaboration.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-cyan-400">
              <Compass size={14} className="animate-spin-slow" />
              <span>Fluent Technical English</span>
            </div>
          </motion.div>

          {/* Card 3: Inspiration & Hobbies (Spans all 3 columns) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-3 glass-panel rounded-2xl p-8 text-left gradient-border-hover shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-outfit text-xl font-semibold text-white">Inspiration & Creative Drive</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                My creativity is fueled by exploring beautifully crafted websites and immersive web effects. Seeing how modern digital products seamlessly blend aesthetics with technical performance inspires me to push my boundaries—turning creative UI ideas into high-performing, interactive layouts.
              </p>
              <p className="text-gray-400 leading-relaxed font-light flex items-center gap-2">
                <Flame size={18} className="text-rose-500 shrink-0" />
                <span>To support this continuous growth and maintain high cognitive energy, I stay dedicated to a disciplined daily workout routine.</span>
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {/* Visual aspect ratios & color palettes mock */}
              <div className="glass-panel border-white/5 rounded-xl p-3.5 flex flex-col gap-3 shadow-md relative overflow-hidden group">
                <div className="aspect-[16/9] bg-neutral-900 rounded-lg border border-white/10 flex items-center justify-center text-[10px] text-gray-500 font-mono relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
                  <span>UI Showcase</span>
                  <div className="absolute bottom-1 right-1 text-[8px] bg-black/60 px-1 rounded text-cyan-400 border border-cyan-400/20">
                    60 FPS
                  </div>
                </div>
                <div className="flex gap-1.5 justify-center">
                  <span className="w-5 h-5 rounded-full bg-[#0a0a0a] border border-white/10 shadow-sm" />
                  <span className="w-5 h-5 rounded-full bg-[#6366f1] border border-white/10 shadow-sm" />
                  <span className="w-5 h-5 rounded-full bg-[#22d3ee] border border-white/10 shadow-sm" />
                  <span className="w-5 h-5 rounded-full bg-[#f3f4f6] border border-white/10 shadow-sm" />
                </div>
                <span className="text-[10px] font-mono text-center text-gray-500">Color Dynamics</span>
              </div>

              <div className="glass-panel border-white/5 rounded-xl p-3.5 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden">
                <div className="p-3 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 my-2">
                  <Activity size={24} className="animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Fitness Habits</span>
                  <span className="text-gray-500 text-[10px] font-mono">Energy & Discipline</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
