import React from 'react';
import { motion } from 'framer-motion';

const imgVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Gallery({ lang }) {
  const images = [
    { src: '/assets/xu_peng.png', caption_en: 'Peng Xu', caption_zh: '徐鹏' },
  ];

  const title = lang === 'zh' ? '照片' : 'Gallery';
  const subtitle = lang === 'zh' ? '一些生活的瞬间。' : 'A glimpse into my life.';

  return (
    <section id="gallery">
      <div className="section-wrapper">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="gallery-item"
              custom={idx}
              variants={imgVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <img
                src={img.src}
                alt={lang === 'zh' ? img.caption_zh : img.caption_en}
                loading="lazy"
              />
              <div className="gallery-caption">
                {lang === 'zh' ? img.caption_zh : img.caption_en}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
