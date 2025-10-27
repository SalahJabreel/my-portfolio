import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    role: 'معيد – كلية علوم وهندسة الحاسوب – جامعة الحديدة',
    period: '2021 – 2022',
    details: 'تدريس مقررات: الذكاء الاصطناعي، نظم التشغيل، البرمجة الكائنية، نظرية الآلات.',
  },
  {
    role: 'عضو أكاديمي ومدرب – الجامعة الوطنية – الحديدة',
    period: '2020 – 2022',
    details: 'تدريس مقررات: الذكاء الاصطناعي، Python، API، تمييز الأنماط، هندسة البرمجيات.',
  },
  {
    role: 'عضو أكاديمي ومدرب – الكلية المجتمع الرائدة رويال',
    period: '2020 – 2022',
    details: 'تدريس لغات البرمجة C++ و PHP/MySQL، وأدوات أوفيس.',
  },
  {
    role: 'مدرب حاسوب – كلية العلوم الصحية والطوارئ التقنية',
    period: '2020 – 2022',
    details: 'تقديم دورات في مقدمة الحاسوب، Windows، Word، Excel، SPSS.',
  },
];

function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-8 text-center md:text-right"
        >
          الخبرات
        </motion.h2>
        <div className="relative border-r-2 border-primary mr-4 md:mr-0 md:ml-4">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-8 pl-4 md:pl-0 md:pr-4"
            >
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-primary mb-1">{item.role}</h3>
                <span className="text-gray-500 text-sm">{item.period}</span>
                <p className="text-gray-700 mt-1">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;