import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Highlights from './components/Highlights';
import ContactForm from './components/ContactForm';
import './styles.css';

export default function App() {
  const [lang, setLang] = useState('zh');

  return (
    <>
      <Navbar currentLang={lang} onLangChange={setLang} />

      <main>
        <Home lang={lang} />

        <div className="gradient-divider" />
        <Education lang={lang} />

        <div className="gradient-divider" />
        <Experience lang={lang} />

        <div className="gradient-divider" />
        <Research lang={lang} />

        <div className="gradient-divider" />
        <Highlights lang={lang} />

        <div className="gradient-divider" />
        <ContactForm lang={lang} />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Peng Xu · Built with React & Framer Motion</p>
      </footer>
    </>
  );
}
