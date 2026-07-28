import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Check, ArrowRight } from 'lucide-react'
import YouMedCaseStudy from './YouMedCaseStudy'
import HotToysShowcase from './HotToysShowcase'
import PhoShowcase from './PhoShowcase'

// Custom SVG Icons to avoid lucide version mismatches
const FigmaIcon = ({ size = 14 }: { size?: number }) => (
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
    className="inline-block align-text-bottom"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v3.5A3.5 3.5 0 1 1 8.5 16H5V12.5z" />
    <path d="M5 12.5a3.5 3.5 0 1 0 7 0v-3.5H8.5A3.5 3.5 0 0 0 5 12.5z" />
  </svg>
)

const GithubIcon = ({ size = 14 }: { size?: number }) => (
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
    className="inline-block align-text-bottom"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export default function Projects() {
  const [isYouMedCaseStudyOpen, setIsYouMedCaseStudyOpen] = useState(false)
  const [isHotToysShowcaseOpen, setIsHotToysShowcaseOpen] = useState(false)
  const [isPhoShowcaseOpen, setIsPhoShowcaseOpen] = useState(false)

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 } as const,
    },
  }

  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden bg-transparent">
      {/* Subtle line background detail */}
      <div className="absolute right-12 top-0 w-[1px] h-full bg-stone-200/40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 md:mb-20">
          <span className="text-[11px] font-mono tracking-widest text-[#C2410C] uppercase font-bold">02. Selected Work</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mt-2">
            Case Studies & Projects
          </h2>
          <div className="h-[1px] w-24 bg-stone-300 mt-4" />
        </div>

        {/* Asymmetrical Magazine Grid */}
        <div className="space-y-16 md:space-y-24">

          {/* FEATURED PROJECT: YouMed (Full Width / Large Split Card) */}
          <motion.div
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-stone-200/80 rounded-xl p-6 md:p-8 shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)]"
          >
            {/* Visual Container */}
            <div
              className="lg:col-span-7 w-full overflow-hidden rounded-lg bg-gradient-to-tr from-stone-100 to-stone-50/30 border border-stone-200/60 shadow-sm relative group cursor-pointer aspect-[16/10] flex items-center justify-center p-6 md:p-8"
              onClick={() => setIsYouMedCaseStudyOpen(true)}
            >
              {/* Phone Mockup Wrapper */}
              <div className="h-full aspect-[9/19] rounded-[24px] border-[4px] border-stone-900 bg-stone-950 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Phone Speaker/Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-stone-900 rounded-full z-20 flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-stone-850" />
                </div>
                <img
                  src="/projects/healthcare.png"
                  alt="Healthcare Appointment Booking App Screen"
                  className="w-full h-full object-cover object-top select-none"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-1 bg-stone-900 text-[#FDFBF7] rounded">
                  Figma Prototyped
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="lg:col-span-5 flex flex-col text-left space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                  UI/UX Case Study
                </span>
                <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                  Healthcare app
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3.5xl font-light text-stone-900 leading-tight">
                Healthcare Appointment Booking App
              </h3>

              {/* Problem Statement Box */}
              <div className="border-l-[1.5px] border-[#C2410C] pl-4 py-0.5 my-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">UX Problem Statement</span>
                <p className="text-stone-600 text-xs md:text-sm font-light mt-1">
                  Patients of diverse age groups struggled to navigate convoluted hospital schedules. The solution designs an intuitive, chat-assisted booking path to minimize drop-off.
                </p>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed font-light">
                An end-to-end UI/UX design for a mobile healthcare app, optimized for clinical flow accuracy, interactive component consistency, and visual ergonomics.
              </p>

              <ul className="space-y-2">
                {['Wireframing & interactive Figma prototype assets', 'Systematic components & dark/light responsive grids', 'Heuristic user-testing & journey maps'].map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-650">
                    <span className="p-0.5 rounded bg-[#064E3B]/10 text-[#064E3B] shrink-0 mt-0.5">
                      <Check size={10} />
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-3">
                <button
                  onClick={() => setIsYouMedCaseStudyOpen(true)}
                  className="group flex items-center gap-1.5 py-2 text-stone-900 hover:text-[#C2410C] text-sm font-semibold tracking-wide transition-all cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary Figma Link */}
                <a
                  href="http://figma.com/design/HrzDxj8k8sua7ZN9MKphwf/%C4%90%E1%BB%93-%C3%A1n---%E1%BB%A8ng-d%E1%BB%A5ng-%C4%91%E1%BA%B7t-kh%C3%A1m-b%E1%BB%87nh--YouMed-?node-id=0-1&p=f&t=Pz1Byi2NI8ziyma3-0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-200 hover:border-stone-900 text-xs text-stone-600 hover:text-stone-900 rounded-lg transition-all"
                >
                  <FigmaIcon size={12} />
                  <span>Figma File</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2-COLUMN GRID (Banh Mi & Pho Landing Page side-by-side) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* PROJECT 2: Vietnamese Banh Mi Landing Page (Spans 6 Columns) */}
            <motion.div
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-6 bg-white border border-stone-200/80 rounded-xl p-6 shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)] flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Browser Mockup Visual */}
                <div className="w-full rounded-lg overflow-hidden border border-stone-250/60 bg-stone-50 group shadow-sm flex flex-col">
                  {/* Browser topbar */}
                  <div className="flex items-center justify-between border-b border-stone-200/80 px-3 py-2 bg-stone-100/80 select-none">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-stone-200" />
                      <span className="w-2 h-2 rounded-full bg-stone-200" />
                      <span className="w-2 h-2 rounded-full bg-stone-200" />
                    </div>
                    <div className="text-[8px] text-stone-400 font-mono">banh-mi-viet-nam.vercel.app</div>
                    <div className="w-6" />
                  </div>
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src="/projects/banhmi.png"
                      alt="Vietnamese Banh Mi Landing Page"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none'
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                    Frontend Focus
                  </span>
                  <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                    Responsive Web
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-stone-900 leading-snug">
                  Vietnamese Banh Mi Landing Page
                </h3>

                {/* Problem Statement Box */}
                <div className="border-l-[1.5px] border-[#064E3B] pl-4 py-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 font-bold block">UX Problem Statement</span>
                  <p className="text-stone-600 text-xs font-light mt-0.5">
                    Culinary promotional pages often sacrifice clean accessibility and page speed for raw visuals. This layout serves optimized imagery paired with instant responsive flows.
                  </p>
                </div>

                <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                  A beautiful, visually engaging landing page introducing Vietnamese culinary culture. Built with clean HTML, CSS, and modern JavaScript to maximize loading velocity.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 mt-auto">
                <a
                  href="https://banh-mi-viet-nam-landing-page.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-[#FDFBF7] text-xs font-medium rounded-lg shadow-sm transition-all"
                >
                  <ExternalLink size={12} />
                  <span>Live Demo</span>
                </a>

                <a
                  href="https://github.com/huudong2005"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 border border-stone-200 hover:border-stone-900 text-xs text-stone-600 hover:text-stone-900 rounded-lg transition-all"
                >
                  <GithubIcon size={12} />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>

            {/* PROJECT 3: Pho Landing Page (Spans 6 Columns) */}
            <motion.div
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-6 bg-white border border-stone-200/80 rounded-xl p-6 shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)] flex flex-col justify-between cursor-pointer group"
              onClick={() => setIsPhoShowcaseOpen(true)}
            >
              <div className="space-y-5">
                {/* Browser Mockup Visual */}
                <div className="w-full rounded-lg overflow-hidden border border-stone-250/60 bg-stone-50 shadow-sm flex flex-col">
                  {/* Browser topbar */}
                  <div className="flex items-center justify-between border-b border-stone-200/80 px-3 py-2 bg-stone-100/80 select-none">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-stone-200" />
                      <span className="w-2 h-2 rounded-full bg-stone-200" />
                      <span className="w-2 h-2 rounded-full bg-stone-200" />
                    </div>
                    <div className="text-[8px] text-stone-400 font-mono">pho-landing-page-1.vercel.app</div>
                    <div className="w-6" />
                  </div>
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src="/projects/pho.png"
                      alt="Vietnamese Pho Landing Page"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none'
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                    UX Design
                  </span>
                  <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                    Design Tokens
                  </span>
                  <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                    Responsive Web
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-stone-900 leading-snug">
                  Pho Landing Page
                </h3>

                {/* Problem Statement Box */}
                <div className="border-l-[1.5px] border-[#C23A22] pl-4 py-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 font-bold block">UX Problem Statement</span>
                  <p className="text-stone-600 text-xs font-light mt-0.5">
                    Food showcase websites often fail to reflect the authentic heritage of traditional dishes. This landing page establishes a detailed, color-calibrated typography system for an immersive experience.
                  </p>
                </div>

                <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                  A beautiful cultural presentation landing page featuring Phở, Vietnam's national dish. Integrates rich warm colors, typography rules, and an adaptive layout designed in Figma.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 mt-auto" onClick={(e) => e.stopPropagation()}>
                <a
                  href="https://pho-landing-page-1.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-[#FDFBF7] text-xs font-medium rounded-lg shadow-sm transition-all"
                >
                  <ExternalLink size={12} />
                  <span>Live Demo</span>
                </a>

                <a
                  href="https://www.figma.com/design/2BSxSGfH6BTpbCGUSBJrLI/Pho?node-id=0-1&t=QbP3x0MotW9kB3Oh-1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 border border-stone-200 hover:border-stone-900 text-xs text-stone-600 hover:text-stone-900 rounded-lg transition-all"
                >
                  <FigmaIcon size={12} />
                  <span>Figma Design</span>
                </a>

                <button
                  onClick={() => setIsPhoShowcaseOpen(true)}
                  className="flex items-center gap-1 py-1 text-stone-900 hover:text-[#C23A22] text-xs font-semibold tracking-wide transition-all ml-auto hover:underline"
                >
                  <span>View Design</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>

          </div>

          {/* FEATURED PROJECT 4: Hot Toys Store E-commerce (Full Width / Large Split Card) */}
          <motion.div
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-stone-200/80 rounded-xl p-6 md:p-8 shadow-[0_20px_50px_-15px_rgba(28,25,23,0.03)]"
          >
            {/* Content Container (Left side on desktop for checkers pattern) */}
            <div className="lg:col-span-5 flex flex-col text-left space-y-5 order-2 lg:order-1">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                  ASP.NET Core
                </span>
                <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                  Oracle DB
                </span>
                <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/60 rounded-full">
                  Fullstack Web
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3.5xl font-light text-stone-900 leading-tight">
                Hot Toys Store E-commerce
              </h3>

              {/* Problem Statement Box */}
              <div className="border-l-[1.5px] border-[#1C1917] pl-4 py-0.5 my-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">UX Problem Statement</span>
                <p className="text-stone-600 text-xs md:text-sm font-light mt-1">
                  Niche collectors require immediate stock transparency and clean catalog filters. This solution maps a relational database structure directly into intuitive inventory controls.
                </p>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed font-light">
                A full-stack MVC application integrating interactive Razor Pages frontend workflows with a secure database for inventory control.
              </p>

              <ul className="space-y-2">
                {['Interactive catalog with multi-criteria filtering', 'Role-based access control for customers and administrators', 'Administrative dashboard with chart visualizations for revenue tracking'].map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-650">
                    <span className="p-0.5 rounded bg-stone-900/10 text-stone-900 shrink-0 mt-0.5">
                      <Check size={10} />
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-3">
                <button
                  onClick={() => setIsHotToysShowcaseOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-[#FDFBF7] text-xs font-medium rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <ExternalLink size={12} />
                  <span>View System Screens</span>
                </button>

                <a
                  href="https://github.com/huudong2005/HotToysStore"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 border border-stone-200 hover:border-stone-900 text-xs text-stone-600 hover:text-stone-900 rounded-lg transition-all"
                >
                  <GithubIcon size={12} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Visual Container (Right side on desktop) */}
            <div
              className="lg:col-span-7 w-full overflow-hidden rounded-lg bg-stone-50 border border-stone-200/60 shadow-sm relative group cursor-pointer order-1 lg:order-2"
              onClick={() => setIsHotToysShowcaseOpen(true)}
            >
              {/* IDE Mockup Visual */}
              <div className="w-full flex flex-col">
                {/* topbar */}
                <div className="flex items-center justify-between border-b border-stone-200/80 px-3 py-2 bg-stone-100/80 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-stone-200" />
                    <span className="w-2 h-2 rounded-full bg-stone-200" />
                    <span className="w-2 h-2 rounded-full bg-stone-200" />
                  </div>
                  <div className="text-[8px] text-stone-400 font-mono">hottoys-ecommerce.local</div>
                  <div className="w-6" />
                </div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src="/projects/hottoys.jpg"
                    alt="Hot Toys Store E-commerce"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none'
                    }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-1 bg-stone-900 text-[#FDFBF7] rounded">
                  System Screens
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* YouMed Case Study Modal */}
      <YouMedCaseStudy
        isOpen={isYouMedCaseStudyOpen}
        onClose={() => setIsYouMedCaseStudyOpen(false)}
      />

      {/* Hot Toys Store Showcase Modal */}
      <HotToysShowcase
        isOpen={isHotToysShowcaseOpen}
        onClose={() => setIsHotToysShowcaseOpen(false)}
      />

      {/* Pho Showcase Modal */}
      <PhoShowcase
        isOpen={isPhoShowcaseOpen}
        onClose={() => setIsPhoShowcaseOpen(false)}
      />
    </section>

  )
}
