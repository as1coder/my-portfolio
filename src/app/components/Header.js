"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full px-8 py-4 backdrop-blur-md bg-white/10 border-b border-white/20 text-white flex justify-between items-center fixed top-0 z-50">
      <h2 className="text-3xl font-extrabold tracking-tight font-sans">
        Rehan<span className="text-indigo-400">'s</span> Portfolio
      </h2>

      <nav className="hidden md:flex space-x-8 text-lg">
        {["Profile", "about", "projects", "contact"].map((id, idx) => (
          <button key={idx} onClick={() => handleScroll(id)} className="relative group">
            <span className="hover:text-indigo-400 transition-colors duration-300 capitalize">{id}</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full right-0 w-full backdrop-blur-md bg-white/10 flex flex-col items-center py-6 space-y-4 md:hidden z-40 shadow-lg border-b border-white/10"
          >
            {["Profile", "about", "projects", "contact"].map((id, idx) => (
              <button
                key={idx}
                onClick={() => handleScroll(id)}
                className="text-xl text-white hover:text-indigo-400 transition-all duration-300 transform hover:scale-105"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
