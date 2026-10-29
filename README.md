# Portfólio pessoal

Portfólio pessoal de Ailton Júnior, estudante de Análise e Desenvolvimento de Sistemas no IFCE (campus Boa Viagem). Feito como Prática 03 da disciplina de PWII, com Next.js (App Router) e Tailwind CSS.

O visual é inspirado na interface do Cyberpunk 2077: fundo escuro, cores amarelo e ciano, painéis com cantos cortados e trilhas de circuito/rede ao fundo. O conteúdo é profissional: formação, habilidades e projetos.

**Site:** 

## O que tem no site

| Rota | O que mostra |
| --- | --- |
| `/` | Apresentação, stack e destaque do projeto principal |
| `/sobre` | Quem sou, habilidades, formação e idiomas |
| `/projetos` | S.O.L.I.D (com o fluxo do app desenhado como uma trilha de rede) e este portfólio |
| qualquer rota inexistente | Página 404 personalizada com link de volta para o início |

## Requisitos da atividade

- 3 rotas estáticas criadas por pastas no App Router
- Página 404 em `src/app/not-found.tsx`
- `metadata` exportado em cada página, com título próprio na aba do navegador
- Navegação interna apenas com `<Link>` de `next/link`
- Estilização com classes do Tailwind CSS
- Sem componentização: todo o código de cada tela fica no próprio `page.tsx`
- Desenvolvimento na branch `develop`, com merge na `main` ao final
- Deploy na Vercel

## Tecnologias

- Next.js (App Router) e React
- TypeScript
- Tailwind CSS v4
- Fontes Chakra Petch e Share Tech Mono, carregadas com `next/font`
- Vercel (hospedagem)

## Estrutura

```
src/app/
  layout.tsx          layout raiz (html, body e fontes)
  globals.css         tema, trilhas de fundo e animação do pulso
  page.tsx            página inicial (/)
  not-found.tsx       página 404
  sobre/page.tsx      página /sobre
  projetos/page.tsx   página /projetos
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois é só abrir `http://localhost:3000` no navegador.

Para testar o build de produção:

```bash
npm run build
npm start
```

## Autor

Ailton Júnior
GitHub: [Ailton779](https://github.com/Ailton779)
