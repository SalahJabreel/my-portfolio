import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'about', label: 'من أنا' },
  { id: 'education', label: 'التعليم' },
  { id: 'experience', label: 'الخبرات' },
  { id: 'skills', label: 'المهارات' },
  { id: 'certifications', label: 'الشهادات' },
  { id: 'languages', label: 'اللغات' },
  { id: 'contact', label: 'تواصل معي' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="container flex items-center justify-between h-16" aria-label="الرئيسية">
        <a href="#hero" className="font-extrabold text-primary-700 text-xl" onClick={(e) => { e.preventDefault(); handleClick('hero') }}>صلاح الدين جبريل</a>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); handleClick(item.id) }} className="hover:text-primary-700">
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button aria-label="فتح القائمة" onClick={() => setOpen(true)} className="p-2 rounded hover:bg-gray-100">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <div className="container py-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-primary-700">القائمة</span>
              <button aria-label="إغلاق القائمة" onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-100">
                <FaTimes className="text-xl" />
              </button>
            </div>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); handleClick(item.id) }} className="py-2 text-right hover:text-primary-700">
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}