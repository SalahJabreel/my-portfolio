import Section from './Section';

export default function Languages() {
  return (
    <Section id="languages" title="اللغات">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900">العربية</h3>
          <p className="text-gray-700">اللغة الأم</p>
        </div>
        <div className="p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900">الإنجليزية</h3>
          <p className="text-gray-700">خلفية أكاديمية</p>
        </div>
      </div>
    </Section>
  );
}