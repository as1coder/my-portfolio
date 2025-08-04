"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Loader({ onFinish }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowLoader(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      onFinish();  
    }
  }, []);

  return (
    <>
      {showLoader && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-tl from-black via-slate-800 to-black flex items-center justify-center z-50 overflow-hidden "
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.1 }}
          transition={{ delay: 4, duration: 2 }}
          onAnimationComplete={onFinish}
        >
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full  bg-gradient-radial from-transparent via-white/10 to-transparent animate-pulse opacity-10"></div>
          </div>

          <h1 className="text-3xl p-2  text-center md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-10">
            <Typewriter
              options={{
                strings: ['Welcome to my Portfolio'],
                autoStart: true,
                loop: false,
                delay: 75,
              }}
            />
          </h1>
        </motion.div>
      )}
    </>
  );
}
