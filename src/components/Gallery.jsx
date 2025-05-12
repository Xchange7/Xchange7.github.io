// src/components/Gallery.jsx
import React from 'react';

function Gallery({ lang }) {
  const images = [
    { src: process.env.PUBLIC_URL + '/assets/photo1.jpg', caption_en: 'Research presentation', caption_zh: '研究展示' },
    { src: process.env.PUBLIC_URL + '/assets/photo2.jpg', caption_en: 'Volunteer activity', caption_zh: '志愿活动' },
    // ... 更多照片
  ];
  return (
    <section id="gallery">
      <h2>{ lang === 'en' ? 'Photo Gallery' : '照片展示' }</h2>
      <div className="photo-grid">
        {images.map((img, i) => (
          <figure key={i} className="photo-item">
            <img src={img.src} alt={lang === 'en' ? img.caption_en : img.caption_zh} />
            <figcaption>{ lang === 'en' ? img.caption_en : img.caption_zh }</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
