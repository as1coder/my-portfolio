"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center text-white py-20 px-6"
    >
      <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-8 md:space-y-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-4 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg"
        >
          <Mail className="w-6 h-6 text-indigo-400" />
          <span className="text-white text-lg">eagle32gaming@gmail.com</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-4 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg"
        >
          <Phone className="w-6 h-6 text-indigo-400" />
          <span className="text-white text-lg">+91 8421405548</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-4 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg"
        >
          <MapPin className="w-6 h-6 text-indigo-400" />
          <span className="text-white text-lg">Malegaon Nashik, India</span>
        </motion.div>
      </div>

      <motion.a
        href="mailto:eagle32gaming@gmail.com"
        whileHover={{ scale: 1.1 }}
        className="mt-12 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg rounded-full shadow-lg transition-all duration-300"
      >
        Let's Work Together
      </motion.a>
    </motion.section>
  );
}
