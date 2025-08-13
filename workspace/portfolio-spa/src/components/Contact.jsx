import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: '', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'جاري الإرسال...' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', message: 'الرجاء إعداد مفاتيح EmailJS في ملف البيئة.' })
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus({ type: 'success', message: 'تم إرسال الرسالة بنجاح!' })
      formRef.current.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'حدث خطأ أثناء الإرسال. حاول مرة أخرى.' })
    }
  }

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <SectionHeading id="contact" icon={FaPaperPlane} title="تواصل معي" />
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6 md:p-8 grid md:grid-cols-2 gap-4"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="font-semibold text-gray-800">الاسم</label>
            <input id="name" name="from_name" required className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-semibold text-gray-800">البريد الإلكتروني</label>
            <input id="email" name="reply_to" type="email" required className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label htmlFor="message" className="font-semibold text-gray-800">الرسالة</label>
            <textarea id="message" name="message" rows="5" required className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="btn-primary">
              <FaPaperPlane /> إرسال
            </button>
            {status.message && (
              <span className={
                status.type === 'success' ? 'text-green-600' : status.type === 'error' ? 'text-red-600' : 'text-gray-500'
              }>
                {status.message}
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}