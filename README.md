Alive Amazônia

Landing page imersiva sobre a Floresta Amazônica, construída como projeto de estudo e portfólio, com foco em animação frontend: scroll storytelling, micro-interações e performance.

🔗 Page: [link da Vercel aqui após o deploy]

Sobre o projeto

O Alive Amazônia é uma experiência de rolagem única (single-page), contando a história da maior floresta tropical do planeta através de números, fauna, curiosidades e um chamado à conservação — tudo guiado por animações sincronizadas ao scroll.

Tecnologias
Next.js 15 (App Router)
TypeScript
Tailwind CSS v4 — tokens de design customizados (paleta inspirada na floresta)
Framer Motion — animações, scroll-driven effects, useScroll/useTransform, AnimatePresence
Lenis — smooth scroll


Funcionalidades
Hero com título animado em cascata (stagger) e parallax de fundo
Smooth scroll customizado (Lenis), com fallback automático para quem prefere menos movimento
Contadores numéricos animados por scroll (dados reais sobre a Amazônia)
Seção de fauna com scrollytelling: cada animal revela-se em tela cheia conforme o scroll avança
Linha do tempo histórica (povos originários ao presente), com quadro animado e fotos
Seção dos três rios mais icônicos da bacia amazônica
Curiosidades em carrossel de scroll horizontal, com imagens
Comparador interativo "antes/depois" (floresta preservada vs. área desmatada), com dado real de desmatamento
Seção de encerramento com chamada à conservação
Botão de voltar ao topo, com animação flutuante, visível só perto do fim da página
Acessibilidade de movimento: respeita prefers-reduced-motion tanto nas animações do Framer Motion quanto no smooth scroll
Todas as animações usam propriedades performáticas (opacity, transform, filter), evitando reflow


Estrutura do projeto
app/
├── page.tsx                    # Composição das seções da página
├── layout.tsx                  # Fontes, MotionConfig, SmoothScroll, ScrollToTop
├── globals.css                 # Paleta de cores e tipografia (tokens)

components/
├── Hero.tsx                    # Título em cascata + parallax
├── SmoothScroll.tsx            # Wrapper do Lenis, com fallback de acessibilidade
├── StatsSection.tsx            # Seção de números
├── StatCounter.tsx             # Contador animado individual (parsing de número BR)
├── FaunaSection.tsx            # Scrollytelling da fauna (tela cheia por animal)
├── HistorySection.tsx          # Linha do tempo histórica (quadro animado + timeline)
├── RiversSection.tsx           # Os três rios mais icônicos da Amazônia
├── CuriositiesSection.tsx      # Scroll horizontal de curiosidades
├── BeforeAfterSection.tsx      # Comparador interativo (clip-path)
├── ClosingSection.tsx          # Encerramento 
└── ScrollToTop.tsx             # Botão de retorno ao topo, visível perto do fim

lib/
└── content.ts                  # Dados: estatísticas, animais, história, rios, curiosidades

Sobre o desenvolvimento
Este projeto foi construído em fases, cada uma introduzindo um conceito de animação: fundamentos do Framer Motion, scroll-driven effects, contadores numéricos, AnimatePresence, transições com clip-path, e por fim performance e acessibilidade de movimento. 
