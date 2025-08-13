import { motion } from 'framer-motion';

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16">
      <div className="container-responsive">
        {title && (
          <div className="mb-10">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}