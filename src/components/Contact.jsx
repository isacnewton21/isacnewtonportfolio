import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const contactItems = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'isacnewton63@gmail.com',
    href: 'mailto:isacnewton63@gmail.com',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'isac-newton',
    href: 'https://www.linkedin.com/in/isac-newton-9aa547373',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'isacnewton21',
    href: 'https://github.com/isacnewton21',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-linen">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-700 text-gold tracking-[0.18em] uppercase mb-4">— Let's Connect</p>
          <h2 className="font-heading font-700 text-[clamp(2rem,4.5vw,3rem)] text-obsidian
                         tracking-tight leading-[1.1]">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-[15px] text-bark max-w-sm mx-auto mt-4 leading-[1.8]">
            Reach out through any of the channels below — connect.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-muslin shadow-sm p-6
                         hover:border-gold-border hover:shadow-md transition-all duration-250
                         flex items-start gap-5 no-underline relative overflow-hidden"
            >
              {/* Hover bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold to-soil
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold-muted border border-gold-border flex-shrink-0
                              flex items-center justify-center text-gold
                              group-hover:bg-soil group-hover:border-soil group-hover:text-parchment
                              transition-all duration-250">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[10.5px] font-700 text-driftwood tracking-widest uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-[14px] font-600 text-obsidian group-hover:text-gold transition-colors
                              duration-200 truncate mb-1">
                  {item.value}
                </p>
                <p className="text-[12px] text-driftwood leading-snug">{item.sub}</p>
              </div>

              {/* Arrow */}
              <FiArrowUpRight
                size={16}
                className="text-muslin group-hover:text-gold group-hover:-translate-y-0.5
                           group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-1"
              />
            </motion.a>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default Contact;
