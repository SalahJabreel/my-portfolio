import { motion } from 'framer-motion'

export default function TimelineItem({ title, place, period, bullets }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative ps-6 border-s-2 border-primary-100"
    >
      <span className="absolute -start-2 top-1.5 w-3 h-3 rounded-full bg-primary-600"></span>
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h3 className="font-bold text-gray-900">{title}</h3>
        {place && <span className="badge">{place}</span>}
      </div>
      {period && <p className="text-sm text-gray-500 mb-2">{period}</p>}
      {Array.isArray(bullets) && bullets.length > 0 && (
        <ul className="list-disc me-4 space-y-1 text-gray-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </motion.li>
  )
}