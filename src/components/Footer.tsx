"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-0 py-8 px-6 bg-gray-900 border-t border-gray-500/50 dark:bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Afif Fakhri. All rights reserved.
        </p>

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Afif Fakhri Logo"
            width={36}
            height={36}
            priority
            className="object-contain rounded-full"
          />
        </div>
      </div>
    </footer>
  );
}
