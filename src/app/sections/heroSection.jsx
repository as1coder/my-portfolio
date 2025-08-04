"use client";
import React from 'react';
import AnimatedText from '../components/animatedText';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black flex flex-col items-center justify-center text-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <img
          src="profile.jpg"
          alt="Rehan Raza"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500 shadow-xl object-cover hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="text-center">
        <h1 className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          Rehan Raza
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 md:mt-6">
        <AnimatedText />
      </motion.div>

      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-full bg-gradient-radial from-transparent via-white/10 to-transparent animate-pulse opacity-10"></div>
      </div>

      <div className="absolute bottom-10 flex gap-2 items-center text-white/70 animate-pulse cursor-pointer" onClick={() => handleScroll('about')}>
        Scroll Down <ArrowDown className="w-5 h-5" />
      </div>
    </motion.section>
  );
}
