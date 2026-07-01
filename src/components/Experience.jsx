import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiMonitor } from 'react-icons/fi';

const highlights = [
  'Full Stack Developer',
  'Flutter Mobile App Developer',
  'React.js & Tailwind CSS Developer',
  'Django & Node.js Backend Development',
  'REST API Integration',
  'SQL & MongoDB Database Management',
  'Firebase Notification Integration',
  'Razorpay Payment Gateway Integration',
  'Problem Solving & Team Collaboration',
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="py-28 px-6 bg-parchment">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-700 text-gold tracking-[0.18em] uppercase mb-4">— Background</p>
          <h2 className="font-heading font-700 text-[clamp(2rem,4.5vw,3rem)] text-obsidian
                         tracking-tight leading-[1.1]">
            Work & <span className="text-gold">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiBriefcase size={16} className="text-gold" />
              <span className="font-heading font-700 text-[15px] text-obsidian">Work Experience</span>
            </div>

            <div className="bg-white rounded-2xl border border-muslin shadow-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-gold to-soil rounded-t-2xl" />

              <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
                <div>
                  <h4 className="font-heading font-700 text-[17px] text-obsidian">Full Stack Developer</h4>
                  <p className="text-[14px] font-700 text-gold mt-1">CloudRule Pvt Ltd</p>
                </div>
                <span className="text-[11.5px] font-600 text-emerald-700 bg-emerald-50 border
                                 border-emerald-200 px-3 py-1 rounded-full flex-shrink-0">
                  Current
                </span>
              </div>

              <p className="text-[14px] text-bark leading-[1.85]">
                Building modern web and mobile applications — React.js company websites, Flutter-based
                cross-platform apps, and robust Node.js & Django REST backends.
              </p>

              {/* Key areas */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['React.js', 'Flutter', 'Node.js', 'Django', 'Firebase', 'SQL'].map(t => (
                  <span key={t}
                    className="text-[11.5px] font-600 px-2.5 py-1 rounded-md bg-gold-muted
                               border border-gold-border text-gold tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Professional Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiMonitor size={16} className="text-gold" />
              <span className="font-heading font-700 text-[15px] text-obsidian">Professional Highlights</span>
            </div>

            <div className="bg-white rounded-2xl border border-muslin shadow-sm p-7">
              <div className="flex flex-col divide-y divide-muslin">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 14 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.36, delay: 0.18 + i * 0.04 }}
                    className="flex items-center gap-3 py-3 first:pt-0 last:pb-0
                               hover:text-soil transition-colors duration-150 group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0
                                     group-hover:scale-125 transition-transform duration-150" />
                    <span className="text-[13.5px] font-500 text-bark group-hover:text-soil
                                     transition-colors duration-150">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
