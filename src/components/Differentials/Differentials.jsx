import { motion } from 'framer-motion'
import styles from './Differentials.module.css'

const diffs = [
  {
    title: 'Presença Digital Profissional',
    desc: 'Site personalizado e redes sociais com design de qualidade, transmitindo credibilidade desde o primeiro contato.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Marketing Educativo',
    desc: 'Conteúdo que educa: dicas de manutenção, explicação de problemas comuns e tutoriais práticos.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Atendimento Personalizado',
    desc: 'Orçamentos detalhados, explicações claras e uma experiência superior às assistências tradicionais.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Agilidade e Custo-Benefício',
    desc: 'Prazos curtos e preços justos. Mais vantajoso que as opções estabelecidas no mercado local.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const audiences = [
  {
    title: '// Usuário com Problema Urgente',
    desc: 'Pessoas que precisam de solução rápida: consertos, formatação e reinstalação. Valorizam agilidade e diagnóstico claro para retomar trabalho, estudo ou lazer.',
  },
  {
    title: '// Consumidor que Busca Melhoria',
    desc: 'Clientes que querem otimizar desempenho: manutenção preventiva, upgrades e consultoria especializada para o melhor investimento.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Differentials() {
  return (
    <section id="diferenciais" className={styles.section}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.sectionLabel}>Por que nos escolher</p>
          <h2 className={styles.title}>
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {diffs.map((d) => (
            <motion.div key={d.title} className={styles.card} variants={cardVariant}>
              <div className={styles.cardIconWrap}>{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={`${styles.targetAudience} grid md:grid-cols-2 gap-6`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {audiences.map((a) => (
            <div key={a.title} className={styles.audienceCard}>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
