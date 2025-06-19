import { notFound } from "next/navigation";

type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  content: string;
};

const projects: Project[] = [
  {
    slug: "plantme",
    title: "PlantMe",
    description: "Aplikasi pengenalan tanaman hias berbasis AI.",
    tech: ["React Native", "TensorFlow Lite", "Flask"],
    content: "PlantMe adalah aplikasi mobile yang memungkinkan pengguna mengenali tanaman hias menggunakan kamera dan model AI. Proyek ini dikembangkan dengan TensorFlow Lite untuk klasifikasi gambar dan backend Flask untuk pengelolaan data tanaman.",
  },
  {
    slug: "deeplib",
    title: "DeepLib",
    description: "Platform manajemen kursi & aset kampus.",
    tech: ["React.js", "Tailwind", "Express.js"],
    content: "DeepLib adalah aplikasi web yang membantu fakultas dalam memantau penggunaan kursi dan aset ruang kelas. Dibangun dengan React.js di frontend dan Express.js di backend.",
  },
];

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg mb-6">{project.description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-base leading-relaxed">{project.content}</p>
      </div>
    </main>
  );
}
