import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import styles from './Services.module.css'

const services = [
  {
    color: '#4f83a3',
    title: 'Diagnóstico Completo',
    desc: 'Análise aprofundada de hardware e software para identificar lentidão, travamentos ou falhas de inicialização.',
    tags: ['Hardware', 'Software', 'Relatório'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: '#164e73',
    title: 'Formatação e Sistema',
    desc: 'Instalação limpa de Windows ou Linux com backup dos seus dados e todos os drivers essenciais.',
    tags: ['Windows', 'Linux', 'Backup', 'Drivers'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#164e73" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: '#4f83a3',
    title: 'Otimização e Limpeza',
    desc: 'Remoção de vírus e malwares, limpeza de arquivos temporários e otimização para ganho real de performance.',
    tags: ['Antivírus', 'Otimização', 'Performance'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: '#64748b',
    title: 'Limpeza Física (Preventiva)',
    desc: 'Desmontagem completa, limpeza interna, ventoinhas e troca de pasta térmica do processador.',
    tags: ['Notebook', 'PC', 'Superaquecimento'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: '#4f83a3',
    title: 'Reparo e Troca de Peças',
    desc: 'Substituição de telas, teclados, baterias, conectores de carga e demais componentes danificados.',
    tags: ['Notebook', 'Celular', 'Peças'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: '#164e73',
    title: 'Upgrade de Performance',
    desc: 'HD → SSD, mais RAM, novas placas de vídeo e montagem de PCs personalizados para gamer, trabalho ou estudo.',
    tags: ['SSD', 'RAM', 'GPU', 'PC Gamer'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#164e73" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.sectionLabel}>Portfólio</p>
          <h2 className={styles.title}>
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className={styles.subtitle}>Do diagnóstico ao upgrade, cobrimos tudo que seu equipamento precisa.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
