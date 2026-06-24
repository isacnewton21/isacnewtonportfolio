import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiFlutter, SiTailwindcss, SiHtml5, SiCss, SiJavascript,
  SiNodedotjs, SiExpress, SiDjango,
  SiPython, SiDart,
  SiMysql, SiMongodb,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiCpu, FiLayout } from 'react-icons/fi';

const skillCategories = [
  {
    label: 'Frontend',
    icon: <FiLayout size={15} />,
    skills: [
      { name: 'React.js',     icon: <SiReact size={22} />,       color: '#149eca' },
      { name: 'Flutter',      icon: <SiFlutter size={22} />,     color: '#44d1fd' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={22} />, color: '#38bdf8' },
      { name: 'HTML5',        icon: <SiHtml5 size={22} />,       color: '#e34c26' },
      { name: 'CSS3',         icon: <SiCss size={22} />,         color: '#264de4' },
      { name: 'JavaScript',   icon: <SiJavascript size={22} />,  color: '#b89520' },
    ],
  },
  {
    label: 'Backend',
    icon: <FiCode size={15} />,
    skills: [
      { name: 'Node.js',    icon: <SiNodedotjs size={22} />, color: '#3d7a2f' },
      { name: 'Express.js', icon: <SiExpress size={22} />,   color: '#4A453E' },
      { name: 'Django',     icon: <SiDjango size={22} />,    color: '#2a7a3e' },
      { name: 'REST API',   icon: <FiCode size={22} />,      color: '#A07840' },
    ],
  },
  {
    label: 'Languages',
    icon: <FiCpu size={15} />,
    skills: [
      { name: 'Python',     icon: <SiPython size={22} />,     color: '#3776AB' },
      { name: 'JavaScript', icon: <SiJavascript size={22} />, color: '#b89520' },
      { name: 'Dart',       icon: <SiDart size={22} />,       color: '#00B4AB' },
      { name: 'SQL',        icon: <FiDatabase size={22} />,   color: '#A07840' },
    ],
  },
  {
    label: 'Databases',
    icon: <FiDatabase size={15} />,
    skills: [
      { name: 'MySQL',   icon: <SiMysql size={22} />,   color: '#4479A1' },
      { name: 'MongoDB', icon: <SiMongodb size={22} />, color: '#4DB33D' },
    ],
  },
];

const SkillChip = ({ skill, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.36, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, y: -2 }}
      className="flex flex-col items-center gap-2 px-4 py-4 bg-white rounded-xl border border-muslin
                 shadow-sm hover:border-gold-border hover:shadow-md transition-all duration-200 cursor-default
                 min-w-[84px] text-center"
    >
      <span style={{ color: skill.color }}>{skill.icon}</span>
      <span className="text-[11.5px] font-600 text-bark leading-tight">{skill.name}</span>
    </motion.div>
  );
};

const tools = [
  'Flutter', 'React.js', 'Tailwind CSS', 'Python Django', 'Node.js',
  'Express.js', 'Firebase', 'MySQL', 'MongoDB', 'GitHub', 'Android Studio', 'VS Code',
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-90px' });

  return (
    <section id="skills" ref={ref} className="py-28 px-6 bg-parchment">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-700 text-gold tracking-[0.18em] uppercase mb-4">
            — My Expertise
          </p>
          <h2 className="font-heading font-700 text-[clamp(2rem,4.5vw,3rem)] text-obsidian
                         tracking-tight leading-[1.1]">
            Skills &{' '}
            <span className="text-gold">Technologies</span>
          </h2>
          <p className="text-[15px] text-bark max-w-md mx-auto mt-4 leading-[1.8]">
            A versatile toolkit built through real-world projects across the full stack.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="flex flex-col gap-5">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: catIdx * 0.07 }}
              className="bg-white rounded-2xl border border-muslin shadow-sm p-7"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-lg bg-soil flex items-center justify-center text-gold-light flex-shrink-0">
                  {cat.icon}
                </div>
                <span className="font-heading font-700 text-[15px] text-obsidian">{cat.label}</span>
                <div className="flex-1 h-px bg-muslin ml-2" />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <SkillChip key={skill.name} skill={skill} delay={catIdx * 0.07 + sIdx * 0.04} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-12 text-center"
        >
          <p className="text-[11px] font-700 text-driftwood tracking-[0.18em] uppercase mb-5">
            Tools & Platforms
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {tools.map(tool => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.06 }}
                className="text-[12.5px] font-500 text-bark px-4 py-1.5 rounded-full bg-white
                           border border-muslin shadow-sm hover:border-gold-border hover:text-soil
                           transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
