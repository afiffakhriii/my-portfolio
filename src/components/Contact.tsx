"use client";

import { Mail, Instagram, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Connect With Me</h2>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
          I&apos;m always open to collaboration or just a friendly chat. Reach me
          through:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/afif-fakhri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Linkedin size={24} className="text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              linkedin.com/in/afif-fakhri
            </span>
          </a>
          <a
            href="https://github.com/afiffakhriii"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Github size={24} className="text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              github.com/afiffakhriii
            </span>
          </a>
          <a
            href="https://wa.me/6281280039510?text=Hai%2C%20saya%20tertarik%20dengan%20portofolio%20Anda.%20Bisa%20kita%20diskusikan%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Phone size={24} className="text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              +62 812-8003-9510
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="mailto:afiffakhri.ofcl@gmail.com"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Mail size={24} className="text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              afiffakhri.ofcl@gmail.com
            </span>
          </a>
          <a
            href="https://instagram.com/afifffakhri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Instagram size={24} className="text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              @afifffakhri
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}