import React from 'react';

function Home({ lang }) {
  const introText = {
    en: `I am currently pursuing an M.Phil. in Computer Science and Engineering at HKUST(GZ).
My research interests focus on Large Language Models and Mixture-of-Experts (MoE).
Beyond academics, I enjoy fitness, cycling, swimming, and exploring great food.
As an extrovert, I value connection and collaboration — feel free to reach out through the Contact section if you’d like chat or work together with me.`,
    zh: `我目前就读于香港科技大学（广州）的计算机科学与工程 MPhil 项目，研究兴趣集中在大语言模型与专家混合（MoE）。
在学术之外，我热爱健身、骑行、游泳等运动，也喜欢探索美食。
作为一个外向型人格，我非常珍惜与他人交流与合作的机会——如果你想要跟我交流我，或展开合作，欢迎通过 Contact 页面联系我。`
  };

  // 避免 lang 为空时报错
  const text = introText[lang] ?? introText.en;

  return (
    <section id="home" className="home-section" style={{ padding: "24px 0" }}>
      <h1>{lang === 'zh' ? '徐鹏' : 'Peng Xu'}</h1>
      <p>{text}</p>
    </section>
  );
}

export default Home;
