import type { Metadata } from "next";
import Link from "next/link";

// Título da aba do navegador e descrição desta página
export const metadata: Metadata = {
  title: "Ailton Júnior | Desenvolvedor de software",
  description: "Portfólio de Ailton Júnior: formação, habilidades e projetos.",
};

// Lista usada para gerar as etiquetas de tecnologia com .map()
const stack = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "React Native",
  "Next.js",
  "Tailwind CSS",
  "FastAPI",
  "Gemini API",
];

export default function Home() {
  return (
    <main className="trilhas min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-6">
        {/* Navegação */}
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-ciano/30 pb-4">
          <Link href="/" className="text-lg font-bold tracking-widest text-amarelo">
            AILTON_JR
          </Link>
          <div className="flex gap-2 text-sm font-medium">
            <Link
              href="/"
              aria-current="page"
              className="chanfro bg-amarelo px-4 py-2 font-bold text-fundo"
            >
              Início
            </Link>
            <Link href="/sobre" className="px-4 py-2 text-suave hover:text-ciano">
              Sobre
            </Link>
            <Link href="/projetos" className="px-4 py-2 text-suave hover:text-ciano">
              Projetos
            </Link>
          </div>
        </nav>

        {/* Apresentação */}
        <section className="flex flex-1 flex-col justify-center gap-6 py-16">
          <p className="w-fit border border-ciano/50 px-3 py-1 font-tecnica text-sm text-ciano">
            <span className="mr-2 inline-block h-2 w-2 bg-ciano align-middle" />
            Aberto a oportunidades
          </p>

          {/* text-shadow vermelho/ciano cria o efeito de "glitch" no título */}
          <h1 className="text-5xl font-bold leading-tight text-white [text-shadow:3px_0_var(--color-alerta),-3px_0_var(--color-ciano)] sm:text-7xl">
            Ailton Júnior
          </h1>
          <p className="text-xl text-ciano sm:text-2xl">
            Desenvolvimento de software e IA aplicada
          </p>
          <p className="max-w-2xl text-lg leading-relaxed">
            Estou concluindo Análise e Desenvolvimento de Sistemas no IFCE e gosto de
            entender como as coisas funcionam por dentro. Construí um aplicativo
            mobile que usa IA generativa para analisar imagens, com backend próprio, e
            agora estudo Next.js para levar essa base para a web.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projetos"
              className="chanfro bg-amarelo px-6 py-3 font-bold text-fundo hover:bg-white"
            >
              Ver projetos
            </Link>
            <Link
              href="/sobre"
              className="chanfro bg-ciano/50 p-px font-bold text-ciano hover:bg-ciano"
            >
              <span className="chanfro block bg-fundo px-6 py-3">Sobre mim</span>
            </Link>
          </div>
        </section>

        {/* Stack */}
        <section className="flex flex-col gap-4 pb-10">
          <h2 className="chanfro w-fit bg-amarelo px-4 py-1 text-lg font-bold text-fundo">
            Stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tecnologia) => (
              <li
                key={tecnologia}
                className="border border-suave/40 px-3 py-1 font-tecnica text-sm"
              >
                {tecnologia}
              </li>
            ))}
          </ul>
        </section>

        {/* Destaque que leva para a página de projetos */}
        <Link href="/projetos" className="group chanfro block bg-ciano/40 p-px hover:bg-ciano">
          <div className="chanfro bg-painel p-6">
            <p className="font-tecnica text-sm text-ciano">Projeto em destaque</p>
            <h3 className="mt-1 text-2xl font-bold text-white">S.O.L.I.D</h3>
            <p className="mt-2 max-w-2xl text-suave">
              App mobile que identifica serpentes da Caatinga a partir de uma foto,
              usando React Native, FastAPI e a API do Gemini.
            </p>
          </div>
        </Link>

        {/* Contato */}
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ciano/30 pt-4 text-sm text-suave">
          <p>Ailton Júnior, estudante do IFCE campus Boa Viagem</p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/Ailton779"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ciano"
            >
              GitHub
            </Link>
            <Link href="mailto:ailtonjunior787@gmail.com" className="hover:text-ciano">
              ailtonjunior787@gmail.com
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
