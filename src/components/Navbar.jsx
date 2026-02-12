import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = {
  en: [
    { label: 'Home', href: '#home' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ],
  zh: [
    { label: '主页', href: '#home' },
    { label: '教育', href: '#education' },
    { label: '经历', href: '#experience' },
    { label: '研究', href: '#research' },
    { label: '亮点', href: '#highlights' },
    { label: '联系', href: '#contact' },
  ],
};

export default function Navbar({ currentLang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = navItems[currentLang] ?? navItems.en;

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <a href="#home" className="nav-brand">PX</a>

        <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
          {items.map((item, i) => (
            <li key={item.href}>
              <motion.a
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <button
          className="lang-btn"
          onClick={() => onLangChange(currentLang === 'en' ? 'zh' : 'en')}
        >
          {currentLang === 'en' ? '中文' : 'EN'}
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </motion.nav>
  );
}
