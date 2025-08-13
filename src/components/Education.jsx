import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'ماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي',
    institution: 'جامعة Rovira i Virgili – إسبانيا',
    period: '2022 – 2025',
  },
  {
    degree: 'بكالوريوس في علوم الحاسوب',
    institution: 'جامعة الحديدة – اليمن',
    period: '2016 – 2020',
  },
  {
    degree: 'دبلوم في المحاسبة',
    institution: 'جامعة العلوم والتكنولوجيا – اليمن',
    period: '2020',
  },
];

function Education() {
  return (
    <section id="education" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-8 text-center md:text-right"
        >
          التعليم
        </motion.h2>
        <div className="relative border-r-2 border-primary mr-4 md:mr-0 md:ml-4">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-8 pl-4 md:pl-0 md:pr-4"
            >
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-primary mb-1">{item.degree}</h3>
                <p className="text-gray-700 mb-1">{item.institution}</p>
                <span className="text-gray-500 text-sm">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;