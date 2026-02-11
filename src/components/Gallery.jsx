// src/components/Gallery.jsx
import React from 'react';

function Gallery({ lang }) {
  const images = [
    { src: '/assets/xu_peng.png', caption_en: 'Peng Xu', caption_zh: '徐鹏' },
    // { src: '/assets/photo2.jpg', caption_en: 'Volunteer activity', caption_zh: '志愿活动' },
    // { src: '/assets/photo3.jpg', caption_en: 'Research work', caption_zh: '科研工作' }
    // 可以继续添加更多图片，只要放到 public/assets/ 下即可
  ];

  return (
    <section id="gallery" className="section">
      <div className="section-head">
        <h2 className="section-title">{lang === 'en' ? 'Photo Gallery' : '照片展示'}</h2>
        <p className="section-subtitle">
          {lang === 'en' ? 'A quick snapshot of me.' : '简单记录。'}
        </p>
      </div>

      <div className="photo-grid">
        {images.map((img, i) => (
          <figure key={i} className="photo-item">
            <img
              src={img.src}
              alt={lang === 'en' ? img.caption_en : img.caption_zh}
            />
            <figcaption>
              {lang === 'en' ? img.caption_en : img.caption_zh}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
