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

export default function Highlights({ lang }) {
  const content = {
    en: {
      title: 'Highlights',
      subtitle: 'Awards, leadership, and memorable moments.',
      items: [
        {
          icon: '🏆',
          title: 'Third Prize – UESTC 19th ACM Programming Contest',
          time: 'Sep 2021',
          description:
            'Solved complex algorithmic challenges with a teammate under competition pressure, demonstrating strong problem-solving and programming skills.',
          tags: ['Algorithm', 'Competition'],
        },
        {
          icon: '🎭',
          title: 'Assistant Leader – Campus Art Troupe',
          time: 'Sep 2021 – Jun 2023',
          description:
            'Organized 30+ art events with innovative marketing strategies, increasing audience attendance by 20%.',
          tags: ['Leadership', 'Event Planning'],
        },
        {
          icon: '🎓',
          title: 'Three-Year Academic Excellence Scholarship',
          time: '2021 – 2023',
          description:
            'Awarded university-level scholarship for three consecutive years in recognition of outstanding academic performance (GPA 3.92/4.00).',
          tags: ['Academic', 'Scholarship'],
        },
        {
          icon: '🌍',
          title: 'International Study Experience',
          time: '2024 – Present',
          description:
            'Studied across three countries (China, Netherlands, Hong Kong), gaining a global perspective on computer science research and collaboration.',
          tags: ['Global', 'Research'],
        },
      ],
    },
    zh: {
      title: '个人亮点',
      subtitle: '荣誉、领导力与难忘时刻。',
      items: [
        {
          icon: '🏆',
          title: '第19届校 ACM 程序设计大赛 三等奖',
          time: '2021年9月',
          description:
            '在高强度竞赛环境中与队友协作，解决复杂算法问题，展示出优秀的编程与问题解决能力。',
          tags: ['算法', '竞赛'],
        },
        {
          icon: '🎭',
          title: '校文艺演出团 副团长',
          time: '2021年9月 – 2023年6月',
          description:
            '统筹组织30余场校园文艺活动，采用创新宣传策略，使活动出席率提升20%。',
          tags: ['领导力', '活动策划'],
        },
        {
          icon: '🎓',
          title: '连续三年校级学业优秀奖学金',
          time: '2021 – 2023',
          description:
            '凭借优异的学业成绩（GPA 3.92/4.00），连续三年获得校级奖学金。',
          tags: ['学术', '奖学金'],
        },
        {
          icon: '🌍',
          title: '跨国学习经历',
          time: '2024 – 至今',
          description:
            '先后在中国、荷兰、香港三地求学，获得计算机科学研究与合作的全球化视野。',
          tags: ['国际化', '科研'],
        },
      ],
    },
  };

  const data = content[lang] ?? content.zh;

  return (
    <section id="highlights">
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

        <div className="highlights-grid">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              className="highlight-card"
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <div className="highlight-content">
                <h3>{item.title}</h3>
                <div className="highlight-time">{item.time}</div>
                <p>{item.description}</p>
                {item.tags && (
                  <div className="highlight-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className={`tag ${i % 2 === 0 ? 'purple' : 'pink'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
