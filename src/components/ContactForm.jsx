// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

function ContactForm({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const t = ({
    en: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      sending: 'Sending...',
      ok: 'Thank you! Your message has been sent.',
      fail: 'Oops! Something went wrong. Please try again.',
    },
    zh: {
      title: '联系我',
      name: '姓名',
      email: '邮箱',
      message: '留言',
      submit: '发送',
      sending: '发送中...',
      ok: '感谢您的留言！已成功发送。',
      fail: '发送失败，请稍后再试。',
    },
  })[lang] ?? ({
    title: 'Contact Me', name: 'Name', email: 'Email', message: 'Message',
    submit: 'Send', sending: 'Sending...', ok: 'Thank you! Your message has been sent.',
    fail: 'Oops! Something went wrong. Please try again.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setLoading(true);
    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          lang,
          timestamp: new Date().toISOString(),
        },
        VITE_EMAILJS_PUBLIC_KEY
      );
      alert(t.ok);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      alert(t.fail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">
          {lang === 'en'
            ? 'Let’s talk about AI infra, LLM systems, or collaboration.'
            : '欢迎交流 AI Infra、LLM 系统或合作机会。'}
        </p>
        <p className="section-subtitle">Email: xchange2022@outlook.com</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* 防机器人：蜜罐字段 */}
        <input type="text" name="_honey" style={{ display: 'none' }} onChange={() => {}} />

        <div className="form-field">
          <label>{t.name}:</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            required placeholder={t.name}
          />
        </div>

        <div className="form-field">
          <label>{t.email}:</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            required placeholder="name@example.com"
          />
        </div>

        <div className="form-field">
          <label>{t.message}:</label>
          <textarea
            name="message" value={form.message} onChange={handleChange}
            required rows={5} placeholder={t.message}
          />
        </div>

        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? t.sending : t.submit}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
