// src/components/ContactForm.jsx
import React, { useState } from 'react';

function ContactForm({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const labels = {
    en: { title: "Contact Me", name: "Name", email: "Email", message: "Message", submit: "Send" },
    zh: { title: "联系我", name: "姓名", email: "邮箱", message: "留言", submit: "发送" }
  };
  const t = labels[lang];

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // 这里可以集成邮件发送服务，比如EmailJS或Formspree调用API发送邮件
    alert(lang === 'en' ? "Thank you! Your message has been sent." : "感谢您的留言！我们已收到您的信息。");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>{t.title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{t.name}:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>{t.email}:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>{t.message}:</label>
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit">{t.submit}</button>
      </form>
    </section>
  );
}

export default ContactForm;
