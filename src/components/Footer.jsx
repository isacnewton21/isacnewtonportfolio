import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';

const quickLinks = [
  { label: 'Home',            href: '#home' },
  { label: 'About',           href: '#about' },
  { label: 'Skills',          href: '#skills' },
  { label: 'Projects',        href: '#projects' },
  { label: 'Work Experience', href: '#experience' },
  { label: 'Contact',         href: '#contact' },
];

const socials = [
  { icon: <FiGithub size={16} />,   href: 'https://github.com/isacnewton21', label: 'GitHub' },
  { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/isac-newton-9aa547373', label: 'LinkedIn' },
  { icon: <FiMail size={16} />,     href: 'mailto:isacnewton63@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-parchment border-t border-muslin pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="font-heading font-800 text-[11px] text-white">IN</span>
              </div>
              <span className="font-heading font-700 text-[16px] text-obsidian tracking-tight">Isac Newton</span>
            </div>
            <p className="text-[13.5px] text-bark leading-[1.8] max-w-[260px] mb-6">
              Full Stack & Flutter Developer at CloudRule Pvt Ltd — building modern web and mobile applications.
            </p>
            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 bg-white border border-muslin rounded-xl flex items-center
                             justify-center text-bark hover:text-gold hover:border-gold-border
                             shadow-sm transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-700 text-[12px] text-obsidian uppercase tracking-[0.12em] mb-5">
              Quick links
            </h4>
            <ul className="list-none flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[13.5px] text-bark hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-700 text-[12px] text-obsidian uppercase tracking-[0.12em] mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:isacnewton63@gmail.com"
                className="flex items-center gap-2.5 text-[13px] text-bark hover:text-gold
                           transition-colors duration-200">
                <FiMail size={13} /> isacnewton63@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-muslin mb-7" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-driftwood">
            © {year} Isac Newton. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[12px] text-driftwood">
            Built with <FiHeart size={11} className="text-rose-400" /> using React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
