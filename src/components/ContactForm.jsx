import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

export default function ContactForm({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'fail' | null

  const t = ({
    en: {
      title: 'Contact',
      subtitle: "Have a question or want to collaborate? Let's talk.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
      sending: 'Sending…',
      ok: 'Message sent! I will get back to you soon.',
      fail: 'Something went wrong. Please try again.',
      info_title: "Let's Connect",
      info_desc: "I'm always open to discussing research ideas, collaborations, or just having a friendly chat.",
      email_label: 'Email',
      location_label: 'Location',
      location_value: 'Guangzhou, China',
    },
    zh: {
      title: '联系我',
      subtitle: '有问题或想合作？欢迎随时联系。',
      name: '姓名',
      email: '邮箱',
      message: '留言',
      submit: '发送消息',
      sending: '发送中…',
      ok: '消息已发送！我会尽快回复你。',
      fail: '发送失败，请稍后再试。',
      info_title: '与我交流',
      info_desc: '我始终欢迎讨论研究想法、探索合作，或者只是友好地聊聊天。',
      email_label: '邮箱',
      location_label: '地点',
      location_value: '中国 广州',
    },
  })[lang] ?? {
    title: 'Contact', subtitle: '', name: 'Name', email: 'Email', message: 'Message',
    submit: 'Send Message', sending: 'Sending…', ok: 'Sent!', fail: 'Error',
    info_title: '', info_desc: '', email_label: 'Email',
    location_label: 'Location', location_value: 'Guangzhou, China',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setLoading(true);
    setStatus(null);
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
      setStatus('ok');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('fail');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-wrapper">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {t.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Info */}
          <div className="contact-info">
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
              {t.info_title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              {t.info_desc}
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">✉</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                  {t.email_label}
                </div>
                <div style={{ color: 'var(--text-primary)' }}>xchange2022@outlook.com</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                  {t.location_label}
                </div>
                <div style={{ color: 'var(--text-primary)' }}>{t.location_value}</div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="_honey" style={{ display: 'none' }} onChange={() => {}} />

            <div className="form-group">
              <label>{t.name}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder={t.name}
              />
            </div>

            <div className="form-group">
              <label>{t.email}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group">
              <label>{t.message}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t.message}
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {loading ? t.sending : t.submit}
            </button>

            {status === 'ok' && (
              <p style={{ color: '#22c55e', fontSize: '0.9rem', marginTop: 8 }}>{t.ok}</p>
            )}
            {status === 'fail' && (
              <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: 8 }}>{t.fail}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
