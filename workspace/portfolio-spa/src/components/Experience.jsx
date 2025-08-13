import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    title: 'معيد – كلية علوم وهندسة الحاسوب',
    place: 'جامعة الحديدة',
    period: '2021 – 2022',
    bullets: [
      'تدريس مقررات: الذكاء الاصطناعي، نظم التشغيل، البرمجة الكائنية، نظرية الآلات.',
      'تقييم متميز في الأداء الأكاديمي والالتزام.',
    ],
  },
  {
    title: 'عضو أكاديمي ومدرب',
    place: 'الجامعة الوطنية – الحديدة',
    period: '2020 – 2022',
    bullets: [
      'تدريس مقررات: الذكاء الاصطناعي، Python، API، تمييز الأنماط، هندسة البرمجيات.',
      'مساهمة في تحسين جودة التعليم التقني.',
    ],
  },
  {
    title: 'عضو أكاديمي ومدرب',
    place: 'الكلية المجتمع الرائدة رويال',
    period: '2020 – 2022',
    bullets: [
      'تدريس لغات البرمجة C++ و PHP/MySQL، وأدوات أوفيس.',
      'الإشراف على مشاريع تخرج.',
    ],
  },
  {
    title: 'مدرب حاسوب',
    place: 'كلية العلوم الصحية والطوارئ التقنية',
    period: '2020 – 2022',
    bullets: [
      'تقديم دورات في مقدمة الحاسوب، Windows، Word، Excel، SPSS.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <SectionHeading id="experience" icon={FaBriefcase} title="الخبرات" />
        <ul className="space-y-6">
          {experiences.map((item, idx) => (
            <TimelineItem key={idx} title={item.title} place={item.place} period={item.period} bullets={item.bullets} />
          ))}
        </ul>
      </div>
    </section>
  )
}