// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar({ currentLang, onLangChange }) {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li><a href="#home">{currentLang === 'en' ? 'Home' : '主页'}</a></li>
          <li><a href="#education">{currentLang === 'en' ? 'Education' : '教育背景'}</a></li>
          <li><a href="#experience">{currentLang === 'en' ? 'Experience' : '工作经历'}</a></li>
          <li><a href="#research">{currentLang === 'en' ? 'Research' : '研究项目'}</a></li>
          <li><a href="#portfolio">{currentLang === 'en' ? 'Portfolio' : '作品展示'}</a></li>
          <li><a href="#gallery">{currentLang === 'en' ? 'Gallery' : '照片展示'}</a></li>
          <li><a href="#contact">{currentLang === 'en' ? 'Contact' : '联系'}</a></li>
        </ul>

        <button
          className="lang-btn"
          onClick={() => onLangChange(currentLang === 'en' ? 'zh' : 'en')}
        >
          {currentLang === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
