import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FiMonitor } from 'react-icons/fi';

const focusAreas = ['Web Technologies', 'Mobile Applications', 'Database Systems', 'Software Engineering'];

const profHighlights = [
  'Full Stack Developer',
  'Flutter Mobile App Developer',
  'React.js & Tailwind CSS',
  'Django & Node.js Backend',
  'REST API Integration',
  'SQL & MongoDB Database',
  'Firebase Notifications',
  'Razorpay Payment Gateway',
  'Problem Solving & Teamwork',
];

const Experience = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} style={{ padding: '120px 28px', background: 'var(--bg-2,#111111)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Background</p>
          <h2 className="section-title">
            Education &amp; <em>Expertise</em>
          </h2>
          <div className="divider" style={{ margin: '20px auto' }} />
        </motion.div>

        <div className="exp-grid">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <HiOutlineAcademicCap size={20} style={{ color: 'var(--gold)' }} />
              <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--ink)', letterSpacing: '0.02em' }}>Education</span>
            </div>

            <div className="card" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '18px', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    Bachelor of Engineering
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--gold)', fontWeight: 500 }}>
                    Computer Science &amp; Design
                  </div>
                </div>
                <span style={{
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em',
                  color: 'var(--ink-3)',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '4px 12px', borderRadius: '4px',
                }}>
                  Pursuing
                </span>
              </div>

              <p style={{ fontSize: '13.5px', color: 'var(--ink-3)', lineHeight: 1.85, marginBottom: '24px' }}>
                Currently pursuing a degree focused on software development, web technologies, mobile applications,
                and database systems with a strong emphasis on practical skill-building.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {focusAreas.map((f, i) => (
                  <motion.span
                    key={i}
                    className="tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                  >
                    {f}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Professional Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16,1,0.3,1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <FiMonitor size={18} style={{ color: 'var(--gold)' }} />
              <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--ink)', letterSpacing: '0.02em' }}>Professional Highlights</span>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {profHighlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.2 + i * 0.055 }}
                    whileHover={{ x: 4, backgroundColor: 'var(--surface-2)' }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      background: 'transparent',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, opacity: 0.7 }} />
                    <span style={{ color: 'var(--ink-2)', fontSize: '13.5px', fontWeight: 400 }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
