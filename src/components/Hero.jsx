import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiMail } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'Flutter Developer',
  'React.js Developer',
  'Django Developer',
  'Backend Engineer',
];

const useTypewriter = (words, speed = 75, pause = 2200) => {
  const [text,       setText]       = useState('');
  const [wordIndex,  setWordIndex]  = useState(0);
  const [charIndex,  setCharIndex]  = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay   = isDeleting ? speed / 2 : speed;
    const timer   = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex(i => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words, speed, pause]);

  return text;
};

const Hero = () => {
  const typedText = useTypewriter(roles);

  const stats = [
    { num: '3+',  label: 'Projects' },
    { num: '5+',  label: 'Technologies' },
    { num: 'B.E', label: 'CS & Design' },
  ];

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '130px 28px 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '80px', alignItems: 'center' }}>

          {/* ── Left content ── */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid rgba(201,169,110,0.25)',
                background: 'rgba(201,169,110,0.05)',
                borderRadius: '50px',
                padding: '5px 14px',
                fontSize: '12px', fontWeight: 500, color: '#c9a96e',
                letterSpacing: '0.05em',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c9a96e', display: 'inline-block', boxShadow: '0 0 6px #c9a96e' }} />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: 'var(--ink)',
                marginBottom: '10px',
              }}
            >
              Isac Newton
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: '26px', height: '36px', display: 'flex', alignItems: 'center' }}
            >
              <span style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: 'var(--ink-2)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}>
                {typedText}
                <span className="cursor-blink" />
              </span>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="divider" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: '15px',
                color: 'var(--ink-3)',
                lineHeight: 1.85,
                maxWidth: '480px',
                marginBottom: '40px',
              }}
            >
              Full Stack &amp; Flutter Developer building modern, scalable web
              and mobile applications with React, Django, and Node.js.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <a href="#projects" className="btn btn-gold">
                View Projects <FiArrowRight size={15} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <FiMail size={15} /> Contact Me
              </a>
              <a href="/resume.pdf" download className="btn btn-ghost">
                <FiDownload size={15} /> Résumé
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', gap: '48px', marginTop: '60px' }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '1.9rem', fontWeight: 700,
                    letterSpacing: '-0.04em', color: 'var(--ink)',
                    lineHeight: 1,
                    marginBottom: '5px',
                  }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-3)', fontWeight: 500, letterSpacing: '0.04em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Terminal card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="card hero-card"
            style={{
              width: '300px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Terminal dots */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#3d3d3d','#4a4a4a','#555'].map((c,i) => (
                <div key={i} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />
              ))}
            </div>

            {/* Code block */}
            <pre style={{
              fontFamily: "'SF Mono', 'Fira Code', monospace",
              fontSize: '12px',
              lineHeight: 1.7,
              color: 'var(--ink-2)',
              margin: 0,
            }}>
              <span style={{ color: 'var(--ink-3)' }}>{'// developer.json'}</span>{'\n'}
              <span style={{ color: '#c9a96e' }}>{'{'}</span>{'\n'}
              {'  '}<span style={{ color: 'var(--ink-2)' }}>name</span>{': '}
              <span style={{ color: '#a8d8a8' }}>"Isac Newton"</span>{',\n'}
              {'  '}<span style={{ color: 'var(--ink-2)' }}>role</span>{': '}
              <span style={{ color: '#a8d8a8' }}>"Full Stack"</span>{',\n'}
              {'  '}<span style={{ color: 'var(--ink-2)' }}>stack</span>{': [\n'}
              {'    '}<span style={{ color: '#a8d8a8' }}>"React"</span>{', '}
              <span style={{ color: '#a8d8a8' }}>"Flutter"</span>{',\n'}
              {'    '}<span style={{ color: '#a8d8a8' }}>"Django"</span>{', '}
              <span style={{ color: '#a8d8a8' }}>"Node"</span>{'\n'}
              {'  ],\n'}
              {'  '}<span style={{ color: 'var(--ink-2)' }}>open</span>{': '}
              <span style={{ color: '#c9a96e' }}>true</span>{'\n'}
              <span style={{ color: '#c9a96e' }}>{'}'}</span>
            </pre>

            {/* Tags */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['React', 'Flutter', 'Django', 'Node.js'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '10px', color: 'var(--ink-3)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>Scroll</span>
        <div className="scroll-mouse">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 13, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-card { display: none !important; }
          #home > div > div > div:first-child {
            grid-column: 1 / -1;
          }
          #home > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
