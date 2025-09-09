import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import './styles.css';


// export default function App() {
//   return <h1 style={{padding: 24}}>Hello Vite + React</h1>;
// }

export default function App() {
  // 'en' 或 'zh'
  const [lang, setLang] = useState('en');

  return (
    <div className="app-container">
      {/* 顶部导航，传入当前语言和切换函数 */}
      <Navbar currentLang={lang} onLangChange={setLang} />

      {/* 主内容区 */}
      <main>
        {/* 各个版块根据 lang 渲染中英文 */}
        <Home lang={lang} />
        <Education lang={lang} />
        <Experience lang={lang} />
        <Research lang={lang} />
        <Portfolio lang={lang} />
        <Gallery lang={lang} />
        <ContactForm lang={lang} />
      </main>
    </div>
  );
}
