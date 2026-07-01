import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiBriefcase, FiBook } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-90px' });

  const infoRows = [
    { label: 'Role',    value: 'Full Stack & Flutter Developer' },
    { label: 'Company', value: 'CloudRule Pvt Ltd',              highlight: true },
    { label: 'Degree',  value: 'B.E. CS & Design' },
    { label: 'Email',   value: 'isacnewton63@gmail.com' },
  ];

  const highlights = [
    { icon: <FiBriefcase size={14} />, label: 'Currently working at CloudRule Pvt Ltd' },
    { icon: <FiBook size={14} />,      label: 'B.E. Computer Science & Design' },

  ];

  return (
    <section id="about" ref={ref} className="py-28 px-6 bg-linen">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Info card ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl border border-muslin shadow-sm p-9 relative overflow-hidden">
              {/* Gold top bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-gold to-soil rounded-t-2xl" />

              {/* Monogram */}
              <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center mb-6
                              shadow-sm">
                <span className="font-heading font-800 text-xl text-white">IN</span>
              </div>

              <h3 className="font-heading font-700 text-[18px] text-obsidian mb-1">Isac Newton</h3>
              <p className="text-[13px] font-semibold text-gold mb-7 tracking-wide">
                Full Stack & Flutter Developer — CloudRule Pvt Ltd
              </p>

              {/* Info rows */}
              <div className="divide-y divide-muslin">
                {infoRows.map(item => (
                  <div key={item.label} className="flex justify-between items-center py-3">
                    <span className="text-[11.5px] font-semibold text-driftwood tracking-wider uppercase">
                      {item.label}
                    </span>
                    <span className={`text-[13px] ${item.highlight ? 'text-soil font-700' : 'text-bark font-400'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[11px] font-700 text-gold tracking-[0.18em] uppercase mb-4">
              — About Me
            </p>
            <h2 className="font-heading font-700 text-[clamp(2rem,4.5vw,3rem)] text-obsidian
                           tracking-tight leading-[1.1] mb-8">
              Crafting Digital<br />
              <span className="text-gold">Experiences</span>
            </h2>

            <p className="text-[15px] text-bark leading-[1.9] mb-5">
              I'm a{' '}
              <span className="text-obsidian font-600">Full Stack Developer</span>{' '}
              currently working at{' '}
              <span className="text-soil font-700">CloudRule Pvt Ltd</span>, building modern,
              performant web and mobile products from end to end.
            </p>
            <p className="text-[15px] text-bark leading-[1.9] mb-9">
              I'm completed a{' '}
              <span className="text-obsidian font-600">B.E. in Computer Science and Design</span>{' '}
              and continuously sharpen my craft across React UIs, Django/Node backends, and Flutter apps.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-col gap-3 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.09 }}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-muslin
                             shadow-sm hover:border-gold-border hover:shadow-md transition-all duration-200
                             cursor-default group"
                >
                  <span className="text-gold flex-shrink-0">{h.icon}</span>
                  <span className="text-[13.5px] font-500 text-bark group-hover:text-soil transition-colors">{h.label}</span>
                  <FiArrowRight size={12} className="text-muslin ml-auto group-hover:text-driftwood transition-colors" />
                </motion.div>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-soil text-parchment
                         text-[13.5px] font-600 tracking-wide hover:bg-obsidian transition-colors
                         duration-200 shadow-sm">
              Get in Touch <FiArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
