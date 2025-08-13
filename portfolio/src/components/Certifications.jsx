import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCertificate, FaAward, FaCalendarAlt, FaClock } from 'react-icons/fa'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const certifications = [
    {
      title: 'شهادة تدريب المدربين (TOT)',
      issuer: 'الهيئة العربية للتدريب والاستشارات',
      year: '2020',
      hours: '59 ساعة',
      grade: 'ممتاز',
      description: 'شهادة معتمدة في تدريب المدربين تؤهل لممارسة التدريب المهني',
      color: 'from-gold-400 to-yellow-600',
      icon: <FaAward />
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">الشهادات والاعتمادات</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            الشهادات المهنية والاعتمادات التي تؤكد الكفاءة في مجال التدريب
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-xl p-8 mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Certificate Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                    {cert.icon}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {cert.title}
                  </h3>
                  
                  <p className="text-lg text-primary-600 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-center gap-2 text-blue-600">
                        <FaCalendarAlt />
                        <span className="font-semibold">السنة</span>
                      </div>
                      <p className="text-blue-800 font-bold text-center mt-1">
                        {cert.year}
                      </p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <FaClock />
                        <span className="font-semibold">المدة</span>
                      </div>
                      <p className="text-green-800 font-bold text-center mt-1">
                        {cert.hours}
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <FaCertificate />
                        <span className="font-semibold">التقدير</span>
                      </div>
                      <p className="text-yellow-800 font-bold text-center mt-1">
                        {cert.grade}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-2xl mx-auto">
            <FaCertificate className="text-primary-600 text-2xl mx-auto mb-3" />
            <p className="text-primary-800 font-medium">
              مستمر في الحصول على شهادات إضافية في مجالات الذكاء الاصطناعي وتحليل البيانات
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications