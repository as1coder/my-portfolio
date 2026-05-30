"use client";
import React from 'react';
import { motion, useMotionValue } from 'framer-motion';

const projects = [
  {
    title: "Portfolio",
    condition: "Completed",
    description: "A personal portfolio showcasing my projects and skills with animated UI.",
    link: "#",
    tags: ["next.js", "Framer Motion", "TypeWriter"]
  },
  {
    title: "My 2nd portfolio",
    condition: "Completed",
    description: "A personal portfolio showcasing my projects and skills with animated UI.",
    link: "https://portfolio-builder-seven-tau.vercel.app/73K3GvfMB7hDp95Y36bOzJdZ31H2",
    tags: ["Next.js", "Tailwind CSS","own project"]
  },
  {
    title: "Portfolio Builder",
    condition: "Completed",
    description: "A web app to create and customize personal portfolios easily.",
    link: "https://portfolio-builder-seven-tau.vercel.app/",
    tags: ["api", "Node.js", "firebase"]
  },
  {
    title: "A Restaurant demo website",
    condition: "Completed",
    description: "A demo restaurant website with menu, reservations, and contact features.",
    link: "https://restaurant-nine-wheat.vercel.app/",
    tags: ["next.js", "Tailwind", "framer-motion"]
  },
  {
    title: "Todo app",
    condition: "Completed",
    description: "A full stack , simple and intuitive todo app to manage tasks efficiently.",
    link: "https://todo-app-xqcg.vercel.app/",
    tags: ["mongoose", "next.js", "Tailwind"]
  },
  {
    title: "A perfume business website",
    condition: "Completed",
    description: "A E-commerce website for a perfume business with product listings, shopping cart, and checkout features featuring a sleek design.",
    link: "https://aura-two-sand.vercel.app/",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    title: "A tea leaf business website",
    condition: "Completed",
    description: "A E-commerce website for a tea leaf business with smooth user experience and animated UI. Customer can order on WhatsApp.",
    link: "https://queen-tea-mu.vercel.app/",
    tags: ["nextjs", "Tailwind", "framer-motion"]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Custom 3D Tilt Card Component for Desktop + Mobile safe interaction
function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    // Smooth 3D tilt calculations
    x.set(mouseX / width * 25); 
    y.set(-mouseY / height * 25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: y, rotateY: x, transformStyle: "preserve-3d", perspective: 1000 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
      className="group relative flex flex-col justify-between p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-lg backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-colors duration-300 will-change-transform"
    >
      {/* Dynamic Cursor Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--x,0px)_var(--y,0px),rgba(34,211,238,0.07),transparent_50%)] transition-opacity duration-300 pointer-events-none" 
           ref={(el) => {
             if (!el) return;
             el.parentElement.addEventListener('mousemove', (e) => {
               const rect = el.parentElement.getBoundingClientRect();
               el.style.setProperty('--x', `${e.clientX - rect.left}px`);
               el.style.setProperty('--y', `${e.clientY - rect.top}px`);
             });
           }}
      />

      {/* Title & Status Content */}
      <div style={{ transform: "translateZ(25px)" }} className="transition-transform duration-200">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all duration-300">
            {project.title}
          </h3>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 shrink-0">
            {project.condition}
          </span>
        </div>

        <p className="text-sm text-white/80 group-hover:text-white transition-colors duration-300 mb-6">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Tags & CTA Button */}
      <div style={{ transform: "translateZ(15px)" }} className="mt-auto pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-xs text-indigo-300 group-hover:text-cyan-400 group-hover:underline transition-colors duration-300">
          View Project <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsSection() {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      // exact original background classes retained:
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    >
      {/* Fixed: mb-17 replaced with tailwind-standard mb-16 */}
      <h2 className="text-5xl p-2 font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-center">
        My Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}