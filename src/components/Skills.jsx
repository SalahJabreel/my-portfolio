import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const skills = [
  'سرعة التعلم واكتساب المهارات الجديدة',
  'تبسيط المفاهيم المعقدة',
  'العمل الجماعي',
  'إدارة الوقت',
  'التحفيز الذاتي',
  'التركيز على الجودة',
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-8 text-center md:text-right"
        >
          المهارات
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircleIcon className="w-6 h-6 text-primary" />
              <span className="text-gray-700">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;