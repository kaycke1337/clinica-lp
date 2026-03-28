"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-primary-light/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary-light/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-primary-light/60 text-primary-dark text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Agendamento online disponível
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-text mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Sua saúde merece{" "}
              <span className="text-primary relative">
                cuidado de verdade
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8C50 2 100 4 150 6C200 8 250 4 298 7"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-text-muted leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Na Clínica Vitalis, combinamos tecnologia de ponta com
              atendimento humanizado. Consultas, exames e programas de
              bem-estar em um só lugar.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="#agendamento"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                Agendar Consulta
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 bg-white hover:bg-surface text-text font-semibold text-base px-8 py-4 rounded-2xl border border-border transition-all duration-200 hover:-translate-y-0.5"
              >
                Nossos Serviços
              </a>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-center">
                <span className="block text-2xl font-bold text-text font-display">
                  15+
                </span>
                <span className="text-xs text-text-muted">
                  Anos de Experiência
                </span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-text font-display">
                  20k+
                </span>
                <span className="text-xs text-text-muted">
                  Pacientes Atendidos
                </span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-text font-display">
                  4.9
                </span>
                <span className="text-xs text-text-muted flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#F59E0B"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Avaliação
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-light via-surface to-secondary-light shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm">
                    Cuidado médico de excelência
                  </p>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">
                      Dra. Maria Silva
                    </p>
                    <p className="text-xs text-text-muted">
                      Disponível hoje • 14:00
                    </p>
                  </div>
                  <div className="ml-auto w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
