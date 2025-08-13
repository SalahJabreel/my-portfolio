import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profile from '../assets/profile.svg';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container-responsive grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            صلاح الدين جبريل
          </h1>
          <p className="text-primary font-semibold text-lg sm:text-2xl mb-4">
            مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة
          </p>
          <p className="text-gray-700 mb-8">
            أقدم حلولاً تدريبية وتعليمية متقدمة مع خبرة أكاديمية وعملية لتمكين الأفراد والمؤسسات من استثمار الذكاء الاصطناعي وتحليل البيانات.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href="#contact">
              تواصل معي
            </a>
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary text-primary hover:bg-blue-50 transition-colors" href="/cv.pdf" download>
              <FaDownload /> تنزيل السيرة الذاتية
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <img src={profile} alt="صورة شخصية" className="w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow" />
        </motion.div>
      </div>
    </section>
  );
}