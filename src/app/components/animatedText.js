'use client';
import React, { useState, useEffect } from 'react';

export default function AnimatedText() {
  const sentences = [
    'Aspiring Web Developer',
    'MERN Stack Enthusiast',
    'Cool UI And Responsive Websites'
  ];

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[index];

    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentSentence.length) {
        setText(currentSentence.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentSentence.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentSentence.length) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait 2 sec after typing full line
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % sentences.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, sentences]);

  return (
    <p className="mt-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-opacity duration-500 ease-in-out w-full p-1 text-center">
      {text}
      <span className="ml-1 animate-blink text-white">|</span>

      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </p>
  );
}
