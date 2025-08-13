import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'
import { FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'

const education = [
  {
    title: 'ماجستير في هندسة أمن الحاسوب والذكاء الاصطناعي',
    place: 'جامعة Rovira i Virgili – إسبانيا',
    period: '2022 – 2025',
  },
  {
    title: 'بكالوريوس في علوم الحاسوب',
    place: 'جامعة الحديدة – اليمن',
    period: '2016 – 2020',
  },
  {
    title: 'دبلوم في المحاسبة',
    place: 'جامعة العلوم والتكنولوجيا – اليمن',
    period: '2020',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading id="education" icon={FaGraduationCap} title="التعليم" />
        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="space-y-6">
          {education.map((item, idx) => (
            <TimelineItem key={idx} title={item.title} place={item.place} period={item.period} />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}