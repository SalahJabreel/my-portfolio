import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h1 className="h1 mb-4">صلاح الدين جبريل</h1>
          <p className="text-primary-700 font-bold mb-6">مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة</p>
          <p className="p mb-8">مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة، حاصل على درجة الماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي من جامعة Rovira i Virgili بإسبانيا، وبكالوريوس في علوم الحاسوب من جامعة الحديدة. معتمد كمدرب محترف (TOT) ويتمتع بخبرة أكاديمية وعملية في تدريب وتدريس موضوعات متقدمة مثل الذكاء الاصطناعي، نظم التشغيل، البرمجة الكائنية، وتحليل البيانات. ماهر في استخدام أدوات البرمجة والتحليل، ويمتاز بمهارات تدريبية وتواصلية قوية وقدرة على تبسيط المفاهيم التقنية المعقدة بوضوح وفعالية.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/cv.pdf" className="btn-primary" download>
              <FaDownload /> تنزيل السيرة الذاتية
            </a>
            <a href="#contact" className="btn-outline">
              <FaEnvelope /> تواصل معي
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-soft border-4 border-primary-100">
            <picture>
              <source srcSet="/profile-placeholder.svg" type="image/svg+xml" />
              <img
                src="/profile-placeholder.png"
                alt="صورة شخصية"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </motion.div>
      </div>
    </section>
  )
}