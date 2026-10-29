import type { Metadata } from "next";
import { Chakra_Petch, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

// next/font baixa a fonte no build e expõe como variável CSS (usada no globals.css)
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--fonte-chakra",
});

const mono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--fonte-mono",
});

// Metadata padrão do site (cada página sobrescreve o título com a sua)
export const metadata: Metadata = {
  title: "Ailton Júnior",
  description: "Portfólio de Ailton Júnior",
};

// O layout envolve todas as páginas: aqui ficam só o <html>, o <body> e as fontes
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${chakra.variable} ${mono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
