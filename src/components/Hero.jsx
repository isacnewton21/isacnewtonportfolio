import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiMail } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'Flutter Developer',
  'React.js Developer',
  'Django Developer',
  'Backend Developer',
];

const useTypewriter = (words, speed = 78, pause = 2400) => {
  const [text, setText]           = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const cur   = words[wordIdx];
    const delay = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (!deleting && charIdx < cur.length) {
        setText(cur.slice(0, charIdx + 1)); setCharIdx(c => c + 1);
      } else if (deleting && charIdx > 0) {
        setText(cur.slice(0, charIdx - 1)); setCharIdx(c => c - 1);
      } else if (!deleting && charIdx === cur.length) {
        setTimeout(() => setDeleting(true), pause);
      } else if (deleting && charIdx === 0) {
        setDeleting(false); setWordIdx(i => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
};

const Hero = () => {
  const typedText = useTypewriter(roles);
  const stats = [
    { num: '3+',  label: 'Projects Built' },
    { num: '5+',  label: 'Technologies' },
    { num: 'B.E', label: 'CS & Design' },
  ];

  return (
    <section
      id="home"
      className="dot-grid min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden"
    >
      {/* Warm glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[640px] h-[640px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgb(192 160 96 / 0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div>
            {/* Company badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-800 text-obsidian tracking-tight leading-[1.06]
                         text-[clamp(2.8rem,6vw,5.2rem)] mb-3"
            >
              Isac Newton
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="h-9 flex items-center mb-7"
            >
              <span className="text-[clamp(1rem,2.5vw,1.3rem)] font-medium text-bark tracking-tight">
                {typedText}<span className="cursor-blink" />
              </span>
            </motion.div>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              style={{ transformOrigin: 'left' }}
              className="w-10 h-0.5 bg-gold rounded-full mb-7"
            />

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-[15px] text-bark leading-[1.85] max-w-[480px] mb-10"
            >
              Building modern, scalable web and mobile applications at{' '}
              <span className="text-soil font-semibold">CloudRule Pvt Ltd</span>{' '}
              using React, Flutter, Django, and Node.js.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-soil text-parchment
                           text-[13.5px] font-semibold tracking-wide hover:bg-obsidian
                           transition-colors duration-200 shadow-sm">
                View Projects <FiArrowRight size={14} />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muslin
                           text-[13.5px] font-semibold text-bark hover:border-driftwood hover:text-soil
                           transition-all duration-200 bg-white shadow-sm">
                <FiMail size={14} /> Contact Me
              </a>
              {/* Resume button — uncomment after adding /public/resume.pdf
              <a href="/resume.pdf" download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muslin
                           text-[13.5px] font-semibold text-bark hover:border-driftwood hover:text-soil
                           transition-all duration-200 bg-white shadow-sm">
                <FiDownload size={14} /> Resume
              </a>
              */}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex gap-12 mt-14 pt-10 border-t border-muslin"
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="font-heading font-800 text-[2rem] text-soil tracking-tight leading-none mb-1">
                    {s.num}
                  </div>
                  <div className="text-[11px] font-semibold text-driftwood tracking-widest uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-5 w-[288px] bg-white rounded-2xl border border-muslin
                       shadow-sm p-7"
          >
            {/* Chrome dots */}
            <div className="flex gap-1.5">
              {['bg-red-300', 'bg-amber-300', 'bg-green-300'].map((c, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
              ))}
            </div>

            {/* Code */}
            <pre className="font-mono text-[11.5px] leading-[1.75] text-bark m-0">
              <span className="text-driftwood">{'// developer.json'}</span>{'\n'}
              <span className="text-gold">{'{'}</span>{'\n'}
              {'  '}<span className="text-soil">name</span>{': '}
              <span className="text-green-700">"Isac Newton"</span>{',\n'}
              {'  '}<span className="text-soil">role</span>{': '}
              <span className="text-green-700">"Full Stack"</span>{',\n'}
              {'  '}<span className="text-soil">company</span>{': '}
              <span className="text-green-700">"CloudRule"</span>{',\n'}
              {'  '}<span className="text-soil">stack</span>{': [\n'}
              {'    '}<span className="text-green-700">"React"</span>{', '}
              <span className="text-green-700">"Flutter"</span>{',\n'}
              {'    '}<span className="text-green-700">"Django"</span>{', '}
              <span className="text-green-700">"Node"</span>{'\n'}
              {'  ],\n'}
              {'  '}<span className="text-soil">status</span>{': '}
              <span className="text-gold">"employed"</span>{'\n'}
              <span className="text-gold">{'}'}</span>
            </pre>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-muslin">
              {['React', 'Flutter', 'Django', 'Node.js'].map(t => (
                <span key={t}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gold-muted
                             border border-gold-border text-gold tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
};

export default Hero;
