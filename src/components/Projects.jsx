import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCloud, FiHome, FiShoppingBag, FiChevronDown } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'CloudRule Website',
    role: 'Full Stack Developer',
    status: 'Completed',
    statusDot: '#a8d8a8',
    icon: <FiCloud size={20} />,
    accent: 'var(--gold)',
    description:
      'Developed a modern and responsive company website to showcase business services with clean, professional design and optimized performance.',
    tech: ['React.js', 'Tailwind CSS'],
    contributions: [
      'Built responsive UI with React.js',
      'Developed reusable component library',
      'Optimised web performance (Lighthouse 90+)',
      'Ensured full mobile responsiveness',
    ],
  },
  {
    id: 2,
    title: 'Home Service App',
    role: 'Full Stack & Flutter Developer',
    status: 'In Development',
    statusDot: '#f7c59f',
    icon: <FiHome size={20} />,
    accent: '#f7c59f',
    description:
      'A service marketplace connecting customers with trusted service providers, featuring booking management, real-time notifications, and user authentication.',
    tech: ['Flutter', 'Node.js', 'Express.js', 'SQL', 'Firebase'],
    contributions: [
      'Developing mobile modules with Flutter',
      'Building REST APIs with Node.js & Express',
      'Managing SQL database operations',
      'Integrating Firebase push notifications',
      'Booking & user management features',
    ],
  },
  {
    id: 3,
    title: 'Royal Seafoods App',
    role: 'Full Stack & Flutter Developer',
    status: 'Completed',
    statusDot: '#a8d8a8',
    icon: <FiShoppingBag size={20} />,
    accent: '#a8d8a8',
    description:
      'A seafood ordering & delivery app enabling customers to browse products, place orders, make online payments, and track purchases in real-time.',
    tech: ['Flutter', 'Django', 'SQL', 'Firebase', 'Razorpay'],
    contributions: [
      'Mobile features built with Flutter',
      'Backend APIs via Django REST framework',
      'SQL database design and operations',
      'Firebase push notification integration',
      'Razorpay payment gateway integration',
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="card"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16,1,0.3,1] }}
      style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, ${project.accent}60, transparent)` }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '44px', height: '44px',
            border: `1px solid ${project.accent}30`,
            background: `${project.accent}08`,
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: project.accent,
            flexShrink: 0,
          }}>
            {project.icon}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--ink)', letterSpacing: '-0.015em', marginBottom: '3px' }}>
              {project.title}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ink-3)', fontWeight: 500 }}>{project.role}</div>
          </div>
        </div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '11.5px', fontWeight: 600,
          color: project.statusDot,
          background: `${project.statusDot}12`,
          border: `1px solid ${project.statusDot}30`,
          padding: '4px 12px', borderRadius: '50px',
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: project.statusDot }} />
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.85, marginBottom: '20px' }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
        {project.tech.map(t => (
          <span key={t} className="tag" style={{ color: project.accent, borderColor: `${project.accent}25` }}>{t}</span>
        ))}
      </div>

      {/* Contributions toggle */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '6px',
          color: 'var(--ink-3)', fontSize: '12.5px', fontWeight: 500,
          padding: 0, letterSpacing: '0.02em',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = project.accent}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}
      >
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <FiChevronDown size={15} />
        </motion.span>
        {open ? 'Hide' : 'View'} Contributions
      </button>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{ listStyle: 'none', marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}
        >
          {project.contributions.map((c, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--ink-3)', fontSize: '13.5px', lineHeight: 1.7 }}>
              <span style={{ color: project.accent, marginTop: '4px', flexShrink: 0, fontSize: '10px' }}>◆</span>
              {c}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} style={{ padding: '120px 28px' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="eyebrow" style={{ marginBottom: '16px' }}>My Work</p>
          <h2 className="section-title">
            Featured <em>Projects</em>
          </h2>
          <div className="divider" />
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
