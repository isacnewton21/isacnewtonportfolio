import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiFlutter, SiTailwindcss, SiHtml5,
  SiJavascript, SiNodedotjs, SiExpress, SiDjango,
  SiPython, SiDart, SiMysql, SiMongodb,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiCpu, FiLayout } from 'react-icons/fi';

const categories = [
  {
    label: 'Frontend',
    icon: <FiLayout size={16} />,
    accent: '#c9a96e',
    skills: [
      { name: 'React.js',     icon: <SiReact size={22} />,       color: '#61DAFB' },
      { name: 'Flutter',      icon: <SiFlutter size={22} />,     color: '#54C5F8' },
      { name: 'Tailwind',     icon: <SiTailwindcss size={22} />, color: '#38bdf8' },
      { name: 'HTML5',        icon: <SiHtml5 size={22} />,       color: '#E44D27' },
      { name: 'JavaScript',   icon: <SiJavascript size={22} />,  color: '#F7DF1E' },
    ],
  },
  {
    label: 'Backend',
    icon: <FiCode size={16} />,
    accent: '#a8a8a3',
    skills: [
      { name: 'Node.js',    icon: <SiNodedotjs size={22} />, color: '#539E43' },
      { name: 'Express.js', icon: <SiExpress size={22} />,   color: '#f2f2f0' },
      { name: 'Django',     icon: <SiDjango size={22} />,    color: '#4db6ac' },
      { name: 'REST API',   icon: <FiCode size={22} />,      color: '#a8a8a3' },
    ],
  },
  {
    label: 'Languages',
    icon: <FiCpu size={16} />,
    accent: '#a8d8a8',
    skills: [
      { name: 'Python',     icon: <SiPython size={22} />,     color: '#3776AB' },
      { name: 'JavaScript', icon: <SiJavascript size={22} />, color: '#F7DF1E' },
      { name: 'Dart',       icon: <SiDart size={22} />,       color: '#00B4AB' },
      { name: 'SQL',        icon: <FiDatabase size={22} />,   color: '#a8d8a8' },
    ],
  },
  {
    label: 'Databases',
    icon: <FiDatabase size={16} />,
    accent: '#c9a96e',
    skills: [
      { name: 'MySQL',   icon: <SiMysql size={22} />,   color: '#4479A1' },
      { name: 'MongoDB', icon: <SiMongodb size={22} />, color: '#4DB33D' },
    ],
  },
];

const tools = ['React.js','Flutter','Tailwind CSS','Python Django','Node.js','Express.js','Firebase','MySQL','MongoDB','GitHub','Android Studio','VS Code'];

const SkillPill = ({ skill, delay }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="skill-pill"
      initial={{ opacity: 0, y: 14, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.16,1,0.3,1] }}
      whileHover={{ y: -2 }}
    >
      <span style={{ color: skill.color, flexShrink: 0 }}>{skill.icon}</span>
      <span style={{ fontSize: '12.5px' }}>{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: '120px 28px', background: 'var(--bg-2,#111111)' }}
    >
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '16px' }}>My Expertise</p>
          <h2 className="section-title">
            Skills &amp; <em>Technologies</em>
          </h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p style={{ color: 'var(--ink-3)', maxWidth: '440px', margin: '0 auto', fontSize: '14.5px', lineHeight: 1.8 }}>
            A versatile toolkit built through hands-on projects across the full stack spectrum.
          </p>
        </motion.div>

        {/* Category cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Left accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '2px', background: cat.accent, opacity: 0.4 }} />

              {/* Cat header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px', paddingLeft: '10px' }}>
                <span style={{ color: cat.accent }}>{cat.icon}</span>
                <span style={{ fontWeight: 600, fontSize: '13.5px', color: 'var(--ink)', letterSpacing: '0.02em' }}>
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingLeft: '10px' }}>
                {cat.skills.map((s, si) => (
                  <SkillPill key={s.name} skill={s} delay={ci * 0.1 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '56px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '18px', fontWeight: 500 }}>
            Tools &amp; Platforms
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {tools.map(t => (
              <motion.span
                key={t}
                className="tag"
                whileHover={{ borderColor: 'rgba(201,169,110,0.3)', color: 'var(--ink)' }}
                style={{ cursor: 'default' }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
