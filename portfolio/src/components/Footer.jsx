import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaCode, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <FaArrowUp />
        </motion.button>

        <div className="text-center">
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-2">صلاح الدين جبريل</h3>
            <p className="text-gray-400">
              مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-primary-600 mx-auto mb-6"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            <p className="mb-2">
              © {new Date().getFullYear()} صلاح الدين جبريل. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span>صُنع بـ</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>و</span>
              <FaCode className="text-primary-500" />
              <span>في اليمن</span>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-xs text-gray-500"
          >
            <p>
              تم تطوير هذا الموقع باستخدام React.js و Tailwind CSS و Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer