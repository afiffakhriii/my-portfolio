import { notFound } from "next/navigation";
import { Leaf, BookOpen, Glasses } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  description: string;
  details: string[];
  tech: string[];
  github: string;
  icon: React.ReactNode;
};

// Data project konsisten dengan Projects.tsx
const projects: Project[] = [
  {
    slug: "plantme",
    title: "PlantMe Ornamental Plant Identification App",
    description:
      "A deep learning based mobile app to classify 10 ornamental plant species and provide care guidance using CNN model.",
    details: [
      "Built using Kotlin for native Android development.",
      "Trained CNN model to recognize 10 ornamental plant classes.",
      "Integrated Firebase for authentication and cloud data storage.",
    ],
    tech: ["Kotlin", "CNN", "Firebase", "Android"],
    github:
      "https://github.com/afiffakhriii/Plantme-Aplikasi-Mobile-Identifikasi-Tanaman-Hias-Menggunakan-Algoritma-Convolutional-Neural-Network",
    icon: <Leaf size={40} className="text-blue-600 dark:text-blue-400" />,
  },
  {
    slug: "kanami",
    title: "Kanami Japanese Letter Learning App",
    description:
      "An educational mobile game built with Unity to help users learn Hiragana and Katakana through interactive quizzes and animations.",
    details: [
      "Developed in Unity using C# and 2D game assets.",
      "Included 25 quizzes and fun animations to support memorization.",
      "Optimized for user-friendly UI/UX and touch interaction.",
    ],
    tech: ["Unity", "C#", "2D Game", "UI/UX"],
    github: "https://github.com/afiffakhriii/Kanami",
    icon: <BookOpen size={40} className="text-blue-600 dark:text-blue-400" />,
  },
  {
    slug: "optix",
    title: "OPTIX Virtual Try-On Glasses App",
    description:
      "A Kotlin-based Android app that lets users virtually try on glasses using camera overlays and face tracking technology.",
    details: [
      "Built with Jetpack Compose and CameraX for live preview.",
      "Overlays glasses models onto user’s face in real-time.",
      "Designed intuitive interface and smooth UX animations.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Android"],
    github: "https://github.com/Optix-Project/OPTIX",
    icon: <Glasses size={40} className="text-blue-600 dark:text-blue-400" />,
  },
];

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen px-4 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          {project.icon}
          <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300">{project.description}</p>

        <ul className="list-disc list-inside space-y-2 text-base pl-4">
          {project.details.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            🔗 View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

