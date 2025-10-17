import { SiGithub, SiLinkedin, SiInstagram } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { ReactNode } from "react";

interface LinkItem {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: LinkItem[] = [
  {
    name: "LinkedIn",
    description: "Follow my professional journey",
    url: "https://linkedin.com/in/PricilaOliveiraRocha",
    icon: <SiLinkedin className="w-10 h-10 fill-[#0077B5] dark:fill-zinc-200" />,
  },
  {
    name: "GitHub",
    description: "Check out my projects",
    url: "https://github.com/PricilaOliveiraRocha",
    icon: <SiGithub className="w-10 h-10 text-zinc-900 dark:text-zinc-200" />,
  },
  {
    name: "Instagram",
    description: "Follow me on Instagram",
    url: "https://instagram.com/PricilaOliveiraRocha",
    icon: <SiInstagram className="w-10 h-10 fill-[#FF0000] dark:fill-zinc-200" />,
  },
];

const ExternalLink = ({ name, description, url, icon }: LinkItem) => (
  <a
    href={url}
    target="_blank"
    aria-label={`Open ${name} in a new tab`}
    className="group flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-center">{name}</h3>
    {description && (
      <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm text-center">{description}</p>
    )}
    <ArrowUpRight
      strokeWidth={1.4}
      className="mt-4 text-zinc-800 dark:text-zinc-200 transition-transform group-hover:translate-x-1"
    />
  </a>
);

export default function HomePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <header className="text-center flex flex-col items-center gap-6 mt-16">
        <h1 className="text-7xl font-extrabold max-sm:text-6xl bg-clip-text typewriter-soft text-zinc-900 dark:text-zinc-100">
          <span className="text-pink-500">Pricila</span> Oliveira Rocha
        </h1>

        <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          I am a native of Rio de Janeiro, graduated in Systems Analysis and Development. 
          I grew up in the outskirts of Rio de Janeiro and, through great effort and determination, 
          I graduated and developed myself independently in the field of technology. 
          I have studied English, French, and Spanish on my own. 
          Currently, I am fluent in English and specializing in PHP and databases, 
          with two years of experience as a web development intern.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <a
            href="/Pricila-CV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-300 transition transform hover:-translate-y-0.5"
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="mailto:pricilaoliveiras21@gmail.com"
            className="flex items-center gap-2 px-6 py-1 border border-zinc-900 dark:border-zinc-100 rounded-xl font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition transform hover:-translate-y-0.5"
          >
            <Mail size={18} /> Contact me
          </a>
        </div>
      </header>

      {/* External Links Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12r">
        {externalLinks.map((link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </section>
    </div>
  );
}
