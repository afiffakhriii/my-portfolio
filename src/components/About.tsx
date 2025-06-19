"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Gambar / Avatar */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 dark:border-blue-400">
            <Image
              src="/images/profile.jpg" 
              alt="Afif Fakhri"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Teks */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I&apos;m a passionate web and mobile developer with a strong focus on building fast,
            responsive, and accessible user interfaces. I specialize in front-end development using
            modern frameworks like <strong>Next.js</strong> and <strong>React</strong>, and I enjoy
            transforming ideas into impactful digital experiences. I&apos;m always eager to learn new
            technologies, explore creative solutions, and contribute to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
}
