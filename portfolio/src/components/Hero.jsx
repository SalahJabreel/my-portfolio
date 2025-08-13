import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a placeholder CV download - in real implementation, this would link to actual CV file
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'صلاح_الدين_جبريل_CV.pdf'
    link.click()
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-right mb-10 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              صلاح الدين جبريل
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-600 mb-6"
            >
              مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              خبير في الذكاء الاصطناعي وتحليل البيانات مع خلفية أكاديمية قوية ومهارات تدريبية متقدمة
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={handleDownloadCV}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <FaDownload />
                تحميل السيرة الذاتية
              </button>

              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                تواصل معي
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300 text-2xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20"
              />
              <img
                src="https://via.placeholder.com/400x400/3b82f6/ffffff?text=Profile"
                alt="صلاح الدين جبريل"
                className="w-80 h-80 rounded-full object-cover border-8 border-white shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero