import React from 'react';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Research({ lang }) {
  const t = {
    en: {
      title: 'Research & Interests',
      subtitle: 'What I am currently exploring and what excites me.',
      cards: [
        {
          icon: '🧠',
          heading: 'LLM + Mixture-of-Experts',
          items: [
            'Routing strategies: balanced top-k, load balancing loss',
            'Stability: expert collapse avoidance, auxiliary losses',
            'Efficiency: sparse activation, expert parallelism',
          ],
        },
        {
          icon: '⚡',
          heading: 'AI Infrastructure',
          items: [
            'High-performance serving systems (vLLM, TensorRT-LLM)',
            'KV-cache optimization & paged attention',
            'Distributed training & inference at scale',
          ],
        },
        {
          icon: '🛠',
          heading: 'Tech Stack',
          items: [
            'Languages: C/C++, Python, Java',
            'Frameworks: PyTorch, CUDA',
            'Tools: Docker, CI/CD, Linux systems',
          ],
        },
      ],
    },
    zh: {
      title: '研究与兴趣',
      subtitle: '我目前在探索的领域和让我兴奋的方向。',
      cards: [
        {
          icon: '🧠',
          heading: 'LLM + 专家混合 (MoE)',
          items: [
            '路由策略：balanced top-k、负载均衡损失',
            '稳定性：避免专家坍塌、辅助损失',
            '效率：稀疏激活、专家并行',
          ],
        },
        {
          icon: '⚡',
          heading: 'AI 基础设施',
          items: [
            '高性能推理系统（vLLM、TensorRT-LLM）',
            'KV-cache 优化与分页注意力',
            '大规模分布式训练与推理',
          ],
        },
        {
          icon: '🛠',
          heading: '技术栈',
          items: [
            '语言：C/C++、Python、Java',
            '框架：PyTorch、CUDA',
            '工具：Docker、CI/CD、Linux 系统',
          ],
        },
      ],
    },
  };

  const L = t[lang] ?? t.en;

  return (
    <section id="research">
      <div className="section-wrapper">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {L.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {L.subtitle}
        </motion.p>

        <div className="research-grid">
          {L.cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="research-card"
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <span className="research-icon">{card.icon}</span>
              <h3>{card.heading}</h3>
              <ul>
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
