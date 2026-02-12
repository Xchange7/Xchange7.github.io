import React from 'react';
import { motion } from 'framer-motion';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Home({ lang }) {
  const t = {
    en: {
      name: 'Peng Xu',
      tagline:
        'M.Phil. student at HKUST(GZ) · Exploring LLMs, MoE & AI Infrastructure',
      intro:
        'Passionate about pushing the boundaries of efficient AI systems. Beyond research, I love fitness, cycling, swimming, and discovering great food. Always open to collaboration and new ideas.',
      cv: 'Download CV',
      contact: 'Get in Touch',
    },
    zh: {
      name: '徐鹏',
      tagline:
        '香港科技大学（广州）MPhil · 探索大语言模型、MoE 与 AI 基础设施',
      intro:
        '热衷于探索高效 AI 系统的前沿技术。学术之外，我热爱健身、骑行、游泳和美食探索。欢迎随时交流与合作。',
      cv: '下载简历',
      contact: '联系我',
    },
  };
  const L = t[lang] ?? t.en;

  const interests = [
    { label: 'LLM', color: '' },
    { label: 'MoE', color: 'purple' },
    { label: 'AI Infra', color: 'pink' },
    { label: 'Efficient Serving', color: '' },
    { label: 'CUDA', color: 'purple' },
  ];

  return (
    <section id="home" className="hero">
      {/* Animated background orbs */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-content">
        <motion.img
          src="/assets/xu_peng.png"
          alt={L.name}
          className="hero-avatar"
          {...fade(0)}
        />

        <motion.h1 className="hero-name" {...fade(0.15)}>
          {L.name}
        </motion.h1>

        <motion.p className="hero-tagline" {...fade(0.3)}>
          {L.tagline}
        </motion.p>

        <motion.div className="hero-interests" {...fade(0.45)}>
          {interests.map((tag) => (
            <span key={tag.label} className={`tag ${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </motion.div>

        <motion.p
          style={{ color: 'var(--text-secondary)', marginBottom: 36, fontSize: '1rem', maxWidth: 560, margin: '0 auto 36px' }}
          {...fade(0.5)}
        >
          {L.intro}
        </motion.p>

        <motion.div className="hero-cta" {...fade(0.6)}>
          <a href="/assets/CV_Chinese.pdf" download className="btn-primary">
            ↓ {L.cv}
          </a>
          <a href="#contact" className="btn-secondary">
            → {L.contact}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
