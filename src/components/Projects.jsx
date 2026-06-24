import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'CloudRule Website',
    role: 'Full Stack Developer',
    status: 'Completed',
    statusClass: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    dotClass: 'bg-emerald-500',
    description: 'Developed a modern and responsive company website for CloudRule Pvt Ltd showcasing business services with clean, professional UI and optimised performance.',
    tech: ['React.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Home Service App',
    role: 'Full Stack & Flutter Developer',
    status: 'In Development',
    statusClass: 'text-amber-700 bg-amber-50 border-amber-200',
    dotClass: 'bg-amber-500',
    description: 'A service marketplace platform connecting customers with trusted service providers — with booking management, real-time Firebase notifications, and user authentication.',
    tech: ['Flutter', 'Node.js', 'Express.js', 'SQL', 'Firebase'],
  },
  {
    id: 3,
    title: 'Royal Seafoods App',
    role: 'Full Stack & Flutter Developer',
    status: 'Completed',
    statusClass: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    dotClass: 'bg-emerald-500',
    description: 'A seafood ordering and delivery application enabling customers to browse, order, pay online via Razorpay, and track purchases in real-time.',
    tech: ['Flutter', 'Django', 'SQL', 'Firebase', 'Razorpay'],
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-muslin shadow-sm p-8 relative overflow-hidden
                 hover:border-stone-300 hover:shadow-md transition-all duration-300 group
                 flex flex-col"
    >
      {/* Hover top bar */}
      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-gold to-soil
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Header */}
      <div className="flex justify-between items-start gap-4 mb-5 flex-wrap">
        <div>
          <h3 className="font-heading font-700 text-[17px] text-obsidian mb-0.5">{project.title}</h3>
          <span className="text-[12px] font-500 text-driftwood">{project.role}</span>
        </div>
        <span className={`inline-flex items-center gap-1.5 text-[11.5px] font-600 px-3 py-1
                          rounded-full border ${project.statusClass} flex-shrink-0`}>
          <span className={`w-1.5 h-1.5 rounded-full ${project.dotClass}`} />
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-[14px] text-bark leading-[1.8] mb-5 flex-1">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t}
            className="text-[11.5px] font-600 px-2.5 py-1 rounded-md bg-gold-muted
                       border border-gold-border text-gold tracking-wide">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="py-28 px-6 bg-linen">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-700 text-gold tracking-[0.18em] uppercase mb-4">— My Work</p>
          <h2 className="font-heading font-700 text-[clamp(2rem,4.5vw,3rem)] text-obsidian
                         tracking-tight leading-[1.1]">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="text-[15px] text-bark max-w-md mx-auto mt-4 leading-[1.8]">
            Real-world applications built with a focus on performance and user experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

      </div>
    </section>
  );
};

export default Projects;
