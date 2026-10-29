import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Projetos | Ailton Júnior",
  description: "Projetos de Ailton Júnior: S.O.L.I.D e este portfólio.",
};

// Etapas do caminho que a foto percorre no S.O.L.I.D (a "trilha de rede")
const trilha = [
  { nome: "App", detalhe: "React Native" },
  { nome: "Backend", detalhe: "FastAPI" },
  { nome: "Modelo", detalhe: "Gemini API" },
  { nome: "Resposta", detalhe: "JSON estruturado" },
  { nome: "Tela", detalhe: "resultado organizado" },
];

const tecnologiasSolid = ["React Native", "Expo", "TypeScript", "FastAPI", "Python", "Gemini API"];

export default function Projetos() {
  return (
    <main className="trilhas min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-6">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-ciano/30 pb-4">
          <Link href="/" className="text-lg font-bold tracking-widest text-amarelo">
            AILTON_JR
          </Link>
          <div className="flex gap-2 text-sm font-medium">
            <Link href="/" className="px-4 py-2 text-suave hover:text-ciano">
              Início
            </Link>
            <Link href="/sobre" className="px-4 py-2 text-suave hover:text-ciano">
              Sobre
            </Link>
            <Link
              href="/projetos"
              aria-current="page"
              className="chanfro bg-amarelo px-4 py-2 font-bold text-fundo"
            >
              Projetos
            </Link>
          </div>
        </nav>

        <div className="flex flex-1 flex-col gap-12 py-12">
          <h1 className="chanfro w-fit bg-amarelo px-4 py-1 text-2xl font-bold text-fundo">
            Projetos
          </h1>

          {/* Projeto 1: S.O.L.I.D */}
          <section className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-bold text-white [text-shadow:2px_0_var(--color-alerta),-2px_0_var(--color-ciano)]">
                S.O.L.I.D
              </h2>
              <p className="mt-1 font-tecnica text-sm text-ciano">
                Sistema Óptico de Identificação e Localização de Serpentes no Interior do
                Domínio Semiárido
              </p>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed">
              App mobile para identificação de serpentes da Caatinga. A pessoa tira uma
              foto, o backend envia a imagem ao Gemini com um prompt que exige resposta
              em JSON, e o app organiza os campos retornados na tela. Projeto em equipe
              da faculdade, no qual liderei o grupo e atuei no desenvolvimento.
            </p>

            {/* Trilha: App -> Backend -> Modelo -> Resposta -> Tela */}
            <div className="flex flex-col items-stretch md:flex-row md:items-center">
              {trilha.map((etapa, i) => (
                <Fragment key={etapa.nome}>
                  <div className="chanfro bg-ciano/50 p-px md:flex-none">
                    <div className="chanfro bg-painel px-4 py-3">
                      <p className="font-bold text-white">{etapa.nome}</p>
                      <p className="font-tecnica text-sm text-ciano">{etapa.detalhe}</p>
                    </div>
                  </div>
                  {i < trilha.length - 1 && (
                    <div className="pulso mx-auto h-6 w-px md:mx-0 md:h-px md:w-auto md:flex-1" />
                  )}
                </Fragment>
              ))}
            </div>

            <ul className="flex flex-wrap gap-2">
              {tecnologiasSolid.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="border border-suave/40 px-3 py-1 font-tecnica text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>

            <Link
              href="https://github.com/Ailton779/S.O.L.I.D"
              target="_blank"
              rel="noopener noreferrer"
              className="chanfro w-fit bg-amarelo px-6 py-3 font-bold text-fundo hover:bg-white"
            >
              Ver repositório
            </Link>
          </section>

          {/* Projeto 2: este portfólio */}
          <section className="chanfro bg-ciano/40 p-px">
            <div className="chanfro flex flex-col gap-3 bg-painel p-6">
              <h2 className="text-2xl font-bold text-white">Este portfólio</h2>
              <p className="max-w-2xl text-suave">
                Feito na disciplina de PWII com Next.js (App Router) e Tailwind CSS,
                com rotas estáticas, página 404 personalizada, metadata por página e
                deploy na Vercel.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="border border-suave/40 px-3 py-1 font-tecnica text-sm">Next.js</li>
                <li className="border border-suave/40 px-3 py-1 font-tecnica text-sm">TypeScript</li>
                <li className="border border-suave/40 px-3 py-1 font-tecnica text-sm">Tailwind CSS</li>
                <li className="border border-suave/40 px-3 py-1 font-tecnica text-sm">Vercel</li>
              </ul>
            </div>
          </section>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-ciano/30 pt-4 text-sm text-suave">
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
