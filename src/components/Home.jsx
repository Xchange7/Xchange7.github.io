import React from 'react';

function Home({ lang }) {
  const content = {
    en: {
      title: 'M.Phil. in AI',
      intro:
        'M.Phil. in AI at HKUST(GZ). My current research focuses on MoE routing and LLM systems, with an interest in scalable inference and efficient training stacks.',
      actions: {
        primary: 'Contact Me',
        secondary: 'Download CV',
      },
      highlights: ['LLM Inference & Serving', 'GPU Performance', 'Distributed Systems', 'MLOps & CI/CD'],
      metrics: [
        { label: 'Role', value: 'M.Phil. in AI' },
        { label: 'Research', value: 'MoE Routing' },
        { label: 'Interest', value: 'LLM Systems' },
      ],
    },
    zh: {
      title: 'AI 方向 MPhil',
      intro:
        '现就读于香港科技大学（广州）AI 方向 MPhil，当前科研聚焦 MoE routing 与大模型系统，并关注高效推理与训练栈。',
      actions: {
        primary: '联系我',
        secondary: '下载简历',
      },
      highlights: ['大模型推理与服务', 'GPU 性能优化', '分布式系统', 'MLOps 与 CI/CD'],
      metrics: [
        { label: '身份', value: 'MPhil in AI' },
        { label: '研究', value: 'MoE Routing' },
        { label: '兴趣', value: 'LLM 系统' },
      ],
    },
  };

  const text = content[lang] ?? content.en;

  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <div className="eyebrow">{text.title}</div>
        <h1>{lang === 'zh' ? '徐鹏' : 'Peng Xu'}</h1>
        <p className="hero-subtitle">{text.intro}</p>

        <div className="hero-actions">
          <a className="btn primary" href="#contact">{text.actions.primary}</a>
          <a className="btn ghost" href="/assets/CV_Chinese.pdf" download>
            {text.actions.secondary}
          </a>
        </div>

        <div className="tag-row">
          {text.highlights.map((item, i) => (
            <span className="tag" key={`tag-${i}`}>{item}</span>
          ))}
        </div>

        <div className="metric-row">
          {text.metrics.map((m, i) => (
            <div className="metric-card" key={`metric-${i}`}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-card">
          <img src="/assets/xu_peng.png" alt={lang === 'zh' ? '徐鹏' : 'Peng Xu'} />
          <div className="profile-info">
            <div className="profile-name">{lang === 'zh' ? '徐鹏' : 'Peng Xu'}</div>
            <div className="profile-role">{text.title}</div>
          </div>
        </div>
        <div className="glow-orb" />
      </div>
    </section>
  );
}

export default Home;
