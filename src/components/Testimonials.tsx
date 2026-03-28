"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Juliana Ferreira",
    role: "Paciente há 3 anos",
    rating: 5,
    text: "Atendimento excepcional! A Dra. Maria me acompanha há anos e sempre com muita atenção e cuidado. A clínica é moderna, organizada e todo o time é muito acolhedor.",
    initials: "JF",
  },
  {
    name: "Roberto Almeida",
    role: "Paciente há 1 ano",
    rating: 5,
    text: "Depois de muito procurar, encontrei na Vitalis o cuidado que minha família merecia. O Dr. Pedro é incrível com as crianças. Agendamento online facilitou muito nossa rotina.",
    initials: "RA",
  },
  {
    name: "Camila Souza",
    role: "Paciente há 2 anos",
    rating: 5,
    text: "Fiz meu check-up completo e fui atendida com muita rapidez. Os resultados dos exames saíram no mesmo dia. Recomendo a todos que buscam qualidade e confiança.",
    initials: "CS",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A confiança dos nossos pacientes é o maior indicador da qualidade
            do nosso atendimento.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 mb-6 text-text leading-relaxed text-[15px]">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold font-display">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
