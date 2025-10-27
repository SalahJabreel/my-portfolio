import Section from './Section';
import { FaBolt, FaUsers, FaClock, FaBullseye, FaChalkboardTeacher, FaCogs } from 'react-icons/fa';

const skills = [
  { icon: FaBolt, label: 'سرعة التعلم' },
  { icon: FaChalkboardTeacher, label: 'تبسيط المفاهيم' },
  { icon: FaUsers, label: 'العمل الجماعي' },
  { icon: FaClock, label: 'إدارة الوقت' },
  { icon: FaBullseye, label: 'التحفيز الذاتي' },
  { icon: FaCogs, label: 'التركيز على الجودة' },
];

export default function Skills() {
  return (
    <Section id="skills" title="المهارات">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {skills.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow transition">
            <span className="text-primary text-3xl"><Icon /></span>
            <span className="text-sm text-gray-700 font-medium text-center">{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}