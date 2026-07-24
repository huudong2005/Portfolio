import { motion } from 'framer-motion'
import { ExternalLink, Check } from 'lucide-react'

// Custom SVG Icons to avoid lucide version mismatches
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

interface ProjectItem {
  id: number
  title: string
  badges: string[]
  description: string
  highlights: string[]
  figmaUrl?: string
  caseStudyUrl?: string
  liveUrl?: string
  githubUrl?: string
  visualization: React.ReactNode
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Healthcare Appointment Booking App',
      badges: ['UI/UX Case Study', 'Figma Project'],
      description:
        'End-to-end UI/UX design for a mobile healthcare application, optimizing hospital booking flows for patients of diverse age groups. Focuses on accessibility, intuitive scheduling, and clear information hierarchy.',
      highlights: [
        'Wireframing & High-fidelity UI layouts',
        'Custom UI assets & specialized cursors',
        'Interactive hotspots & conditional micro-interactions',
      ],
      figmaUrl: 'http://figma.com/design/HrzDxj8k8sua7ZN9MKphwf/%C4%90%E1%BB%93-%C3%A1n---%E1%BB%A8ng-d%E1%BB%A5ng-%C4%91%E1%BA%B7t-kh%C3%A1m-b%E1%BB%87nh--YouMed-?node-id=0-1&p=f&t=Pz1Byi2NI8ziyma3-0',
      caseStudyUrl: '#',
      visualization: (
        <div className="relative w-full h-full min-h-[280px] md:min-h-[350px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group">
          <img
            src="/projects/healthcare.png"
            alt="Healthcare App Design"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback if image doesn't load
              const target = e.target as HTMLElement
              target.style.display = 'none'
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
          
          {/* Mock Floating elements on top of image */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
            <span className="text-[10px] font-mono font-semibold px-2 py-1 bg-indigo-500 text-white rounded">
              Figma Prototyped
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Vietnamese Banh Mi Landing Page',
      badges: ['Frontend Focus', 'Responsive Web'],
      description:
        'A visually engaging landing page introducing Vietnamese culinary culture with a seamless, mobile-first responsive layout. Designed to load instantly and engage visitors with rich imagery and smooth scroll animations.',
      highlights: [
        'Built with modern HTML, CSS, JavaScript (ES6+)',
        'Optimized page load speed & assets delivery',
        'Successfully deployed live on Vercel CI/CD pipeline',
      ],
      liveUrl: 'https://banh-mi-viet-nam-landing-page.vercel.app/',
      githubUrl: 'https://github.com/huudong2005', // Generic workspace github reference
      visualization: (
        <div className="relative w-full h-full min-h-[280px] md:min-h-[350px] rounded-2xl border border-white/10 bg-[#080808] p-4 overflow-hidden flex flex-col justify-between group">
          {/* Top Bar (Browser Mock) */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="text-[9px] text-gray-500 font-mono">banh-mi-landing-page.vercel.app</div>
            <div className="w-10 h-1 bg-white/10 rounded" />
          </div>

          {/* Interactive UI Mockup */}
          <div className="flex-grow flex flex-col justify-center items-center py-4 relative">
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none" />
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="z-10 flex flex-col items-center text-center px-4"
            >
              <span className="text-[10px] tracking-widest text-amber-400 font-bold uppercase mb-1">
                Vietnamese Culinary
              </span>
              <h4 className="font-outfit text-xl font-extrabold text-white">
                BÁNH MÌ VIỆT NAM
              </h4>
              <p className="text-[9px] text-gray-400 max-w-[180px] mt-1">
                Experience the perfect fusion of crispy French baguette and savory Vietnamese ingredients.
              </p>
              
              {/* Fake Interactive Button */}
              <div className="mt-3.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black text-[9px] font-bold rounded-full transition-colors cursor-pointer select-none">
                Order Now
              </div>
            </motion.div>

            {/* Graphic Banh Mi Silhouette shape background */}
            <div className="absolute bottom-2 flex gap-1 justify-center w-full opacity-10">
              <div className="w-32 h-8 bg-amber-400 rounded-full blur-[8px]" />
            </div>
          </div>

          {/* Code Badge */}
          <div className="flex items-center justify-between text-[9px] text-gray-500 font-mono border-t border-white/5 pt-2">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Deployed to Vercel</span>
            </div>
            <span>HTML5 / Tailwind CSS</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Hot Toys Store E-commerce',
      badges: ['Full-stack System', 'Web Application'],
      description:
        'A dynamic e-commerce web application for collectible toy figures, integrating modern frontend UI controls with a secure database backend to handle catalog administration and shopping workflows.',
      highlights: [
        'Architecture built with ASP.NET Core & C# MVC',
        'Oracle Database schema & stored procedures for inventory control',
        'Razor Pages frontend integration with interactive styling',
      ],
      githubUrl: 'https://github.com/huudong2005/HotToysStore',
      visualization: (
        <div className="relative w-full h-full min-h-[280px] md:min-h-[350px] rounded-2xl border border-white/10 bg-[#0c0d12] p-4 overflow-hidden flex flex-col justify-between font-mono text-xs text-gray-400 group">
          {/* IDE Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            </div>
            <div className="text-[10px] text-gray-500">OrderController.cs — ASP.NET Core</div>
            <div className="w-3" />
          </div>

          {/* C# / SQL Mock Code Content */}
          <div className="flex-grow flex flex-col justify-center py-4 px-2 text-[10px] leading-relaxed">
            <div className="text-gray-500">// Check product stock in Oracle DB</div>
            <div>
              <span className="text-purple-400">public async</span> Task&lt;IActionResult&gt;{' '}
              <span className="text-blue-400">Checkout</span>(<span className="text-green-400">OrderDto</span> dto)
            </div>
            <div className="pl-4">{"{"}</div>
            <div className="pl-8">
              <span className="text-purple-400">var</span> status = <span className="text-purple-400">await</span> _db.
              <span className="text-blue-400">ExecuteProcedureAsync</span>(
            </div>
            <div className="pl-12 text-amber-300">"SP_PROCESS_INVENTORY"</div>
            <div className="pl-8">);</div>
            <div className="pl-8">
              <span className="text-purple-400">if</span> (status == <span className="text-emerald-400">Success</span>)
            </div>
            <div className="pl-12">
              <span className="text-purple-400">return</span> <span className="text-blue-400">Ok</span>(new {"{ "}
              <span className="text-cyan-400">OrderId</span> = status.Id {"}"});
            </div>
            <div className="pl-4">{"}"}</div>

            {/* Glowing lines representation */}
            <div className="mt-4 pt-3 border-t border-white/5 flex gap-4 text-[9px] text-gray-500">
              <span className="text-indigo-400"># C#</span>
              <span className="text-purple-400"># OracleSQL</span>
              <span className="text-cyan-400"># MVC</span>
            </div>
          </div>

          {/* Database metrics status bar */}
          <div className="flex items-center justify-between text-[9px] text-gray-500 border-t border-white/5 pt-2">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Oracle Database Connection Active</span>
            </div>
            <span>v1.0.0</span>
          </div>
        </div>
      ),
    },
  ]

  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 15 } as const,
    },
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-white flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">03.</span>
            Featured Projects
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-2" />
        </div>

        {/* Projects Alternating Stack */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={proj.id}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } w-full`}
                >
                  {proj.visualization}
                </div>

                {/* Content side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } flex flex-col text-left space-y-5`}
                >
                  {/* Category Badges */}
                  <div className="flex flex-wrap gap-2">
                    {proj.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[10px] font-mono font-bold tracking-wide uppercase px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-indigo-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit text-2xl md:text-3xl font-extrabold text-white">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5">
                    {proj.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                        <span className="p-0.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shrink-0 mt-0.5">
                          <Check size={10} />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Call to Actions buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {proj.figmaUrl && (
                      <a
                        href={proj.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all duration-300 cursor-pointer"
                      >
                        <FigmaIcon size={14} />
                        <span>Explore Figma Prototype</span>
                      </a>
                    )}
                    {proj.caseStudyUrl && proj.id === 1 && (
                      <a
                        href={proj.caseStudyUrl}
                        className="flex items-center gap-2 px-5 py-2.5 glass-panel hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <span>Read Case Study</span>
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 glass-panel hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
