import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaUser, FaGraduationCap, FaCode, FaChartBar } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: 'التعليم الأكاديمي',
      description: 'ماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي من جامعة Rovira i Virgili بإسبانيا'
    },
    {
      icon: <FaCode />,
      title: 'الخبرة التدريسية',
      description: 'خبرة في تدريس الذكاء الاصطناعي، نظم التشغيل، والبرمجة الكائنية'
    },
    {
      icon: <FaChartBar />,
      title: 'تحليل البيانات',
      description: 'متخصص في تحليل البيانات واستخدام أدوات البرمجة والتحليل المتقدمة'
    },
    {
      icon: <FaUser />,
      title: 'مدرب محترف',
      description: 'معتمد كمدرب محترف (TOT) مع مهارات تواصلية قوية'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">نبذة عني</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              مدرب وخبير تقني متخصص
            </h3>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة، حاصل على درجة الماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي من جامعة Rovira i Virgili بإسبانيا، وبكالوريوس في علوم الحاسوب من جامعة الحديدة.
              </p>
              <p>
                معتمد كمدرب محترف (TOT) ويتمتع بخبرة أكاديمية وعملية في تدريب وتدريس موضوعات متقدمة مثل الذكاء الاصطناعي، نظم التشغيل، البرمجة الكائنية، وتحليل البيانات.
              </p>
              <p>
                ماهر في استخدام أدوات البرمجة والتحليل، ويمتاز بمهارات تدريبية وتواصلية قوية وقدرة على تبسيط المفاهيم التقنية المعقدة بوضوح وفعالية.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl text-primary-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About