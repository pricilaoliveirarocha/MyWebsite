import { GitBranch } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "École 42Rio",
    description:
      "A deep immersion into programming, where I learned both coding logic and teamwork. A challenging project that gave me personal and professional growth.",
    imageUrl: "/images/piscina42.png",
    githubUrl: "https://github.com/PricilaOliveiraRocha/piscina42",
    technologies: (
      <div className="flex items-center gap-x-2">
        <span className="rounded-full px-2 py-0.5 text-xs font-semibold bg-blue-500 text-white">
          C
        </span>
        <span className="rounded-full px-2 py-0.5 text-xs font-semibold bg-green-500 text-white">
          Shell
        </span>
      </div>
    ),
  },
  {
    name: "Flappy Bird",
    description:
      "A simple clone of Flappy Bird built with HTML, CSS, and JavaScript. A fun project to practice programming and design skills.",
    imageUrl: "/images/flappyBirdCopy.png",
    githubUrl: "https://github.com/PricilaOliveiraRocha/flappyBird",
    technologies: (
      <div className="flex items-center gap-x-2">
        <span className="rounded-full px-2 py-0.5 text-xs font-semibold bg-yellow-400 text-white">
          JavaScript
        </span>
        <span className="rounded-full px-2 py-0.5 text-xs font-semibold bg-purple-500 text-white">
          CSS
        </span>
      </div>
    ),
  },
];

function ProjectCard({ name, description, imageUrl, githubUrl, technologies }: Project) {
  return (
    <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-700 divide-y divide-zinc-200 dark:divide-zinc-600 w-[300px] h-[450px] mx-auto transform transition duration-300 hover:-translate-y-2">

      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{name}</h2>
        {technologies}
      </div>

      {/* Description */}
      <div className="p-3 text-sm text-zinc-700 dark:text-zinc-300 flex-1 overflow-hidden">
        {description}
      </div>

      {/* Image */}
      <div className="w-full h-[220px] relative rounded-b-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Logo for ${name}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* GitHub Button */}
      <div className="flex justify-center p-3">
        <a
          href={githubUrl}
          target="_blank"
          className="flex items-center gap-2 py-2 px-4 text-zinc-900 dark:text-white font-medium hover:text-pink-500 transition"
        >
          <GitBranch strokeWidth={1.4} className="size-4" /> GitHub Code
        </a>

      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-8 mt-6 text-center text-5xl max-sm:text-4xl text-zinc-900 dark:text-zinc-100 font-extrabold">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center px-4">
        {projects.map((project) => (
          <ProjectCard key={project.githubUrl} {...project} />
        ))}
      </div>
    </>
  );
}
