# Clínica Vitalis — Landing Page

Landing page institucional para clínica médica. Foco em conversão (agendamento de consultas), SEO técnico e performance.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-E91E63?logo=framer&logoColor=white)

---

## Preview



## Tech Stack

- **Next.js 16** 
- **TypeScript**
- **Tailwind CSS v4** 
- **Framer Motion**

## Estrutura

```
src/
├── app/
│   ├── globals.css        # Design system (cores, tipografia)
│   ├── layout.tsx         # SEO, meta tags, JSON-LD schema
│   ├── page.tsx           # Montagem das seções
│   ├── robots.ts          # Geração dinâmica do robots.txt
│   └── sitemap.ts         # Geração dinâmica do sitemap.xml
│
└── components/
    ├── Navbar.tsx          # Nav fixa com detecção de scroll
    ├── Hero.tsx            # Headline + CTA + prova social
    ├── Services.tsx        # 6 especialidades médicas
    ├── Specialists.tsx     # Grid da equipe médica
    ├── Testimonials.tsx    # Depoimentos com rating
    ├── Scheduling.tsx      # CTA de agendamento (WhatsApp + tel)
    └── Footer.tsx          # Contato, endereço, horários
```

## SEO

- Meta tags e Open Graph configurados no layout
- Schema markup `MedicalClinic` (JSON-LD) com horários, endereço e especialidades
- Sitemap e robots.txt gerados via API do Next.js
- Heading hierarchy semântica (`h1` > `h2` > `h3`)
- SSG — páginas pré-renderizadas como HTML estático

## Animações

Todas as animações usam Framer Motion e respeitam `prefers-reduced-motion`:

- Entrada do hero com stagger
- Scroll-triggered reveals nas seções
- Hover lift nos cards de serviço
- Underline SVG animado no headline
- Transição do navbar (transparente → sólido)

## Performance

- Renderização estática (SSG) para todas as páginas
- Fontes otimizadas com `next/font` (sem flash)
- Apenas `transform` e `opacity` animados (GPU-accelerated)
- Zero dependências pesadas — Framer Motion é a única lib extra
