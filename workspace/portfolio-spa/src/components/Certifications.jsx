import SectionHeading from './SectionHeading'
import { FaCertificate } from 'react-icons/fa'
import { motion } from 'framer-motion'

const certs = [
  {
    title: 'شهادة تدريب المدربين (TOT)',
    place: 'الهيئة العربية للتدريب والاستشارات',
    period: '2020',
    detail: '59 ساعة – تقدير ممتاز',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-gray-50">
      <div className="container">
        <SectionHeading id="certifications" icon={FaCertificate} title="الشهادات" />
        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((c, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="card p-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="font-bold text-gray-900">{c.title}</h3>
                <span className="badge">{c.place}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{c.period} • {c.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}