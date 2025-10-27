import SectionHeading from './SectionHeading'
import { FaBolt, FaLightbulb, FaUsers, FaClock, FaBullseye, FaCheckCircle, FaTools } from 'react-icons/fa'

const skills = [
  { icon: FaBolt, label: 'سرعة التعلم واكتساب المهارات الجديدة' },
  { icon: FaLightbulb, label: 'تبسيط المفاهيم المعقدة' },
  { icon: FaUsers, label: 'العمل الجماعي' },
  { icon: FaClock, label: 'إدارة الوقت' },
  { icon: FaBullseye, label: 'التحفيز الذاتي' },
  { icon: FaCheckCircle, label: 'التركيز على الجودة' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading id="skills" icon={FaTools} title="المهارات" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s, idx) => (
            <div key={idx} className="card p-5 flex items-center gap-3">
              <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-700 border border-primary-100">
                <s.icon />
              </span>
              <span className="font-semibold text-gray-800">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}