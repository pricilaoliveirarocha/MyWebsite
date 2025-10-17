"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const path = usePathname(); // Pega o caminho atual da URL
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado que controla se o tema é escuro

  // useEffect roda só uma vez quando o componente é montado
  // Inicializa o tema com base no localStorage ou na preferência do sistema
  useEffect(() => {
    const darkMode =
      localStorage.theme === "dark" || // Se usuário já salvou "dark"
      (!("theme" in localStorage) && // Caso não tenha salvado
        window.matchMedia("(prefers-color-scheme: dark)").matches); // verifica a preferência do sistema

    setIsDarkMode(darkMode); // atualiza o estado
    document.documentElement.classList.toggle("dark", darkMode); // adiciona/remove a classe "dark" no <html>
  }, []);

  // Função chamada ao clicar no botão de tema
  // Alterna entre tema claro e escuro
  const toggleTheme = () => {
    const newMode = !isDarkMode; // inverte o estado
    setIsDarkMode(newMode); // atualiza o estado
    document.documentElement.classList.toggle("dark", newMode); // adiciona/remove classe dark
    localStorage.theme = newMode ? "dark" : "light"; // salva a preferência no navegador
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 dark:text-white hover:text-rosa dark:hover:text-rosa flex flex-col"
        >
          Pricila Oliveira
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Junior Systems Analyst
          </span>
        </Link>

        {/* Navegação */}
        <div className="flex items-center gap-6">
          {/* Links principais */}
          <Link
            href="/projects"
            className={`text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500 transition ${path === "/projects" ? "font-semibold" : ""
              }`}
          >
            Projects
          </Link>
          <Link
            href="/articles"
            className={`text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500 transition ${path.startsWith("/articles") ? "font-semibold" : ""
              }`}
          >
            Articles
          </Link>
          <Link
            href="/about"
            className={`text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500 transition ${path === "/about" ? "font-semibold" : ""
              }`}
          >
            About me
          </Link>

          {/* Botão de tema */}
          <button
            onClick={toggleTheme} // chama a função toggleTheme ao clicar
            className="ml-4 p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
