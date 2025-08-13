import Section from './Section';
import { FaCertificate } from 'react-icons/fa';

export default function Certifications() {
  return (
    <Section id="certifications" title="الشهادات" subtitle="إنجازات معتمدة">
      <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 shadow-sm">
        <span className="text-3xl text-primary"><FaCertificate /></span>
        <div>
          <h3 className="font-bold text-gray-900">شهادة تدريب المدربين (TOT)</h3>
          <p className="text-gray-700">الهيئة العربية للتدريب والاستشارات – 2020 (59 ساعة – تقدير ممتاز)</p>
        </div>
      </div>
    </Section>
  );
}