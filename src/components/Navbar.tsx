"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow transition-colors">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-white">Afif Fakhri</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-200 font-medium">
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">Tentang</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Proyek</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Kontak</a></li>
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu with Slide Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 shadow"
          >
            <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 font-medium">
              <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Tentang</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Proyek</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Kontak</a></li>
              <li>
                <button
                  onClick={() => {
                    setIsDark(!isDark);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDark ? "Mode Terang" : "Mode Gelap"}</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
