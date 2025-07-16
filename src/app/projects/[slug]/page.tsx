import { notFound } from "next/navigation";
import ProjectHero from "@/components/ProjectHero";
import ProjectGallery from "@/components/ProjectGallery";

type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  images: {
    src: string;
    caption: string;
  }[];
  github: string;
};

const projects: Project[] = [
  {
    slug: "plantme",
    title: "PlantMe",
    description: "AI-powered mobile app for identifying ornamental plants using CNN.",
    tech: ["Kotlin", "TensorFlow Lite", "Firebase"],
    images: [
      {
        src: "/images/plantme1.png",
        caption: "Halaman pembuka aplikasi PlantMe yang memperkenalkan fitur utama.",
      },
      {
        src: "/images/plantme2.png",
        caption: "Ambil gambar tanaman untuk identifikasi otomatis oleh AI.",
      },
      {
        src: "/images/plantme3.png",
        caption: "Tampilan hasil identifikasi dan informasi detail tanaman.",
      },
      {
        src: "/images/plantme4.png",
        caption: "Tips perawatan tanaman hias yang disesuaikan dengan jenisnya.",
      },
    ],
    github: "https://github.com/afiffakhriii/plantme",
  },
  {
    slug: "kanami",
    title: "Kanami",
    description: "Game edukasi belajar huruf Jepang (Hiragana & Katakana) dengan Unity.",
    tech: ["Unity", "C#", "2D Game"],
    images: [
      {
        src: "/images/kanami1.png",
        caption: "Tampilan awal game Kanami dengan antarmuka interaktif.",
      },
      {
        src: "/images/kanami2.png",
        caption: "Pilihan mode permainan untuk belajar Hiragana & Katakana.",
      },
      {
        src: "/images/kanami3.png",
        caption: "Contoh soal dengan ilustrasi karakter Jepang.",
      },
      {
        src: "/images/kanami4.png",
        caption: "Halaman skor dan pencapaian pengguna setelah menyelesaikan soal.",
      },
    ],
    github: "https://github.com/afiffakhriii/Kanami",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Fullscreen Hero */}
      <ProjectHero
        title={project.title}
        description={project.description}
        tech={project.tech}
        image={project.images[0].src}
        github={project.github}
      />

      {/* Image Gallery with Descriptions */}
      <section
        id="screenshots"
        className="max-w-screen-xl mx-auto px-4 sm:px-8 pb-24 mt-32"
      >
        <ProjectGallery images={project.images} alt={project.title} />
      </section>
    </div>
  );
}
