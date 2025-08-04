"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"
];

export default function AboutSection() {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center text-white py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onViewportEnter={() => setStartTyping(true)}
    >
      <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        About Me
      </h2>
      <p className="max-w-3xl text-center text-lg text-white/80 mb-10">
        {startTyping && (
          <Typewriter
            words={["I'm Rehan Raza, a passionate Full Stack Developer who loves crafting interactive and responsive web applications. With a strong focus on clean UI/UX, I aim to build products that provide delightful user experiences."]}
            typeSpeed={30}
            deleteSpeed={0}
            delaySpeed={1000}
            loop={1}
            cursor
            cursorStyle="|"
          />
        )}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
