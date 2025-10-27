import SectionHeading from './SectionHeading'
import { FaLanguage } from 'react-icons/fa'

export default function Languages() {
  return (
    <section id="languages" className="section">
      <div className="container">
        <SectionHeading id="languages" icon={FaLanguage} title="اللغات" />
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-6 flex items-center justify-between">
            <span className="font-bold text-gray-900">العربية</span>
            <span className="badge">اللغة الأم</span>
          </div>
          <div className="card p-6 flex items-center justify-between">
            <span className="font-bold text-gray-900">الإنجليزية</span>
            <span className="badge">خلفية أكاديمية</span>
          </div>
        </div>
      </div>
    </section>
  )
}