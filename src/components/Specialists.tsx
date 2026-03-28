"use client";

import { motion } from "framer-motion";

const specialists = [
  {
    name: "Dra. Maria Silva",
    specialty: "Clínica Geral",
    crm: "CRM/SP 123456",
    bio: "15 anos de experiência em medicina interna. Especialista em check-ups preventivos e medicina do estilo de vida.",
    initials: "MS",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Dr. Carlos Mendes",
    specialty: "Cardiologia",
    crm: "CRM/SP 234567",
    bio: "Cardiologista com fellowship internacional. Referência em ecocardiografia e prevenção cardiovascular.",
    initials: "CM",
    color: "bg-secondary/10 text-secondary",
  },
  {
    name: "Dra. Ana Oliveira",
    specialty: "Dermatologia",
    crm: "CRM/SP 345678",
    bio: "Dermatologista com foco em dermatologia clínica e estética. Membro da Sociedade Brasileira de Dermatologia.",
    initials: "AO",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Dr. Pedro Santos",
    specialty: "Pediatria",
    crm: "CRM/SP 456789",
    bio: "Pediatra com especializacão em desenvolvimento infantil. Atendimento humanizado para bebês e crianças.",
    initials: "PS",
    color: "bg-primary-light text-primary-dark",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Specialists() {
  return (
    <section id="equipe" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Nossa Equipe
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text mt-3 mb-4">
            Profissionais que cuidam de você
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Uma equipe multidisciplinar comprometida com a excelência e o
            atendimento humanizado.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {specialists.map((doc) => (
            <motion.article
              key={doc.name}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 text-center"
            >
              <div
                className={`w-20 h-20 rounded-full ${doc.color} flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-display transition-transform duration-300 group-hover:scale-110`}
              >
                {doc.initials}
              </div>
              <h3 className="font-display text-lg font-bold text-text">
                {doc.name}
              </h3>
              <p className="text-primary font-semibold text-sm mt-1">
                {doc.specialty}
              </p>
              <p className="text-text-muted text-xs mt-1 mb-3">{doc.crm}</p>
              <p className="text-text-muted text-sm leading-relaxed">
                {doc.bio}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
