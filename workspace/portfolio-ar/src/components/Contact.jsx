import { useRef, useState } from 'react';
import Section from './Section';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus('تم إرسال رسالتك بنجاح. شكرًا لتواصلك!');
      formRef.current.reset();
    } catch (err) {
      setStatus('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
    }
  };

  return (
    <Section id="contact" title="تواصل معي" subtitle="سأكون سعيدًا بالتواصل والرد على استفساراتك">
      <form ref={formRef} onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">الاسم</label>
            <input name="user_name" required className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">البريد الإلكتروني</label>
            <input type="email" name="user_email" required className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring focus:ring-primary/30" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">الرسالة</label>
          <textarea name="message" rows="5" required className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring focus:ring-primary/30"></textarea>
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="btn-primary">إرسال</button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </div>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        لتعطيل النموذج محليًا بدون مفاتيح EmailJS، املأ القيم في ملف البيئة <code>.env</code>:
        VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
      </p>
    </Section>
  );
}