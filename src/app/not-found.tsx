import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Sinal perdido",
  description: "Página não encontrada.",
};

// O Next.js mostra este arquivo sempre que a rota digitada não existe
export default function NotFound() {
  return (
    <main className="trilhas min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-6 px-6">
        <p className="border border-alerta/60 px-3 py-1 font-tecnica text-sm text-alerta">
          Erro 404
        </p>
        <h1 className="text-5xl font-bold text-white [text-shadow:3px_0_var(--color-alerta),-3px_0_var(--color-ciano)] sm:text-7xl">
          Sinal perdido
        </h1>
        <p className="max-w-xl text-lg text-suave">
          Essa rota não existe na rede. O endereço pode estar errado ou a página foi
          movida.
        </p>
        <Link
          href="/"
          className="chanfro bg-amarelo px-6 py-3 font-bold text-fundo hover:bg-white"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
