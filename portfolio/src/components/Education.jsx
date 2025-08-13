import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const educationData = [
    {
      degree: 'ماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي',
      institution: 'جامعة Rovira i Virgili',
      location: 'إسبانيا',
      period: '2022 – 2025',
      icon: <FaGraduationCap />,
      color: 'from-blue-400 to-blue-600'
    },
    {
      degree: 'بكالوريوس في علوم الحاسوب',
      institution: 'جامعة الحديدة',
      location: 'اليمن',
      period: '2016 – 2020',
      icon: <FaGraduationCap />,
      color: 'from-green-400 to-green-600'
    },
    {
      degree: 'دبلوم في المحاسبة',
      institution: 'جامعة العلوم والتكنولوجيا',
      location: 'اليمن',
      period: '2020',
      icon: <FaGraduationCap />,
      color: 'from-purple-400 to-purple-600'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">التعليم</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            المؤهلات الأكاديمية والتعليمية التي شكلت أساس خبرتي المهنية
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-center"
              >
                {/* Timeline Icon */}
                <div className={`absolute right-6 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center`}>
                  <div className="text-white text-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="mr-16 bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-primary-600 font-semibold">
                      <FaCalendarAlt className="ml-2" />
                      {item.period}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-2">
                    <FaUniversity className="ml-2" />
                    <span className="font-semibold">{item.institution}</span>
                    <span className="mr-2">•</span>
                    <span>{item.location}</span>
                  </div>

                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${item.color}`}>
                    {index === 0 ? 'دراسات عليا' : index === 1 ? 'بكالوريوس' : 'دبلوم'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education