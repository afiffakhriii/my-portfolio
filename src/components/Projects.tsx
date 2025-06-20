"use client";

import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Leaf, BookOpen, Glasses } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  slug: string;
  icon: LucideIcon;
  github: string;
};

const projects: Project[] = [
  {
    title: "PlantMe Ornamental Plant Identification App",
    description:
      "A deep learning based mobile app to classify 10 ornamental plant species and provide care guidance using CNN model.",
    tech: ["Kotlin", "CNN", "Firebase", "Android"],
    slug: "plantme",
    icon: Leaf,
    github: "https://github.com/afiffakhriii/Plantme-Aplikasi-Mobile-Identifikasi-Tanaman-Hias-Menggunakan-Algoritma-Convolutional-Neural-Network",
  },
  {
    title: "Kanami Japanese Letter Learning App",
    description:
      "An educational mobile game built with Unity to help users learn Hiragana and Katakana through interactive quizzes and animations.",
    tech: ["Unity", "C#", "2D Game", "UI/UX"],
    slug: "kanami",
    icon: BookOpen,
    github: "https://github.com/afiffakhriii/Kanami",
  },
  {
    title: "OPTIX Virtual Try-On Glasses App",
    description:
      "A Kotlin-based Android app that lets users virtually try on glasses using camera overlays and face tracking technology.",
    tech: ["Kotlin", "Jetpack Compose", "Android"],
    slug: "optix",
    icon: Glasses,
    github: "https://github.com/Optix-Project/OPTIX",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
          My Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col">
                <div className="flex justify-center items-center py-4">
                  <project.icon
                    size={48}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-center w-full"
                    >
                      View Project
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 dark:hover:bg-blue-950 transition text-center w-full"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
