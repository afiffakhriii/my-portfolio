"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-0 py-8 px-6 bg-gray-900 border-t border-gray-500/50 dark:bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Afif Fakhri. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          <a
            href="mailto:afiffakhri.ofcl@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/afiffakhriii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/afif-fakhri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
