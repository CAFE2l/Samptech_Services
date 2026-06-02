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
            <p>// Curitiba — PR · Rio Verde — GO</p>
            <h2>SampTech Informática</h2>
            <span>Manutenção, upgrades e reparos com atendimento transparente</span>
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
            <p style={{ marginTop: 4 }}>
              Rua 9, Quadra 2, Lote 19 — Conjunto Morada do Sol, Rio Verde - GO
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
              <img src="/imgs/Whatsapp.png" alt="" />
            </a>

            <a
              href="mailto:gutiajs@gmail.com"
              className={styles.socialBtn}
              aria-label="E-mail"
            >
              <img src="/imgs/Gmail.png" alt="" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <img src="/imgs/Instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
