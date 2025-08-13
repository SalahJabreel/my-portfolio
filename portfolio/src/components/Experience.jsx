import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const experienceData = [
    {
      title: 'معيد',
      institution: 'كلية علوم وهندسة الحاسوب – جامعة الحديدة',
      period: '2021 – 2022',
      description: 'تدريس مقررات: الذكاء الاصطناعي، نظم التشغيل، البرمجة الكائنية، نظرية الآلات.',
      achievement: 'تقييم متميز في الأداء الأكاديمي والالتزام.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'عضو أكاديمي ومدرب',
      institution: 'الجامعة الوطنية – الحديدة',
      period: '2020 – 2022',
      description: 'تدريس مقررات: الذكاء الاصطناعي، Python، API، تمييز الأنماط، هندسة البرمجيات.',
      achievement: 'مساهمة في تحسين جودة التعليم التقني.',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'عضو أكاديمي ومدرب',
      institution: 'الكلية المجتمع الرائدة رويال',
      period: '2020 – 2022',
      description: 'تدريس لغات البرمجة C++ و PHP/MySQL، وأدوات أوفيس.',
      achievement: 'الإشراف على مشاريع تخرج.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'مدرب حاسوب',
      institution: 'كلية العلوم الصحية والطوارئ التقنية',
      period: '2020 – 2022',
      description: 'تقديم دورات في مقدمة الحاسوب، Windows، Word، Excel، SPSS.',
      achievement: 'تدريب عدد كبير من الطلاب في المهارات الأساسية للحاسوب.',
      color: 'from-orange-400 to-orange-600'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">الخبرات العملية</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            رحلتي المهنية في التدريس والتدريب في مجال التكنولوجيا والذكاء الاصطناعي
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Icon */}
                <div className={`absolute right-6 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center`}>
                  <FaBriefcase className="text-white text-xs" />
                </div>

                {/* Content Card */}
                <div className="mr-16 bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-primary-600 font-semibold">
                      <FaCalendarAlt className="ml-2" />
                      {item.period}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="ml-2" />
                    <span className="font-semibold">{item.institution}</span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-start gap-2 bg-green-50 p-3 rounded-lg border border-green-200">
                    <FaStar className="text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-green-800 text-sm font-medium">
                      <strong>الإنجاز:</strong> {item.achievement}
                    </p>
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

export default Experience