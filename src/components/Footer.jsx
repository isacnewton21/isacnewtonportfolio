import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const quickLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

const socials = [
  { icon: <FiGithub size={16} />,   href: '#',                            label: 'GitHub' },
  { icon: <FiLinkedin size={16} />, href: '#',                            label: 'LinkedIn' },
  { icon: <FiMail size={16} />,     href: 'mailto:isacnewton63@gmail.com', label: 'Email' },
  { icon: <FiPhone size={16} />,    href: 'tel:+916374800632',             label: 'Phone' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      padding: '64px 28px 36px',
      position: 'relative',
    }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
        width: '300px', height: '120px',
        background: 'radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '30px', height: '30px',
                border: '1px solid rgba(201,169,110,0.35)',
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 700, color: 'var(--gold)',
              }}>
                IN
              </div>
              <span style={{ fontWeight: 600, fontSize: '15px', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                Isac Newton
              </span>
            </div>
            <p style={{ color: 'var(--ink-3)', fontSize: '13px', lineHeight: 1.8, maxWidth: '240px', marginBottom: '20px' }}>
              Full Stack &amp; Flutter Developer building modern web and mobile applications.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: '34px', height: '34px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ink-3)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-3)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontSize: '11px', color: 'var(--ink-3)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ fontSize: '13.5px', color: 'var(--ink-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--ink)'}
                    onMouseLeave={e => e.target.style.color = 'var(--ink-3)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '11px', color: 'var(--ink-3)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: <FiMail size={13} />, value: 'isacnewton63@gmail.com', href: 'mailto:isacnewton63@gmail.com' },
                { icon: <FiPhone size={13} />, value: '+91 6374800632',          href: 'tel:+916374800632' },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'var(--ink-3)', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}
                >
                  {c.icon} {c.value}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '52px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontSize: '12px', color: 'var(--ink-3)' }}>
            © {year} Isac Newton. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--ink-3)' }}>
            Built with React
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 56px;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
