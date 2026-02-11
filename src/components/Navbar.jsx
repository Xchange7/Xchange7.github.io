// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar({ currentLang, onLangChange }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home">Peng Xu</a>

        <ul className="nav-links">
          <li><a href="#home">{currentLang === 'en' ? 'Home' : '主页'}</a></li>
          <li><a href="#education">{currentLang === 'en' ? 'Education' : '教育背景'}</a></li>
          <li><a href="#experience">{currentLang === 'en' ? 'Experience' : '工作经历'}</a></li>
          <li><a href="#research">{currentLang === 'en' ? 'Research' : '研究方向'}</a></li>
          <li><a href="#contact">{currentLang === 'en' ? 'Contact' : '联系'}</a></li>
        </ul>

        <div className="nav-actions">
          <a className="btn small ghost" href="/assets/CV_Chinese.pdf" download>
            {currentLang === 'en' ? 'Download CV' : '下载简历'}
          </a>
          <button
            className="lang-btn"
            onClick={() => onLangChange(currentLang === 'en' ? 'zh' : 'en')}
          >
            {currentLang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
