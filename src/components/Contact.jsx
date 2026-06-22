import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';

const contactItems = [
  { icon: <FiMail size={18} />,    label: 'Email',    value: 'isacnewton63@gmail.com',   href: 'mailto:isacnewton63@gmail.com',   accent: 'var(--gold)' },
  { icon: <FiPhone size={18} />,   label: 'Phone',    value: '+91 6374800632',             href: 'tel:+916374800632',               accent: '#a8d8a8' },
  { icon: <FiLinkedin size={18} />,label: 'LinkedIn', value: 'To Be Updated',              href: '#',                               accent: '#7eb0d4' },
  { icon: <FiGithub size={18} />,  label: 'GitHub',   value: 'To Be Updated',              href: '#',                               accent: 'var(--ink-2)' },
];

const Contact = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:isacnewton63@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 28px' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Let's Connect</p>
          <h2 className="section-title">
            Get in <em>Touch</em>
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="contact-grid">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            <p style={{ color: 'var(--ink-3)', fontSize: '14.5px', lineHeight: 1.85, marginBottom: '36px', maxWidth: '360px' }}>
              Have a project in mind, or just want to say hello?
              I typically respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="contact-row"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.accent, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-3)', fontWeight: 500, marginBottom: '2px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '13.5px', color: 'var(--ink-2)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability notice */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              style={{
                marginTop: '28px', padding: '18px 20px',
                background: 'rgba(168,216,168,0.04)',
                border: '1px solid rgba(168,216,168,0.14)',
                borderRadius: 'var(--radius)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{ width: '8px', height: '8px', background: '#a8d8a8', borderRadius: '50%', boxShadow: '0 0 8px #a8d8a8' }} />
                <span style={{ color: '#a8d8a8', fontWeight: 600, fontSize: '13px' }}>Available for Opportunities</span>
              </div>
              <p style={{ color: 'var(--ink-3)', fontSize: '13px', lineHeight: 1.7 }}>
                Open to freelance, internships, and full-time roles.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16,1,0.3,1] }}
          >
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ fontWeight: 700, fontSize: '18px', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '28px' }}>
                Send a Message
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--ink-3)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                    className="field"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--ink-3)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                    className="field"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--ink-3)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                    className="field"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-gold"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ justifyContent: 'center', width: '100%', padding: '13px' }}
                >
                  {sent ? <FiCheck size={17} /> : <FiSend size={17} />}
                  {sent ? 'Message Sent!' : 'Send Message'}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
