import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Palette, Type, Layout, Grid, ExternalLink } from 'lucide-react'

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

interface PhoShowcaseProps {
  isOpen: boolean
  onClose: () => void
}

export default function PhoShowcase({ isOpen, onClose }: PhoShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'wireframe' | 'design-system' | 'product'>('wireframe')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  // State for tracking active sub-section in final product images
  const [activeProductSection, setActiveProductSection] = useState<'hero' | 'story' | 'variants'>('hero')

  // Escape key down handler to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const tabs = [
    { id: 'wireframe', label: 'Wireframe Structure', icon: <Grid size={14} /> },
    { id: 'design-system', label: 'Design Tokens', icon: <Palette size={14} /> },
    { id: 'product', label: 'Final Showcase', icon: <Layout size={14} /> },
  ] as const

  const colors = [
    { hex: '#1C0E07', name: 'BG1', usage: 'Primary background color (warm brown tone), capturing the rich warmth of Pho beef broth.' },
    { hex: '#FAF4EA', name: 'BG2', usage: 'Secondary background color (light cream tone), evoking the elegance of clean, fresh rice noodles.' },
    { hex: '#26140B', name: 'Nav', usage: 'Navigation bar color, anchoring the layout structure securely at the top.' },
    { hex: '#D1A377', name: 'Text 1', usage: 'Primary text and secondary label color (light golden-brown tone).' },
    { hex: '#C23A22', name: 'Text 2', usage: 'Accent color (warm chili red tone), stimulating the senses and creating visual appeal.' },
  ]

  const typography = [
    { tag: 'Heading 1', spec: '60/60 Line Height', usage: 'Main heading in the introductory Hero Section.' },
    { tag: 'Food Name', spec: '48/48 Line Height', usage: 'Names of signature Pho dishes on the menu.' },
    { tag: 'Text 0', spec: '24/32 Line Height', usage: 'Subheadings or short blockquotes.' },
    { tag: 'Text 1 / Description', spec: '18/26 Line Height', usage: 'Primary body descriptions, highlighting the heritage story of Pho.' },
    { tag: 'Small Heading', spec: '14/20 Line Height', usage: 'Small badges and labels classifying content.' },
  ]

  const productSections = [
    { id: 'hero', name: 'Hero Section', path: '/projects/pho/product_hero.png', desc: 'Introductory interface with a prominent heading layered over an authentic Pho background, paired with a classic warm-brown navigation bar (Story, Ingredients, Variants, Culture).' },
    { id: 'story', name: 'Story & Ingredients', path: '/projects/pho/product_story.png', desc: 'Presents the origin story of Pho, blending clean photography with a list of 4 key ingredients (Noodles, Broth, Herbs, Beef).' },
    { id: 'variants', name: 'Signature Variants', path: '/projects/pho/product_variants.png', desc: 'Showcases signature Pho variants: Beef (Pho Bo), Chicken (Pho Ga), and Vegetarian (Pho Chay) with appetizing, harmonious color palettes.' },
  ] as const

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Overlay backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col bg-[#FDFBF7] border border-stone-250/70 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden z-10"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/80 bg-white">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#C23A22] animate-pulse" />
              <div>
                <h3 className="font-serif text-lg font-normal text-stone-900">
                  Pho Landing Page — Work Process
                </h3>
                <p className="text-[9px] text-stone-400 font-mono tracking-wider">VIETNAMESE HERITAGE PHO PAGE DESIGN</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-stone-200 hover:border-stone-400 text-stone-500 hover:text-stone-950 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex border-b border-stone-200/60 overflow-x-auto bg-stone-50/50 px-4 py-2 gap-2 select-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-stone-900 text-[#FDFBF7] shadow-sm'
                    : 'text-stone-550 hover:text-stone-900 hover:bg-stone-100/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Scrollable Content Workspace */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white/40">
            
            {/* WIREFRAME TAB */}
            {activeTab === 'wireframe' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-[10px] font-mono tracking-wider text-[#C23A22] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Structure Sketch (UX Wireframes)
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Magazine Layout & Content Hierarchy
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    The process began with building interface skeletons (Frames 22, 18, 19, 23, 24) to distribute information and visuals asymmetrically, mimicking premium magazine layouts.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Clearly demarcated zones optimize user reading flow: moving from a bold hook in the Hero banner, to heritage stories alongside prominent graphics, core ingredients, and a balanced three-column grid showcasing product variants.
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href="https://www.figma.com/design/2BSxSGfH6BTpbCGUSBJrLI/Pho?node-id=0-1&t=QbP3x0MotW9kB3Oh-1"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-300 hover:border-stone-900 text-xs font-semibold text-stone-700 hover:text-stone-900 rounded-lg transition-all bg-white"
                    >
                      <FigmaIcon size={12} />
                      <span>View Original Figma File</span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-7 flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/pho/wireframe.png')}
                    className="relative max-w-lg w-full rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-zoom-in group"
                  >
                    <img
                      src="/projects/pho/wireframe.png"
                      alt="Pho Project UX Wireframe"
                      className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-stone-900/90 text-[10px] text-white font-mono rounded">
                        View Original Size
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DESIGN SYSTEM TAB */}
            {activeTab === 'design-system' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                {/* Introduction */}
                <div className="text-left max-w-3xl space-y-2">
                  <span className="text-[10px] font-mono tracking-wider text-[#C23A22] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Design Tokens
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Dedicated Typography & Color Styles
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    The design tokens for the Pho project evoke a classic, cozy, and appetizing feel, achieved through premium serif typography and warm, natural hues inspired by Vietnamese culinary heritage.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Colors & Typo List */}
                  <div className="lg:col-span-5 space-y-6 text-left">
                    <h5 className="font-serif text-base font-semibold text-stone-900 flex items-center gap-2 pb-2 border-b border-stone-100">
                      <Palette size={14} className="text-stone-500" />
                      <span>Brand Color Palette</span>
                    </h5>
                    
                    <div className="space-y-2.5">
                      {colors.map((color, idx) => (
                        <div 
                          key={idx} 
                          className="p-2.5 bg-white border border-stone-200/80 rounded-lg flex items-center gap-3 hover:border-stone-400 transition-colors"
                        >
                          <div 
                            className="w-7 h-7 rounded shrink-0 border border-stone-200 shadow-sm" 
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex justify-between items-baseline">
                              <span className="font-mono text-xs text-stone-900 font-bold">{color.hex}</span>
                              <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 bg-stone-100 border border-stone-200 text-stone-500 rounded">{color.name}</span>
                            </div>
                            <span className="block text-[10px] text-stone-500 font-light leading-snug mt-0.5">{color.usage}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography Section & Image */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <h5 className="font-serif text-base font-semibold text-stone-900 flex items-center gap-2 pb-2 border-b border-stone-100">
                      <Type size={14} className="text-stone-500" />
                      <span>Typography Hierarchy</span>
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-2.5">
                        {typography.map((typo, idx) => (
                          <div key={idx} className="p-2.5 bg-white border border-stone-200/80 rounded-lg space-y-1 hover:border-stone-400 transition-colors">
                            <div className="flex justify-between items-center">
                              <span className="px-1.5 py-0.5 bg-[#C23A22]/10 text-[#C23A22] font-mono text-[9px] font-bold rounded">
                                {typo.tag}
                              </span>
                              <span className="text-[9px] text-stone-400 font-mono">{typo.spec}</span>
                            </div>
                            <p className="text-[11px] text-stone-600 font-light mt-0.5">{typo.usage}</p>
                          </div>
                        ))}
                      </div>

                      <div 
                        onClick={() => setSelectedImage('/projects/pho/design_token.png')}
                        className="relative rounded-lg overflow-hidden border border-stone-200 bg-stone-50 cursor-zoom-in group w-full"
                      >
                        <img
                          src="/projects/pho/design_token.png"
                          alt="Pho Typography Design Token"
                          className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-3 py-1.5 bg-stone-900/90 text-[10px] text-white font-mono rounded">
                            View Original Image
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PRODUCT TAB */}
            {activeTab === 'product' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-left max-w-3xl space-y-2">
                  <span className="text-[10px] font-mono tracking-wider text-[#C23A22] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Finished Product
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Polished Landing Page Interface
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    The final live product is coded pixel-perfect to the Figma design, preserving the visual elegance of the Pho dishes and cultural storytelling layouts. Select each section below to inspect the details:
                  </p>
                </div>

                {/* Sub-tabs/Buttons for different product sections */}
                <div className="flex gap-2 border-b border-stone-200/40 pb-3 flex-wrap">
                  {productSections.map((sect) => (
                    <button
                      key={sect.id}
                      onClick={() => setActiveProductSection(sect.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                        activeProductSection === sect.id
                          ? 'bg-[#C23A22] border-[#C23A22] text-[#FDFBF7] shadow-sm'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900'
                      }`}
                    >
                      {sect.name}
                    </button>
                  ))}
                </div>

                {/* Active Section Image and description */}
                {productSections.map((sect) => {
                  if (sect.id !== activeProductSection) return null
                  return (
                    <motion.div
                      key={sect.id}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2"
                    >
                      <div className="lg:col-span-4 text-left space-y-3">
                        <span className="text-[10px] font-mono text-[#D1A377] font-bold uppercase">Interface Description</span>
                        <h5 className="font-serif text-lg text-stone-900 font-bold">{sect.name}</h5>
                        <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">{sect.desc}</p>
                        
                        <div className="pt-4 flex flex-col gap-2">
                          <a
                            href="https://pho-landing-page-1.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-[#FDFBF7] text-xs font-medium rounded-lg shadow-sm transition-all text-center"
                          >
                            <ExternalLink size={12} />
                            <span>Visit Live Website</span>
                          </a>
                        </div>
                      </div>

                      <div className="lg:col-span-8 flex justify-center">
                        <div 
                          onClick={() => setSelectedImage(sect.path)}
                          className="relative w-full rounded-lg overflow-hidden border border-stone-200 bg-[#FAF9F6] shadow-md cursor-zoom-in group"
                        >
                          <img
                            src={sect.path}
                            alt={`Pho Product ${sect.name}`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                          />
                          <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-3 py-1.5 bg-stone-900/90 text-[10px] text-white font-mono rounded">
                              View Large Size
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}

          </div>

          {/* Modal Footer Info */}
          <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 text-center">
            <span className="text-[10px] text-stone-400 font-mono tracking-wider">
              DESIGNED IN FIGMA • FULLY RESPONSIVE HTML5 / CSS3 / VITE / TSX
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 overflow-hidden">
            {/* Zoom backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-stone-950/90 backdrop-blur-md cursor-zoom-out"
            />
            {/* Zoom Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative max-w-6xl max-h-[90vh] z-10 overflow-auto select-none rounded-lg border border-stone-850 bg-stone-900"
            >
              <img
                src={selectedImage}
                alt="Zoomed Design Asset"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-950/80 hover:bg-stone-950 text-white border border-stone-800 transition-all hover:scale-105"
              >
                <X size={14} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}
