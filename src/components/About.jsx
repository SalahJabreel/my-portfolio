import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-primary mb-4 text-center md:text-right"
      >
        من أنا
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="leading-loose text-gray-700 text-justify"
      >
        مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة، حاصل على درجة الماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي من جامعة Rovira i Virgili بإسبانيا، وبكالوريوس في علوم الحاسوب من جامعة الحديدة. معتمد كمدرب محترف (TOT) ويتمتع بخبرة أكاديمية وعملية في تدريب وتدريس موضوعات متقدمة مثل الذكاء الاصطناعي، نظم التشغيل، البرمجة الكائنية، وتحليل البيانات. ماهر في استخدام أدوات البرمجة والتحليل، ويمتاز بمهارات تدريبية وتواصلية قوية وقدرة على تبسيط المفاهيم التقنية المعقدة بوضوح وفعالية.
      </motion.p>
    </section>
  );
}

export default About;