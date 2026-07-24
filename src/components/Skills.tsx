import { motion } from 'framer-motion'
import { Palette, Code2, Database, Sparkles, CheckCircle2 } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  colorClass: string
  bgClass: string
  skills: string[]
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'UI/UX Design',
      icon: <Palette size={22} />,
      colorClass: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
      bgClass: 'shadow-indigo-500/5',
      skills: [
        'Figma UI Prototyping',
        'Wireframing & User Flows',
        'Custom Cursors (128x128)',
        'Custom UI Vector Assets',
        'Responsive Web Design',
        'Atomic Design Systems',
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Code2 size={22} />,
      colorClass: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
      bgClass: 'shadow-cyan-500/5',
      skills: [
        'React.js (React 18/19)',
        'TypeScript',
        'Tailwind CSS (v3 & v4)',
        'Framer Motion',
        'Vite Tooling',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Git / GitHub & CI/CD',
        'Vercel Deployment',
      ],
    },
    {
      title: 'Backend & Databases',
      icon: <Database size={22} />,
      colorClass: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
      bgClass: 'shadow-purple-500/5',
      skills: [
        'C#',
        'ASP.NET Core (MVC)',
        'Razor Pages',
        'Oracle Database',
        'Microsoft SQL Server',
        'RESTful APIs Integration',
        'Relational Schema Design',
      ],
    },
    {
      title: 'Soft Skills & Mindset',
      icon: <Sparkles size={22} />,
      colorClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
      bgClass: 'shadow-emerald-500/5',
      skills: [
        'Advanced English (TOEIC 835)',
        'Self-Learning Capability',
        'Creative Problem Solving',
        'Time Management & Discipline',
        'Detail-Oriented Eyeball',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 } as const,
    },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background radial highlight */}
      <div className="absolute left-10 bottom-10 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-white flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">02.</span>
            Skills & Tech Stack
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-2" />
        </div>

        {/* Skills Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass-panel rounded-2xl p-6 text-left shadow-lg ${cat.bgClass} hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/5">
                <div className={`p-2.5 rounded-xl border ${cat.colorClass}`}>
                  {cat.icon}
                </div>
                <h3 className="font-outfit text-lg font-bold text-white tracking-wide">{cat.title}</h3>
              </div>

              {/* Skills badges grid */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs font-medium font-sans transition-all duration-200"
                  >
                    <CheckCircle2 size={12} className="text-cyan-400/80 shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
