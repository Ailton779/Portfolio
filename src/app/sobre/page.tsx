import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre | Ailton Júnior",
  description: "Formação, habilidades e idiomas de Ailton Júnior.",
};

// Grupos de habilidades; cada grupo vira um painel na tela
const habilidades = [
  { grupo: "Linguagens", itens: ["JavaScript", "TypeScript", "Python"] },
  { grupo: "Interfaces", itens: ["React", "React Native", "Next.js", "Tailwind CSS"] },
  {
    grupo: "Backend e IA",
    itens: ["FastAPI", "APIs REST", "Gemini API", "Prompts com saída em JSON"],
  },
];

export default function Sobre() {
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
            <Link
              href="/sobre"
              aria-current="page"
              className="chanfro bg-amarelo px-4 py-2 font-bold text-fundo"
            >
              Sobre
            </Link>
            <Link href="/projetos" className="px-4 py-2 text-suave hover:text-ciano">
              Projetos
            </Link>
          </div>
        </nav>

        <div className="flex flex-1 flex-col gap-12 py-12">
          {/* Quem sou */}
          <section className="flex flex-col gap-4">
            <h1 className="chanfro w-fit bg-amarelo px-4 py-1 text-2xl font-bold text-fundo">
              Sobre mim
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed">
              Sou estudante do último semestre de Análise e Desenvolvimento de Sistemas
              no IFCE, campus Boa Viagem, com conclusão prevista para março de 2027.
              Gosto de entender como as coisas funcionam por dentro, por isso procuro
              saber explicar cada parte do que construo.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed">
              Trabalho com JavaScript, TypeScript e Python. Nos projetos da faculdade já
              liderei equipe e atuei no desenvolvimento, e agora estou aprendendo
              Next.js.
            </p>
          </section>

          {/* Habilidades */}
          <section className="flex flex-col gap-4">
            <h2 className="chanfro w-fit bg-amarelo px-4 py-1 text-lg font-bold text-fundo">
              Habilidades
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {habilidades.map((bloco) => (
                <div key={bloco.grupo} className="chanfro bg-ciano/40 p-px">
                  <div className="chanfro h-full bg-painel p-5">
                    <h3 className="mb-3 font-bold text-ciano">{bloco.grupo}</h3>
                    <ul className="flex flex-col gap-1 text-texto">
                      {bloco.itens.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Formação */}
          <section className="flex flex-col gap-4">
            <h2 className="chanfro w-fit bg-amarelo px-4 py-1 text-lg font-bold text-fundo">
              Formação
            </h2>
            <div className="flex flex-col gap-6 border-l-2 border-ciano/50 pl-6">
              <div>
                <p className="font-tecnica text-sm text-ciano">Previsão de conclusão: março de 2027</p>
                <h3 className="text-xl font-bold text-white">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="text-suave">IFCE, campus Boa Viagem (5º semestre, o último)</p>
              </div>
              <div>
                <p className="font-tecnica text-sm text-ciano">Concluído em 2022</p>
                <h3 className="text-xl font-bold text-white">
                  Ensino Médio Técnico em Administração
                </h3>
                <p className="text-suave">EEP Venceslau Vieira Batista</p>
              </div>
            </div>
          </section>

          {/* Idiomas */}
          <section className="flex flex-col gap-4">
            <h2 className="chanfro w-fit bg-amarelo px-4 py-1 text-lg font-bold text-fundo">
              Idiomas
            </h2>
            <ul className="flex flex-wrap gap-2 font-tecnica text-sm">
              <li className="border border-suave/40 px-3 py-1">Português: nativo</li>
              <li className="border border-suave/40 px-3 py-1">Inglês: fluente</li>
              <li className="border border-suave/40 px-3 py-1">Espanhol: intermediário</li>
            </ul>
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
