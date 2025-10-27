import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          setStatus('success');
          setForm({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-8 text-center md:text-right"
        >
          تواصل معي
        </motion.h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">الاسم</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">الرسالة</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'جارٍ الإرسال...' : 'إرسال'}
          </button>
          {status === 'success' && (
            <p className="text-green-600 mt-2">تم إرسال الرسالة بنجاح!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-2">حدث خطأ أثناء الإرسال. حاول مجددًا.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;