import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

const Navbar = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position:   'fixed',
        top: 0, left: 0, right: 0,
        zIndex:     1000,
        padding:    '0 28px',
        background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px) saturate(150%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ opacity: 0.8 }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{
            width: '30px', height: '30px',
            border: '1px solid rgba(201,169,110,0.4)',
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: 700, color: '#c9a96e',
            letterSpacing: '-0.03em',
          }}>
            IN
          </div>
          <span style={{ fontWeight: 600, fontSize: '15px', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
            Isac Newton
          </span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hide-mobile" style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center' }}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire me CTA */}
        <a href="#contact" className="btn btn-gold hide-mobile" style={{ fontSize: '12px', padding: '9px 20px' }}>
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-2)', alignItems: 'center' }}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', background: 'rgba(10,10,10,0.97)', borderTop: '1px solid var(--border)' }}
          >
            <ul style={{ listStyle: 'none', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                    style={{ fontSize: '15px' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
