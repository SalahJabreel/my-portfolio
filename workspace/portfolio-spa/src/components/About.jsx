import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaUser } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <SectionHeading id="about" icon={FaUser} title="من أنا" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6 md:p-8"
        >
          <p className="p">
            مدرب وخبير تقني في الذكاء الاصطناعي وتحليل البيانات والبرمجة، حاصل على درجة الماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي من جامعة Rovira i Virgili بإسبانيا، وبكالوريوس في علوم الحاسوب من جامعة الحديدة. معتمد كمدرب محترف (TOT) ويتمتع بخبرة أكاديمية وعملية في تدريب وتدريس موضوعات متقدمة مثل الذكاء الاصطناعي، نظم التشغيل، البرمجة الكائنية، وتحليل البيانات. ماهر في استخدام أدوات البرمجة والتحليل، ويمتاز بمهارات تدريبية وتواصلية قوية وقدرة على تبسيط المفاهيم التقنية المعقدة بوضوح وفعالية.
          </p>
        </motion.div>
      </div>
    </section>
  )
}