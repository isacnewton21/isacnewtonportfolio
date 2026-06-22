import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16,1,0.3,1] } },
};

const infoRows = [
  { label: 'Degree',   value: 'B.E. Computer Science & Design' },
  { label: 'Email',    value: 'isacnewton63@gmail.com' },
  { label: 'Phone',    value: '+91 6374800632' },
  { label: 'Status',   value: '● Open to Work', gold: true },
];

const About = () => {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} style={{ padding: '120px 28px' }}>
      <div className="container">
        <div className="about-grid">

          {/* ── Left: Identity card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            style={{ position: 'relative' }}
          >
            <div className="card" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
              {/* Gold top bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />

              {/* Monogram */}
              <div style={{
                width: '64px', height: '64px',
                border: '1px solid rgba(201,169,110,0.3)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', fontWeight: 700, color: 'var(--gold)',
                letterSpacing: '-0.03em',
                marginBottom: '22px',
              }}>
                IN
              </div>

              <div style={{ fontWeight: 700, fontSize: '20px', color: 'var(--ink)', marginBottom: '4px', letterSpacing: '-0.02em' }}>
                Isac Newton
              </div>
              <div style={{ fontSize: '13px', color: 'var(--ink-3)', marginBottom: '28px' }}>
                Full Stack &amp; Flutter Developer
              </div>

              {/* Info rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {infoRows.map((r) => (
                  <div key={r.label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '11px 0',
                    borderBottom: '1px solid var(--border)',
                    fontSize: '13px',
                  }}>
                    <span style={{ color: 'var(--ink-3)', fontWeight: 500 }}>{r.label}</span>
                    <span style={{ color: r.gold ? 'var(--gold)' : 'var(--ink-2)', fontWeight: r.gold ? 600 : 400 }}>
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '-14px', right: '-14px',
                background: 'var(--bg-3,#161616)',
                border: '1px solid rgba(201,169,110,0.3)',
                borderRadius: '10px',
                padding: '10px 14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '12px', textAlign: 'center', lineHeight: 1.4 }}>
                Available<br />
                <span style={{ fontSize: '10px', color: 'var(--ink-3)', fontWeight: 500 }}>for Work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <p className="eyebrow" style={{ marginBottom: '16px' }}>About Me</p>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              Crafting Digital<br />
              <em>Experiences</em>
            </h2>
            <div className="divider" />

            <p style={{ color: 'var(--ink-3)', lineHeight: 1.9, fontSize: '15px', marginBottom: '18px' }}>
              I am pursuing a{' '}
              <span style={{ color: 'var(--ink-2)', fontWeight: 500 }}>Bachelor of Engineering in Computer Science and Design</span>{' '}
              with a strong interest in Full Stack and Mobile Application Development.
            </p>
            <p style={{ color: 'var(--ink-3)', lineHeight: 1.9, fontSize: '15px', marginBottom: '38px' }}>
              I enjoy creating practical software solutions and continuously learning new technologies.
              From responsive web apps to cross-platform mobile applications, I strive to deliver quality products.
            </p>

            {/* Skill chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {['Full Stack Development', 'Flutter / Mobile', 'React.js', 'Django', 'Node.js'].map(s => (
                <span key={s} className="tag" style={{ color: 'var(--ink-2)', padding: '6px 14px', fontSize: '12.5px' }}>{s}</span>
              ))}
            </div>

            <a href="#contact" className="btn btn-gold">
              Get in Touch <FiArrowRight size={15} />
            </a>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px; }
        }
      `}</style>
    </section>
  );
};

export default About;
