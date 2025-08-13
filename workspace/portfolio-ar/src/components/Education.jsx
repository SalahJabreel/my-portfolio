import Section from './Section';
import Timeline from './Timeline';

const items = [
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
];

export default function Education() {
  return (
    <Section id="education" title="التعليم" subtitle="مؤهلاتي الأكاديمية">
      <Timeline items={items} />
    </Section>
  );
}