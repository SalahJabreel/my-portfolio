import React from 'react';
import { motion } from 'framer-motion';

const profile = 'https://via.placeholder.com/300x300.png?text=Profile';

function Hero() {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen container mx-auto px-4 gap-8 pt-20 md:pt-28">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 text-center md:text-right"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">صلاح الدين جبريل</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6">مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة</h2>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3 rounded shadow hover:bg-secondary transition-colors">
          تحميل السيرة الذاتية
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex justify-center"
      >
        <img src={profile} alt="Profile" className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-lg" />
      </motion.div>
    </section>
  );
}

export default Hero;