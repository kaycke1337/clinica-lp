export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-text text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Vitalis
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Clínica médica moderna focada em saúde e bem-estar. Cuidado
              completo para toda a família.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@clinicavitalis.com.br"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                contato@clinicavitalis.com.br
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">
              Endereço
            </h4>
            <div className="text-sm space-y-1">
              <p>Av. Paulista, 1000</p>
              <p>Sala 801 — Bela Vista</p>
              <p>São Paulo, SP — 01310-100</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">
              Horários
            </h4>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Seg — Sex</span>
                <span className="text-white/90">07:00 — 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white/90">08:00 — 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span className="text-white/50">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {year} Clínica Vitalis. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
