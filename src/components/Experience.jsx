import React from 'react';
import { motion } from 'framer-motion';

export default function Experience({ lang }) {
  const content = {
    en: {
      title: 'Experience',
      subtitle: 'Building reliable software through automation and engineering rigor.',
      position: 'Software QA & Infrastructure Intern',
      company: 'Siemens Digital Industry Software',
      period: 'Jul 2023 — Jul 2024 · Chengdu',
      duties: [
        'Built automation suites and CI/CD pipelines that reduced regression time and improved release cadence.',
        'Added performance profiling and reliability checks for large-scale test runs.',
        'Implemented artifacts versioning for reproducible builds across environments.',
        'Collaborated with engineers to surface bottlenecks and stabilize critical services.',
      ],
    },
    zh: {
      title: '工作经历',
      subtitle: '通过自动化与工程实践构建可靠的软件。',
      position: '质量保证与基础设施实习生',
      company: '西门子数字化工业软件',
      period: '2023年7月 — 2024年7月 · 成都',
      duties: [
        '构建自动化测试与 CI/CD 流水线，缩短回归周期并提升交付效率。',
        '为大规模测试加入性能画像与稳定性检查。',
        '完善制品版本管理，保证跨环境构建可复现。',
        '与研发协作定位瓶颈并提升核心服务稳定性。',
      ],
    },
  };

  const data = content[lang] ?? content.en;

  return (
    <section id="experience">
      <div className="section-wrapper">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {data.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="experience-position">{data.position}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: 4 }}>
            {data.company}
          </p>
          <p className="experience-period">{data.period}</p>
          <ul className="experience-duties">
            {data.duties.map((duty, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                {duty}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
