"use client";

import {  Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Tambahkan efek scroll: beri background & blur saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-500/30 transition-colors duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/80 shadow backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Image */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Afif Fakhri Logo"
            width={42}
            height={42}
            priority
            className="object-contain rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </a>
          </li>
          <li>
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

      {/* Mobile Menu + Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blur Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 left-0 w-full bg-white dark:bg-gray-900 px-4 pb-4 pt-2 shadow z-50 md:hidden"
            >
              <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
                <li>
                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
