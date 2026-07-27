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
    { id: 'home', label: 'Trang chủ & Banner', icon: <Layout size={14} /> },
    { id: 'catalog', label: 'Danh mục & Sản phẩm', icon: <ShoppingBag size={14} /> },
    { id: 'dashboard', label: 'Thống kê & Quản lý', icon: <BarChart3 size={14} /> },
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
                  Hot Toys Store — Giao Diện Hệ Thống
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
                      Trang Chủ & Hero Banner
                    </span>
                    <h4 className="font-serif text-2xl font-light text-stone-900">
                      Chào Mừng Đến Với ToyStore
                    </h4>
                    <p className="text-stone-650 text-sm leading-relaxed font-light">
                      Trang chủ thiết kế theo phong cách tối giản huyền bí (Dark Elegant), tập trung làm nổi bật hình ảnh của các mô hình đồ chơi cao cấp (Premium Action Figures).
                    </p>
                    <p className="text-stone-655 text-sm leading-relaxed font-light">
                      Banner chính hiển thị hình ảnh có độ tương phản cao với hiệu ứng chuyển cảnh mượt mà, tích hợp thanh tìm kiếm thông minh trực quan ngay tại trung tâm giúp tối ưu hóa luồng trải nghiệm khách hàng.
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
                          Xem kích thước gốc
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
                          Xem kích thước gốc
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2">
                    <span className="text-[10px] font-mono tracking-wider text-stone-700 uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                      Sản Phẩm Nổi Bật
                    </span>
                    <h4 className="font-serif text-2xl font-light text-stone-900">
                      Phân Phối Theo Bộ Sưu Tập
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed font-light">
                      Khu vực giới thiệu các bộ sưu tập đặc biệt như <strong className="text-stone-900 font-medium">Anime Figures (2B)</strong>, <strong className="text-stone-900 font-medium">DC Figures (Superman)</strong>, hay các sản phẩm cực kỳ hot (<strong className="text-stone-900 font-medium">Black Myth Wukong</strong>).
                    </p>
                    <p className="text-stone-605 text-sm leading-relaxed font-light">
                      Thiết kế dạng thẻ (Card UI) tinh gọn, bo góc mềm mại, hiển thị rõ ràng số lượng sản phẩm đang có và danh mục phân loại đi kèm.
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
                    Danh Mục & Chi Tiết
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Mua Sắm Đa Dạng & Thuận Tiện
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Trang phân loại sản phẩm theo vũ trụ hoặc danh mục hãng sản xuất như DC, Marvel, Anime.
                  </p>
                  <p className="text-stone-605 text-sm leading-relaxed font-light">
                    Mỗi sản phẩm hiển thị đầy đủ thông tin: ảnh chụp sắc nét cận cảnh từ các hãng Hot Toys, InArt, trạng thái kho hàng, mức giá VNĐ trực quan, nút "Thêm vào giỏ" và "Xem chi tiết" tiện lợi.
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
                        Xem kích thước gốc
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
                    Báo Cáo & Quản Trị
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Dashboard Thống Kê Chi Tiết
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Hệ thống tích hợp bảng điều khiển thông minh dành riêng cho Administrator nhằm kiểm soát toàn bộ dòng doanh thu của cửa hàng.
                  </p>
                  <p className="text-stone-605 text-sm leading-relaxed font-light">
                    Bao gồm các biểu đồ trực quan động: biểu đồ cột và đường biểu diễn doanh thu & số lượng đơn hàng, biểu đồ tròn phân tích tỉ lệ phần trăm các sản phẩm bán chạy nhất, thống kê tổng doanh thu đạt được và danh sách khách hàng.
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
                        Xem kích thước gốc
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
