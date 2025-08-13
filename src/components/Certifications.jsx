import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'شهادة تدريب المدربين (TOT)',
    issuer: 'الهيئة العربية للتدريب والاستشارات',
    year: '2020',
    hours: '59 ساعة – تقدير ممتاز',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-8 text-center md:text-right"
        >
          الشهادات
        </motion.h2>
        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-4 rounded shadow"
            >
              <h3 className="text-lg font-semibold text-primary mb-1">{cert.title}</h3>
              <p className="text-gray-700">{cert.issuer} – {cert.year}</p>
              <span className="text-gray-500 text-sm">{cert.hours}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;