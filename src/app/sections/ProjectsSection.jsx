// sections/ProjectsSection.jsx

"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills with animated UI.",
    link: "#"
  },
  {
    title: "Notes App",
    description: "A responsive MERN stack Notes app with CRUD operations.",
    link: "https://notesapp-frontend-kappa.vercel.app/"
  },

];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ProjectsSection() {
  return (
    <motion.section id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <h2 className="text-5xl p-2 font-bold mb-17 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        My Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="group relative p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-lg backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            target="_blank"
          >
            <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              {project.title}
            </h3>
            <div>
            <p className="text-white/80 group-hover:text-white transition-colors duration-300">
              {project.description}
            </p>
            </div>
            <div className=" justify-end mr-1 flex text-sm text-indigo-300 group-hover:underline">View Project →</div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
