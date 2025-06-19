"use client";

import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  slug: string;
};

const projects: Project[] = [
  {
    title: "PlantMe",
    description: "Aplikasi pengenalan tanaman hias berbasis AI dengan teknologi image classification.",
    tech: ["React Native", "TensorFlow Lite", "Flask"],
    slug: "plantme",
  },
  {
    title: "DeepLib",
    description: "Platform manajemen kursi & aset kampus berbasis web.",
    tech: ["React.js", "Tailwind", "Express.js"],
    slug: "deeplib",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
          Proyek Saya
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <div className="border dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  Lihat Proyek →
                </Link>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
