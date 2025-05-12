// src/components/Home.jsx
import React from 'react';

function Home({ lang }) {
  const introText = {
    en: "Hello, I'm a Computer Science undergraduate with a passion for software engineering and research.",
    zh: "您好，我是一名计算机科学本科生，热衷于软件工程和科研探索。"
  };
  return (
    <section id="home" className="home-section">
      <h1>{ lang === 'en' ? 'Peng Xu' : '徐鹏' }</h1>
      <p>{ introText[lang] }</p>
    </section>
  );
}

export default Home;
