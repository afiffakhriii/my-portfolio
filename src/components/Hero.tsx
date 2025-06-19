"use client";

import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-8 lg:px-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <FadeInWhenVisible>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-snug tracking-tight">
          👋 Hi, I’m <span className="text-blue-600">Afif Fakhri</span>
        </h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <p className="text-base sm:text-lg lg:text-xl mb-6 max-w-2xl text-gray-600 dark:text-gray-300">
          I’m a web and mobile app developer passionate about crafting modern user experiences, exploring AI-powered solutions, and turning ideas into products with impact.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white text-sm sm:text-base px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow"
        >
          Contact Me
        </a>
      </FadeInWhenVisible>
    </section>
  );
}
