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

export default function Portfolio({ lang }) {
  const content = {
    en: {
      title: 'Projects & Highlights',
      subtitle: 'Competitions, leadership, and creative endeavors.',
      items: [
        {
          title: 'Third Prize – UESTC 19th ACM Programming Contest',
          time: 'Sep 2021',
          description:
            'Solved complex algorithmic challenges with a teammate under competition pressure, demonstrating strong problem-solving and programming skills.',
          tags: ['Algorithm', 'Competition'],
        },
        {
          title: 'Assistant Leader – Campus Art Troupe',
          time: 'Sep 2021 – Jun 2023',
          description:
            'Organized 30+ art events with innovative marketing strategies, increasing audience attendance by 20%.',
          tags: ['Leadership', 'Event Planning'],
        },
      ],
    },
    zh: {
      title: '项目与成果',
      subtitle: '竞赛、领导力与创意实践。',
      items: [
        {
          title: '第19届校 ACM 程序设计大赛 三等奖',
          time: '2021年9月',
          description:
            '在高强度竞赛环境中与队友协作，解决复杂算法问题，展示优秀的编程与问题解决能力。',
          tags: ['算法', '竞赛'],
        },
        {
          title: '校文艺演出团 副团长',
          time: '2021年9月 – 2023年6月',
          description:
            '统筹组织30余场校园文艺活动，采用创新宣传策略，使活动出席率提升20%。',
          tags: ['领导力', '活动策划'],
        },
      ],
    },
  };

  const data = content[lang] ?? content.en;

  return (
    <section id="portfolio">
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

        <div className="portfolio-grid">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              className="portfolio-card"
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <h3>{item.title}</h3>
              <div className="time-tag">{item.time}</div>
              <p>{item.description}</p>
              {item.tags && (
                <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                  {item.tags.map((tag, i) => (
                    <span key={i} className={`tag ${i % 2 === 0 ? 'purple' : 'pink'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
