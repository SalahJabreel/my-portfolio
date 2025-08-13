import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaLightbulb, 
  FaUsers, 
  FaClock, 
  FaFire, 
  FaEye, 
  FaBrain,
  FaRocket,
  FaHeart
} from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const skills = [
    {
      name: 'سرعة التعلم واكتساب المهارات الجديدة',
      icon: <FaRocket />,
      color: 'from-blue-400 to-blue-600',
      description: 'قدرة عالية على التكيف مع التقنيات الجديدة والمتطورة'
    },
    {
      name: 'تبسيط المفاهيم المعقدة',
      icon: <FaLightbulb />,
      color: 'from-yellow-400 to-yellow-600',
      description: 'مهارة في شرح المفاهيم التقنية المعقدة بطريقة واضحة ومفهومة'
    },
    {
      name: 'العمل الجماعي',
      icon: <FaUsers />,
      color: 'from-green-400 to-green-600',
      description: 'خبرة في التعاون والعمل ضمن فرق متنوعة ومتعددة التخصصات'
    },
    {
      name: 'إدارة الوقت',
      icon: <FaClock />,
      color: 'from-purple-400 to-purple-600',
      description: 'كفاءة في تنظيم الوقت وإدارة المهام المتعددة بفعالية'
    },
    {
      name: 'التحفيز الذاتي',
      icon: <FaFire />,
      color: 'from-red-400 to-red-600',
      description: 'دافعية عالية للتطوير المستمر والوصول للأهداف'
    },
    {
      name: 'التركيز على الجودة',
      icon: <FaEye />,
      color: 'from-indigo-400 to-indigo-600',
      description: 'اهتمام بالتفاصيل والسعي لتحقيق أعلى معايير الجودة'
    }
  ]

  const technicalSkills = [
    { name: 'الذكاء الاصطناعي', level: 95 },
    { name: 'تحليل البيانات', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'نظم التشغيل', level: 80 },
    { name: 'البرمجة الكائنية', level: 85 },
    { name: 'SPSS', level: 75 }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">المهارات</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            مجموعة من المهارات الشخصية والتقنية التي تميز أدائي المهني
          </p>
        </motion.div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">المهارات الشخصية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto`}>
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {skill.name}
                </h4>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">المهارات التقنية</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </h4>
                    <span className="text-primary-600 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-3 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills