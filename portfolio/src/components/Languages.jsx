import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGlobe, FaComments } from 'react-icons/fa'

const Languages = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const languages = [
    {
      name: 'العربية',
      level: 'اللغة الأم',
      proficiency: 100,
      description: 'إتقان كامل في جميع المهارات اللغوية',
      flag: '🇸🇦',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'الإنجليزية',
      level: 'خلفية أكاديمية',
      proficiency: 75,
      description: 'إجادة جيدة للقراءة والكتابة الأكاديمية والتقنية',
      flag: '🇺🇸',
      color: 'from-blue-400 to-blue-600'
    }
  ]

  const getProficiencyText = (level) => {
    if (level >= 90) return 'ممتاز'
    if (level >= 75) return 'جيد جداً'
    if (level >= 60) return 'جيد'
    if (level >= 40) return 'متوسط'
    return 'مبتدئ'
  }

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">اللغات</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اللغات التي أتقنها والتي تساعدني في التواصل الفعال مع جمهور متنوع
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Language Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">
                    {language.flag}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language.name}
                    </h3>
                    <p className="text-primary-600 font-semibold">
                      {language.level}
                    </p>
                  </div>
                </div>

                {/* Proficiency Level */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 font-medium">مستوى الإتقان</span>
                    <span className="text-primary-600 font-bold">
                      {getProficiencyText(language.proficiency)}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${language.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      className={`bg-gradient-to-r ${language.color} h-4 rounded-full flex items-center justify-end pr-2`}
                    >
                      <span className="text-white text-xs font-bold">
                        {language.proficiency}%
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-start gap-3">
                  <FaComments className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    {language.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Language Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-lg p-8 max-w-3xl mx-auto">
            <FaGlobe className="text-primary-600 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              التواصل متعدد اللغات
            </h3>
            <p className="text-gray-700 leading-relaxed">
              قدرة على التواصل الفعال باللغة العربية كلغة أم، والإنجليزية للمحتوى الأكاديمي والتقني، 
              مما يمكنني من الوصول لجمهور أوسع وتقديم المحتوى التدريبي بطريقة مناسبة للمتلقين.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Languages