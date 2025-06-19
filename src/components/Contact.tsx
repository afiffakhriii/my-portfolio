"use client";

import { Mail, Instagram, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Connect With Me</h2>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
          I&apos;m always open to collaboration or just a friendly chat. Reach me through:
        </p>

        {/* Top row: LinkedIn, GitHub, WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <a
            href="https://linkedin.com/in/afifffakhri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Linkedin className="text-gray-500 dark:text-gray-400" size={24} />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              linkedin.com/in/afifffakhri
            </span>
          </a>

          <a
            href="https://github.com/afiffakhriii"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Github className="text-gray-500 dark:text-gray-400" size={24} />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              github.com/afiffakhriii
            </span>
          </a>

          <a
            href="https://wa.me/6281280039510"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Phone className="text-gray-500 dark:text-gray-400" size={24} />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              +62 812-8003-9510
            </span>
          </a>
        </div>

        {/* Bottom row: Email, Instagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="mailto:afiffakhri.ofcl@gmail.com"
            className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <Mail className="text-gray-500 dark:text-gray-400" size={24} />
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
            <Instagram className="text-gray-500 dark:text-gray-400" size={24} />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              @afifffakhri
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
