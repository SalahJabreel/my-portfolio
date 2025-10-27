import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  { name: 'العربية', level: 'اللغة الأم' },
  { name: 'الإنجليزية', level: 'خلفية أكاديمية' },
];

function Languages() {
  return (
    <section id="languages" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-8 text-center md:text-right"
        >
          اللغات
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-4 rounded shadow flex justify-between"
            >
              <span className="text-gray-700 font-medium">{lang.name}</span>
              <span className="text-gray-500">{lang.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;