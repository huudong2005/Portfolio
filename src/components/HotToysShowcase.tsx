import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, BarChart3, Layout } from 'lucide-react'

interface HotToysShowcaseProps {
  isOpen: boolean
  onClose: () => void
}

export default function HotToysShowcase({ isOpen, onClose }: HotToysShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'catalog' | 'dashboard'>('home')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Escape key listener to close modal
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
    { id: 'home', label: 'Home & Banner', icon: <Layout size={14} /> },
    { id: 'catalog', label: 'Catalog & Products', icon: <ShoppingBag size={14} /> },
    { id: 'dashboard', label: 'Statistics & Management', icon: <BarChart3 size={14} /> },
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
              <span className="flex h-2.5 w-2.5 rounded-full bg-stone-700 animate-pulse" />
              <div>
                <h3 className="font-serif text-lg font-normal text-stone-900">
                  Hot Toys Store — System Interface
                </h3>
                <p className="text-[9px] text-stone-400 font-mono tracking-wider">ASP.NET CORE MVC & ORACLE DB E-COMMERCE</p>
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
            
            {/* HOME TAB */}
            {activeTab === 'home' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-5 text-left">
                    <span className="text-[10px] font-mono tracking-wider text-[#C2410C] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                      Homepage & Hero Banner
                    </span>
                    <h4 className="font-serif text-2xl font-light text-stone-900">
                      Welcome to ToyStore
                    </h4>
                    <p className="text-stone-650 text-sm leading-relaxed font-light">
                      The homepage features a dark, elegant minimalist design, focusing heavily on highlighting premium action figures.
                    </p>
                    <p className="text-stone-655 text-sm leading-relaxed font-light">
                      The hero banner displays high-contrast visuals with smooth transitions, integrating an intuitive smart search bar at the center to optimize the customer search flow.
                    </p>
                  </div>
                  <div className="lg:col-span-7 flex justify-center">
                    <div 
                      onClick={() => setSelectedImage('/projects/hottoys.jpg')}
                      className="relative max-w-lg w-full rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-zoom-in group"
                    >
                      <img
                        src="/projects/hottoys.jpg"
                        alt="Hot Toys Store Home Banner"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-stone-900/90 text-[10px] text-white font-mono rounded">
                          View Original Size
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub section showing products layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 border-t border-stone-200/60">
                  <div className="lg:col-span-7 flex justify-center order-2 lg:order-1">
                    <div 
                      onClick={() => setSelectedImage('/projects/hottoys/home.jpg')}
                      className="relative max-w-lg w-full rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-zoom-in group"
                    >
                      <img
                        src="/projects/hottoys/home.jpg"
                        alt="Hot Toys Store Home Products"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-stone-900/90 text-[10px] text-white font-mono rounded">
                          View Original Size
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2">
                    <span className="text-[10px] font-mono tracking-wider text-stone-700 uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                      Featured Products
                    </span>
                    <h4 className="font-serif text-2xl font-light text-stone-900">
                      Distribution by Collection
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed font-light">
                      A section showcasing curated collections like Anime Figures (e.g., 2B), DC Figures (e.g., Superman), and trending releases (e.g., Black Myth Wukong).
                    </p>
                    <p className="text-stone-605 text-sm leading-relaxed font-light">
                      Clean Card UI design with smooth borders, displaying item counts and sub-categories clearly.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CATALOG TAB */}
            {activeTab === 'catalog' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-[10px] font-mono tracking-wider text-[#064E3B] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Catalog & Product Details
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Diverse & Convenient Shopping
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Product categorization by universe or brand, such as DC, Marvel, or Anime.
                  </p>
                  <p className="text-stone-605 text-sm leading-relaxed font-light">
                    Each product lists detailed specs: high-definition closeups from Hot Toys or InArt, inventory status, local price (VND), and quick action buttons for "Add to Cart" or "View Details".
                  </p>
                </div>
                <div className="lg:col-span-7 flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/hottoys/catalog.png')}
                    className="relative max-w-lg w-full rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-zoom-in group"
                  >
                    <img
                      src="/projects/hottoys/catalog.png"
                      alt="Hot Toys Store Product Catalog"
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

            {/* DASHBOARD TAB */}
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-[10px] font-mono tracking-wider text-stone-700 uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Reports & Admin Dashboard
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Detailed Analytics Dashboard
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    The system integrates a dedicated smart admin dashboard for managers to monitor and manage store revenues.
                  </p>
                  <p className="text-stone-605 text-sm leading-relaxed font-light">
                    Includes interactive data charts: line and bar graphs tracking revenue and order volume, pie charts analyzing best-selling products, overall gross income statistics, and user account tables.
                  </p>
                </div>
                <div className="lg:col-span-7 flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/hottoys/dashboard.jpg')}
                    className="relative max-w-lg w-full rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-zoom-in group"
                  >
                    <img
                      src="/projects/hottoys/dashboard.jpg"
                      alt="Hot Toys Store Admin Dashboard"
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

          </div>

          {/* Modal Footer Info */}
          <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 text-center">
            <span className="text-[10px] text-stone-400 font-mono tracking-wider">
              DESIGNED IN FIGMA • SYSTEM ARCHITECTURE ASP.NET CORE MVC & ORACLE DB
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
