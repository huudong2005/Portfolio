import { motion } from 'framer-motion'
import { Check, Compass, Award, Globe, Terminal } from 'lucide-react'

const FigmaIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
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
    className={className}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v3.5A3.5 3.5 0 1 1 8.5 16H5V12.5z" />
    <path d="M5 12.5a3.5 3.5 0 1 0 7 0v-3.5H8.5A3.5 3.5 0 0 0 5 12.5z" />
  </svg>
)

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 16 } as const,
    },
  }

  // Skills divided into Design Mindset and Development Execution
  const designTools = [
    'Figma UI Prototyping',
    'FigJam Journey Mapping',
    'Wireframing & Lo-Fi Drafts',
    'User Testing & Interviews',
    'Information Architecture',
    'Responsive Grid Systems',
    'Design Tokens Specification',
    'Interactive Micro-animations',
  ]

  const devTools = [
    'React.js (18 / 19)',
    'TypeScript Execution',
    'Tailwind CSS (v3 / v4)',
    'Framer Motion Mechanics',
    'Vite Project Tooling',
    'ASP.NET Core MVC',
    'Oracle SQL Database',
    'Git / GitHub & Vercel CI',
  ]

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden bg-transparent">
      {/* Editorial subtle layout divider line */}
      <div className="absolute left-12 top-0 w-[1px] h-full bg-stone-200/40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 md:mb-20 pl-0 md:pl-6">
          <span className="text-[11px] font-mono tracking-widest text-[#C2410C] uppercase font-bold">01. Biography</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mt-2">
            Design Philosophy & Skills
          </h2>
          <div className="h-[1px] w-24 bg-stone-300 mt-4" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Box 1 (Large - Spans 2 Columns): Design Philosophy & Career Goal */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-2 bg-white border border-stone-200/80 rounded-xl p-8 md:p-10 flex flex-col justify-between text-left shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)]"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-stone-900 shadow-sm">
                  <Compass size={20} />
                </div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">Empathetic UX / Functional Code</h3>
              </div>
              
              <div className="space-y-5 text-stone-600 font-sans font-light leading-relaxed text-sm md:text-base">
                <p>
                  I am a Software Engineering student at <span className="text-stone-900 font-medium">HUFLIT University</span>, Ho Chi Minh City. While my academic foundation is anchored in software architecture and databases, my ultimate drive lies in the visual clarity and human experience of digital products.
                </p>
                <p>
                  I view design not as decoration, but as a system of communication. My goal is to build digital products that are intellectually crisp and aesthetically calming. By combining rigorous backend logic with high-fidelity <span className="text-stone-950 font-normal">Figma prototypes</span> and responsive React code, I ensure that design intent is preserved from initial wireframe to deployable code.
                </p>
                <p className="italic text-stone-500 font-serif">
                  "The details are not the details. They make the design." — Charles Eames
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-[10px] uppercase font-mono px-3 py-1 rounded bg-stone-50 text-stone-600 border border-stone-200/50">
                HUFLIT Software Eng
              </span>
              <span className="text-[10px] uppercase font-mono px-3 py-1 rounded bg-stone-50 text-stone-600 border border-stone-200/50">
                Creative Technologist
              </span>
              <span className="text-[10px] uppercase font-mono px-3 py-1 rounded bg-stone-50 text-stone-600 border border-stone-200/50">
                Figma-to-React Bridge
              </span>
            </div>
          </motion.div>

          {/* Box 2 (Small - Spans 1 Column): Quick Stats & Global Comm */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1 bg-white border border-stone-200/80 rounded-xl p-8 flex flex-col justify-between text-left shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)]"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-stone-900 shadow-sm">
                  <Award size={20} />
                </div>
                <h3 className="font-serif text-2xl font-normal text-stone-900">Key Metrics</h3>
              </div>

              {/* Stats stack with large serif numbers */}
              <div className="space-y-6">
                <div className="border-b border-stone-100 pb-4">
                  <div className="font-serif text-4xl font-light text-stone-900">100+</div>
                  <div className="text-xs text-stone-500 font-sans tracking-wide mt-1">Hours of UX & Target Audience Research</div>
                </div>

                <div className="border-b border-stone-100 pb-4">
                  <div className="font-serif text-4xl font-light text-[#C2410C]">10+</div>
                  <div className="text-xs text-stone-500 font-sans tracking-wide mt-1">Academic and Personal Design Projects</div>
                </div>

                <div>
                  <div className="font-serif text-4xl font-light text-[#064E3B] flex items-baseline gap-1">
                    <span>830</span>
                    <span className="text-xs font-sans text-stone-400 font-normal">/ 990</span>
                  </div>
                  <div className="text-xs text-stone-500 font-sans tracking-wide mt-1 flex items-center gap-1.5">
                    <Globe size={12} className="text-stone-400" />
                    <span>TOEIC Score (Fluent Tech English)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-[11px] font-mono text-stone-400 italic">
              Self-disciplined & detail-driven
            </div>
          </motion.div>

          {/* Box 3 (Large - Spans all 3 Columns): Consolidated Skills Toolkit */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-3 bg-white border border-stone-200/80 rounded-xl p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Box Title */}
              <div className="lg:col-span-4 space-y-3 text-left">
                <h3 className="font-serif text-2xl font-normal text-stone-900 flex items-center gap-2">
                  <span>The Toolkit</span>
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-sans font-light">
                  I don't just design vectors; I engineer them into live components. Here are the core methods, tools, and libraries I use daily.
                </p>
                <div className="pt-2 hidden lg:block text-xs font-mono text-stone-300">
                  // pixels == code
                </div>
              </div>

              {/* Design Mindset Columns */}
              <div className="lg:col-span-4 text-left space-y-4">
                <div className="flex items-center gap-2 text-stone-800 font-medium text-sm border-b border-stone-100 pb-2">
                  <FigmaIcon size={14} className="text-stone-400" />
                  <span>UI/UX Design & Prototyping</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {designTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200/60 text-stone-600 hover:text-stone-900 hover:border-stone-400 text-xs font-medium font-sans transition-all duration-200 cursor-default"
                    >
                      <Check size={10} className="text-[#064E3B] shrink-0" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Execution Column */}
              <div className="lg:col-span-4 text-left space-y-4">
                <div className="flex items-center gap-2 text-stone-800 font-medium text-sm border-b border-stone-100 pb-2">
                  <Terminal size={14} className="text-stone-400" />
                  <span>Frontend Engineering & Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {devTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-50 border border-stone-200/60 text-stone-600 hover:text-stone-900 hover:border-stone-400 text-xs font-medium font-sans transition-all duration-200 cursor-default"
                    >
                      <Check size={10} className="text-[#C2410C] shrink-0" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
