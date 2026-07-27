import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Palette, Type, Layout, Grid, Info, MessageSquare, Compass } from 'lucide-react'

interface YouMedCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

export default function YouMedCaseStudy({ isOpen, onClose }: YouMedCaseStudyProps) {
  const [activeTab, setActiveTab] = useState<'brand' | 'design-system' | 'components' | 'screens'>('brand')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Esc key down handler to close modal
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
    { id: 'brand', label: 'Thương hiệu & Logo', icon: <Compass size={16} /> },
    { id: 'design-system', label: 'Hệ thống thiết kế', icon: <Palette size={16} /> },
    { id: 'components', label: 'Components & AI Chatbox', icon: <Layout size={16} /> },
    { id: 'screens', label: 'Bản đồ giao diện', icon: <Grid size={16} /> },
  ] as const

  const colors = [
    { hex: '#007AFF', label: 'Top App Bar', desc: 'Màu nhận diện y tế chính thức, tạo cảm giác chuyên nghiệp, an tâm.' },
    { hex: '#3395FF', label: 'Màu nút primary', desc: 'Dùng cho các hành động chính như Đặt lịch ngay, Đặt khám.' },
    { hex: '#32EA42', label: 'Màu nút secondary', desc: 'Tượng trưng cho sự tươi mới, dùng cho gọi video hoặc chat khẩn cấp.' },
    { hex: '#FFFFFF', label: 'Màu nền trắng', desc: 'Không gian sạch sẽ, trực quan cho nền nội dung văn bản.' },
    { hex: '#E6F2FF', label: 'Màu background 1', desc: 'Xanh nhạt dịu mắt cho các panel thông tin của bác sĩ.' },
    { hex: '#B0D6FF', label: 'Màu background 2', desc: 'Màu nền hỗ trợ phân cấp các nhóm chức năng chính.' },
  ]

  const typography = [
    { tag: 'H5', spec: 'Heading 5 - 18pt Medium Inter', usage: 'Tiêu đề mỗi trang' },
    { tag: 'H6', spec: 'Heading 6 - 15pt Medium Inter', usage: 'Tên bác sĩ, phòng khám, nút bấm...' },
    { tag: 'P', spec: 'Paragraph - 15pt Regular Inter', usage: 'Thông tin mô tả bác sĩ, nội dung chi tiết...' },
    { tag: 'P2', spec: 'Paragraph 2 - 10pt Regular Inter', usage: 'Tên bác sĩ phụ, địa chỉ phòng khám, ghi chú nhỏ...' },
  ]

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Overlay backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col bg-[#0c0d12]/98 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0f1118]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <h3 className="font-outfit text-lg font-bold text-white tracking-wide">
                  YouMed — UI/UX Case Study
                </h3>
                <p className="text-[10px] text-gray-400 font-mono">HEALTHCARE APPOINTMENT BOOKING APP</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex border-b border-white/5 overflow-x-auto bg-[#090a0e] scrollbar-thin px-4 py-2 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Scrollable Content Workspace */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
            
            {/* BRANDING TAB */}
            {activeTab === 'brand' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-bold px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
                    Thương Hiệu & Nhận Diện
                  </span>
                  <h4 className="font-outfit text-2xl font-extrabold text-white">
                    Logo YouMed Đa Dạng Theo Mùa
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Ý tưởng chủ đạo của biểu tượng logo YouMed là chữ <strong className="text-white">"Y"</strong> được bo góc mềm mại, tạo thành nhánh cây hoặc hình dáng một trái tim đang mở rộng, gửi gắm thông điệp chăm sóc tận tâm.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Nhằm tăng tính tương tác và tạo sự hào hứng cho người bệnh, logo được tùy biến động theo các sự kiện lớn trong năm bao gồm:
                  </p>
                  <ul className="space-y-3 text-xs text-gray-300">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span><strong>Phiên bản Normal:</strong> Thiết kế xanh dương tối giản, sạch sẽ và an toàn.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span><strong>Phiên bản Tết:</strong> Màu đỏ tài lộc, điểm xuyết hoa mai, hoa đào và họa tiết rước lộc truyền thống.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span><strong>Phiên bản Noel:</strong> Tone xanh tuyết mát lạnh, đội mũ ông già Noel dễ thương đón Giáng Sinh.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-7 flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/youmed/youmed_logo.png')}
                    className="relative max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-xl cursor-zoom-in group"
                  >
                    <img
                      src="/projects/youmed/youmed_logo.png"
                      alt="YouMed Logo Seasonal Designs"
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-[10px] text-white font-mono rounded-lg border border-white/10">
                        Click để phóng to
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DESIGN SYSTEM TAB */}
            {activeTab === 'design-system' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                {/* Introduction */}
                <div className="text-left max-w-3xl space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                    Design Tokens
                  </span>
                  <h4 className="font-outfit text-2xl font-extrabold text-white">
                    Hệ Thống Phông Chữ & Bảng Màu Chuẩn Hóa
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Hệ thống thiết kế YouMed được thiết lập dựa trên các nguyên tắc thiết kế phẳng nhưng tối ưu hóa khả năng nhận diện thông tin nhanh chóng trên thiết bị cầm tay.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Colors Section */}
                  <div className="space-y-6 text-left">
                    <h5 className="font-outfit text-base font-bold text-white flex items-center gap-2 pb-2 border-b border-white/5">
                      <Palette size={16} className="text-indigo-400" />
                      <span>Bảng màu YouMed (Palette)</span>
                    </h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {colors.map((color, idx) => (
                        <div 
                          key={idx} 
                          className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center gap-3.5 hover:border-white/10 transition-colors"
                        >
                          <div 
                            className="w-10 h-10 rounded-lg shrink-0 border border-white/10 shadow" 
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-xs text-white font-bold">{color.hex}</span>
                            </div>
                            <span className="block text-[10px] text-gray-300 font-semibold truncate">{color.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div 
                      onClick={() => setSelectedImage('/projects/youmed/youmed_colors.png')}
                      className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-zoom-in group"
                    >
                      <img
                        src="/projects/youmed/youmed_colors.png"
                        alt="YouMed Color Guide"
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-[10px] text-white font-mono rounded-lg border border-white/10">
                          Click để xem ảnh gốc
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Typography Section */}
                  <div className="space-y-6 text-left">
                    <h5 className="font-outfit text-base font-bold text-white flex items-center gap-2 pb-2 border-b border-white/5">
                      <Type size={16} className="text-cyan-400" />
                      <span>Phân cấp Phông chữ (Typography)</span>
                    </h5>

                    <div className="space-y-3">
                      {typography.map((typo, idx) => (
                        <div key={idx} className="p-3.5 bg-white/5 border border-white/5 rounded-xl space-y-1.5 hover:border-white/10 transition-colors">
                          <div className="flex justify-between items-center">
                            <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 font-mono text-[9px] font-bold rounded">
                              {typo.tag}
                            </span>
                            <span className="text-[10px] text-gray-500 font-mono">{typo.spec}</span>
                          </div>
                          <p className="text-xs text-white font-semibold">{typo.usage}</p>
                        </div>
                      ))}
                    </div>

                    <div 
                      onClick={() => setSelectedImage('/projects/youmed/youmed_typo.png')}
                      className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-zoom-in group"
                    >
                      <img
                        src="/projects/youmed/youmed_typo.png"
                        alt="YouMed Typography"
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-[10px] text-white font-mono rounded-lg border border-white/10">
                          Click để xem ảnh gốc
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* COMPONENTS & AI TAB */}
            {activeTab === 'components' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                    UI Components & Chatbox
                  </span>
                  <h4 className="font-outfit text-2xl font-extrabold text-white">
                    Hệ Thống Thành Phần Độc Lập & Trợ Lý Ảo
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Các khối giao diện (Figma Components) được xây dựng theo triết lý <strong>Atomic Design</strong> giúp nhà phát triển dễ dàng tái sử dụng và đồng bộ giao diện trong toàn bộ hệ thống.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="mt-1 p-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400 shrink-0 h-fit">
                        <Layout size={14} />
                      </div>
                      <div>
                        <h6 className="text-xs font-bold text-white">UI Components Thống Nhất</h6>
                        <p className="text-[11px] text-gray-400 mt-0.5">Thanh định vị (Bottom Navigation), Ô tìm kiếm thông minh, Bộ lọc thời gian khám, các thẻ thông tin bác sĩ và nút hành động khẩn cấp.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 p-1.5 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-cyan-400 shrink-0 h-fit">
                        <MessageSquare size={14} />
                      </div>
                      <div>
                        <h6 className="text-xs font-bold text-white">Trợ Lý AI YouMed (Chatbot)</h6>
                        <p className="text-[11px] text-gray-400 mt-0.5">Luồng chat được thiết kế chu đáo để hướng dẫn người bệnh khai báo triệu chứng ban đầu. Sau đó đề xuất bệnh viện chuyên khoa và địa chỉ chính xác gần nhất.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/youmed/youmed_components.png')}
                    className="relative max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-xl cursor-zoom-in group"
                  >
                    <img
                      src="/projects/youmed/youmed_components.png"
                      alt="YouMed UI Components Library"
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-[10px] text-white font-mono rounded-lg border border-white/10">
                        Click để phóng to
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN FLOWS TAB */}
            {activeTab === 'screens' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-left max-w-3xl space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Bản Đồ Giao Diện
                  </span>
                  <h4 className="font-outfit text-2xl font-extrabold text-white">
                    Hệ Thống 20+ Màn Hình Chức Năng Hoàn Chỉnh
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Sơ đồ phân bổ và kết nối các màn hình của người dùng. Từ bước đăng nhập, khám phá danh bạ bác sĩ, tiến hành đặt chỗ trực tuyến, thực hiện cuộc gọi video tư vấn từ xa, đến quản lý hồ sơ bệnh án cá nhân.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/youmed/youmed_screens.png')}
                    className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl cursor-zoom-in group"
                  >
                    <img
                      src="/projects/youmed/youmed_screens.png"
                      alt="YouMed Complete UI Flow Diagram"
                      className="w-full h-auto object-contain bg-[#121319] max-h-[500px]"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3.5 py-2 bg-black/75 backdrop-blur-sm text-xs text-white font-semibold rounded-lg border border-white/10 flex items-center gap-2">
                        <Info size={14} className="text-cyan-400" />
                        <span>Nhấn để phóng to toàn màn hình xem rõ chi tiết</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Modal Footer Info */}
          <div className="px-6 py-3 bg-[#08090d] border-t border-white/5 text-center">
            <span className="text-[10px] text-gray-500 font-mono">
              Designed & Prototyped in Figma • Developed in React & Tailwind CSS
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-51 flex items-center justify-center p-4 overflow-hidden">
            {/* Zoom backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-lg cursor-zoom-out"
            />
            {/* Zoom Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="relative max-w-6xl max-h-[90vh] z-10 overflow-auto select-none rounded-xl border border-white/5 bg-[#121319]"
            >
              <img
                src={selectedImage}
                alt="Zoomed Design Asset"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/10 hover:border-white/20 transition-all hover:scale-105"
              >
                <X size={16} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}
