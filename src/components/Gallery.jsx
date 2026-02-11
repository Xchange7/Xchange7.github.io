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
    <section id="gallery" style={{ padding: '24px 0' }}>
      <h2>{lang === 'en' ? 'Photo Gallery' : '照片展示'}</h2>
      <div className="photo-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        {images.map((img, i) => (
          <figure key={i} className="photo-item" style={{ textAlign: 'center' }}>
            <img
              src={img.src}
              alt={lang === 'en' ? img.caption_en : img.caption_zh}
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
            <figcaption style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}>
              {lang === 'en' ? img.caption_en : img.caption_zh}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
