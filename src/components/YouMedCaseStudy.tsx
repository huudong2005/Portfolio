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
    { id: 'brand', label: 'Thương hiệu & Logo', icon: <Compass size={14} /> },
    { id: 'design-system', label: 'Hệ thống thiết kế', icon: <Palette size={14} /> },
    { id: 'components', label: 'Components & Chatbox', icon: <Layout size={14} /> },
    { id: 'screens', label: 'Bản đồ giao diện', icon: <Grid size={14} /> },
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
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#064E3B]" />
              <div>
                <h3 className="font-serif text-lg font-normal text-stone-900">
                  YouMed — UI/UX Case Study
                </h3>
                <p className="text-[9px] text-stone-400 font-mono tracking-wider">HEALTHCARE APPOINTMENT BOOKING APP</p>
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
            
            {/* BRANDING TAB */}
            {activeTab === 'brand' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-[10px] font-mono tracking-wider text-[#C2410C] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Thương Hiệu & Nhận Diện
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Logo YouMed Đa Dạng Theo Mùa
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Ý tưởng chủ đạo của biểu tượng logo YouMed là chữ <strong className="text-stone-900 font-medium">"Y"</strong> được bo góc mềm mại, tạo thành nhánh cây hoặc hình dáng một trái tim đang mở rộng, gửi gắm thông điệp chăm sóc tận tâm.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Nhằm tăng tính tương tác và tạo sự hào hứng cho người bệnh, logo được tùy biến động theo các sự kiện lớn trong năm bao gồm:
                  </p>
                  <ul className="space-y-3 text-xs text-stone-600 font-sans font-light">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span><strong className="text-stone-900 font-medium">Phiên bản Normal:</strong> Thiết kế xanh dương tối giản, sạch sẽ và an toàn.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span><strong className="text-stone-900 font-medium">Phiên bản Tết:</strong> Màu đỏ tài lộc, điểm xuyết hoa mai, hoa đào và họa tiết rước lộc truyền thống.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      <span><strong className="text-stone-900 font-medium">Phiên bản Noel:</strong> Tone xanh tuyết mát lạnh, đội mũ ông gia Noel dễ thương đón Giáng Sinh.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-7 flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/youmed/youmed_logo.png')}
                    className="relative max-w-lg w-full rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-zoom-in group"
                  >
                    <img
                      src="/projects/youmed/youmed_logo.png"
                      alt="YouMed Logo Seasonal Designs"
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

            {/* DESIGN SYSTEM TAB */}
            {activeTab === 'design-system' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                {/* Introduction */}
                <div className="text-left max-w-3xl space-y-2">
                  <span className="text-[10px] font-mono tracking-wider text-[#064E3B] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Design Tokens
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Hệ Thống Phông Chữ & Bảng Màu Chuẩn Hóa
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Hệ thống thiết kế YouMed được thiết lập dựa trên các nguyên tắc thiết kế phẳng nhưng tối ưu hóa khả năng nhận diện thông tin nhanh chóng trên thiết bị cầm tay.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Colors Section */}
                  <div className="space-y-6 text-left">
                    <h5 className="font-serif text-base font-semibold text-stone-900 flex items-center gap-2 pb-2 border-b border-stone-100">
                      <Palette size={14} className="text-stone-500" />
                      <span>Bảng màu YouMed (Palette)</span>
                    </h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {colors.map((color, idx) => (
                        <div 
                          key={idx} 
                          className="p-3 bg-white border border-stone-200/80 rounded-lg flex items-center gap-3 hover:border-stone-400 transition-colors"
                        >
                          <div 
                            className="w-8 h-8 rounded shrink-0 border border-stone-200 shadow-sm" 
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-xs text-stone-900 font-bold">{color.hex}</span>
                            </div>
                            <span className="block text-[10px] text-stone-500 font-medium truncate">{color.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div 
                      onClick={() => setSelectedImage('/projects/youmed/youmed_colors.png')}
                      className="relative rounded-lg overflow-hidden border border-stone-200 bg-stone-50 cursor-zoom-in group"
                    >
                      <img
                        src="/projects/youmed/youmed_colors.png"
                        alt="YouMed Color Guide"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-stone-900/90 text-[10px] text-white font-mono rounded">
                          Xem kích thước gốc
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Typography Section */}
                  <div className="space-y-6 text-left">
                    <h5 className="font-serif text-base font-semibold text-stone-900 flex items-center gap-2 pb-2 border-b border-stone-100">
                      <Type size={14} className="text-stone-500" />
                      <span>Phân cấp Phông chữ (Typography)</span>
                    </h5>

                    <div className="space-y-3">
                      {typography.map((typo, idx) => (
                        <div key={idx} className="p-3 bg-white border border-stone-200/80 rounded-lg space-y-1.5 hover:border-stone-400 transition-colors">
                          <div className="flex justify-between items-center">
                            <span className="px-2 py-0.5 bg-stone-100 text-stone-700 font-mono text-[9px] font-bold rounded border border-stone-200/60">
                              {typo.tag}
                            </span>
                            <span className="text-[10px] text-stone-400 font-mono">{typo.spec}</span>
                          </div>
                          <p className="text-xs text-stone-850 font-semibold">{typo.usage}</p>
                        </div>
                      ))}
                    </div>

                    <div 
                      onClick={() => setSelectedImage('/projects/youmed/youmed_typo.png')}
                      className="relative rounded-lg overflow-hidden border border-stone-200 bg-stone-50 cursor-zoom-in group"
                    >
                      <img
                        src="/projects/youmed/youmed_typo.png"
                        alt="YouMed Typography"
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
              </motion.div>
            )}

            {/* COMPONENTS & AI TAB */}
            {activeTab === 'components' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-[10px] font-mono tracking-wider text-stone-700 uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    UI Components & Chatbox
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Hệ Thống Thành Phần Độc Lập & Trợ Lý Ảo
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Các khối giao diện (Figma Components) được xây dựng theo triết lý <strong className="text-stone-900 font-medium">Atomic Design</strong> giúp nhà phát triển dễ dàng tái sử dụng và đồng bộ giao diện trong toàn bộ hệ thống.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="mt-1 p-1.5 bg-stone-50 rounded-lg border border-stone-200 text-stone-600 shrink-0 h-fit">
                        <Layout size={14} />
                      </div>
                      <div>
                        <h6 className="text-xs font-bold text-stone-900">UI Components Thống Nhất</h6>
                        <p className="text-[11px] text-stone-500 mt-0.5">Thanh định vị (Bottom Navigation), Ô tìm kiếm thông minh, Bộ lọc thời gian khám, các thẻ thông tin bác sĩ và nút hành động khẩn cấp.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1 p-1.5 bg-stone-50 rounded-lg border border-stone-200 text-stone-600 shrink-0 h-fit">
                        <MessageSquare size={14} />
                      </div>
                      <div>
                        <h6 className="text-xs font-bold text-stone-900">Trợ Lý AI YouMed (Chatbot)</h6>
                        <p className="text-[11px] text-stone-500 mt-0.5">Luồng chat được thiết kế chu đáo để hướng dẫn người bệnh khai báo triệu chứng ban đầu. Sau đó đề xuất bệnh viện chuyên khoa và địa chỉ chính xác gần nhất.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/youmed/youmed_components.png')}
                    className="relative max-w-lg w-full rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-sm cursor-zoom-in group"
                  >
                    <img
                      src="/projects/youmed/youmed_components.png"
                      alt="YouMed UI Components Library"
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

            {/* SCREEN FLOWS TAB */}
            {activeTab === 'screens' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-left max-w-3xl space-y-2">
                  <span className="text-[10px] font-mono tracking-wider text-[#064E3B] uppercase font-bold px-2 py-0.5 rounded bg-stone-100/60 border border-stone-200/60">
                    Bản Đồ Giao Diện
                  </span>
                  <h4 className="font-serif text-2xl font-light text-stone-900">
                    Hệ Thống 20+ Màn Hình Chức Năng Hoàn Chỉnh
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    Sơ đồ phân bổ và kết nối các màn hình của người dùng. Từ bước đăng nhập, khám phá danh bạ bác sĩ, tiến hành đặt chỗ trực tuyến, thực hiện cuộc gọi video tư vấn từ xa, đến quản lý hồ sơ bệnh án cá nhân.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div 
                    onClick={() => setSelectedImage('/projects/youmed/youmed_screens.png')}
                    className="relative w-full rounded-lg overflow-hidden border border-stone-200 bg-[#FAF9F6] shadow-sm cursor-zoom-in group"
                  >
                    <img
                      src="/projects/youmed/youmed_screens.png"
                      alt="YouMed Complete UI Flow Diagram"
                      className="w-full h-auto object-contain bg-[#FAF9F6] max-h-[500px]"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3.5 py-2 bg-stone-900/90 text-xs text-white font-semibold rounded flex items-center gap-2">
                        <Info size={14} className="text-[#C2410C]" />
                        <span>Nhấn để xem sơ đồ toàn màn hình</span>
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
              DESIGNED IN FIGMA • CODE COMPILATION REACT & TAILWIND CSS
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
