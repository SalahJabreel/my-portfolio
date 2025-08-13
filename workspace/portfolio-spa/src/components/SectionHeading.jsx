import { motion } from 'framer-motion'

export default function SectionHeading({ icon: Icon, title, subtitle, id }) {
  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        {Icon && (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-700 border border-primary-100">
            <Icon />
          </span>
        )}
        <div>
          <h2 id={id} className="h2">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </motion.div>
    </div>
  )
}