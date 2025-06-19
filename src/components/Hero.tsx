"use client";

import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <FadeInWhenVisible>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight sm:leading-tight lg:leading-snug">
          Hai, saya <span className="text-blue-600">Afif Fakhri</span>
        </h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <p className="text-base sm:text-lg lg:text-xl mb-6 max-w-md sm:max-w-xl">
          Saya seorang developer yang tertarik pada pengembangan web modern, AI, dan teknologi kreatif.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <a
          href="#contact"
          className="bg-blue-600 text-white text-sm sm:text-base px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Hubungi Saya
        </a>
      </FadeInWhenVisible>
    </section>
  );
}
