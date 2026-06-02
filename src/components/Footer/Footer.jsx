import styles from './Footer.module.css'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={styles.top}>
          <div className={styles.brand}>
            <p>// Curitiba — Cajuru, PR</p>
            <h2>SampTech Informática</h2>
            <span>Assistência Técnica · Fundado em Agosto de 2026</span>
          </div>

          <nav className={styles.links}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}>{l.label}</button>
            ))}
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div>
            <p>
              © 2026 <strong>SampTech Informática</strong>. Todos os direitos reservados.
            </p>
            <p style={{ marginTop: 4 }}>
              Rua Major Antônio Ribeiro Vidal, Nº 59 — Cajuru, Curitiba - PR
            </p>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://wa.me/5541996713782"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00d4ff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.528 5.845L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.368l-.36-.214-3.728.888.931-3.613-.235-.371A9.794 9.794 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
              </svg>
            </a>

            <a
              href="mailto:gutiajs@gmail.com"
              className={styles.socialBtn}
              aria-label="E-mail"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
