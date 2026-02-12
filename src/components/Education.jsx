import React from 'react';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Education({ lang }) {
  const data = {
    en: {
      title: 'Education',
      subtitle: 'My academic journey across three countries.',
      degrees: [
        {
          school: 'University of Electronic Science and Technology of China (UESTC)',
          years: '2020 – 2024',
          degree: 'B.Sc. in Computer Science and Technology',
          details: [
            'GPA: 3.92 / 4.00',
            'Courses: Assembly, Data Mining, Operating Systems, Algorithms',
            'Three-year academic excellence scholarship',
          ],
          logo: '/logos/UESTC.png',
        },
        {
          school: 'Delft University of Technology (TU Delft)',
          years: '2024 – 2025',
          degree: 'M.Sc. in Computer Science (withdrew)',
          details: ['Withdrew to pursue alternative research opportunities'],
          logo: '/logos/TU-Delft.png',
        },
        {
          school: 'Hong Kong University of Science and Technology (Guangzhou)',
          years: '2025 – 2027 (expected)',
          degree: 'M.Phil. in Computer Science and Engineering · Full Scholarship',
          details: ['Focus: LLM, Mixture-of-Experts, Efficient Serving & AI Infrastructure'],
          logo: '/logos/HKUST-GZ.png',
        },
      ],
    },
    zh: {
      title: '教育背景',
      subtitle: '横跨三国的学术旅程。',
      degrees: [
        {
          school: '电子科技大学 (UESTC)',
          years: '2020 – 2024',
          degree: '计算机科学与技术 学士',
          details: [
            'GPA: 3.92 / 4.00',
            '主修：汇编、数据挖掘、操作系统、算法',
            '连续三年校级学业优秀奖学金',
          ],
          logo: '/logos/UESTC.png',
        },
        {
          school: '代尔夫特理工大学 (TU Delft)',
          years: '2024 – 2025',
          degree: '计算机科学 硕士（后退学）',
          details: ['因科研方向规划退学'],
          logo: '/logos/TU-Delft.png',
        },
        {
          school: '香港科技大学（广州）',
          years: '2025 – 2027（预计）',
          degree: '计算机科学与工程 MPhil · 全额奖学金',
          details: ['研究方向：大语言模型、MoE、高效推理与 AI 基础设施'],
          logo: '/logos/HKUST-GZ.png',
        },
      ],
    },
  };

  const content = data[lang] ?? data.en;

  return (
    <section id="education">
      <div className="section-wrapper">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {content.subtitle}
        </motion.p>

        <div className="timeline">
          {content.degrees.map((deg, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  {deg.logo && (
                    <img src={deg.logo} alt={deg.school} className="timeline-logo" />
                  )}
                  <div>
                    <div className="timeline-school">{deg.school}</div>
                    <div className="timeline-years">{deg.years}</div>
                  </div>
                </div>
                <p className="timeline-degree">{deg.degree}</p>
                <ul className="timeline-details">
                  {deg.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
