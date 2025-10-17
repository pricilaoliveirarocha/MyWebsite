import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
// import { Analytics } from "@vercel/analytics/next";

// Metadados da página
export const metadata: Metadata = {
  title: "Pricila Oliveira",
  description: "Pricila Oliveira - Personal Website & Blog",
};

// Configuração da fonte Karla via Google Fonts
const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

// Importa o Header dinamicamente, desabilitando SSR
const Header = dynamic(() => import("./Header"), { ssr: false });

// Componente principal de layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen" suppressHydrationWarning>
      <head>
        {/* Script para inicializar o tema (claro/escuro) antes do carregamento */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${karla.className} min-h-full w-full`}>
        {/* Header fixo no topo */}
        <Header />

        {/* Conteúdo principal */}
        <main className="max-w-7xl mx-auto px-36 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
