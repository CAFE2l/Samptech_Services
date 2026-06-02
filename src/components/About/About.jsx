import { motion } from 'framer-motion'
import FounderProfileCard from '../FounderProfileCard/FounderProfileCard'
import styles from './About.module.css'

const values = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Transparência',
    desc: 'Diagnóstico honesto, orçamento claro antes de qualquer serviço.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Agilidade',
    desc: 'Entendemos a urgência. Trabalhamos rápido para devolver seu equipamento.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Qualidade',
    desc: 'Melhores práticas e ferramentas para soluções que duram.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Foco no Cliente',
    desc: 'Ouvimos, entendemos e tratamos cada cliente com atenção e respeito.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const founders = [
  {
    initials: 'GS',
    name: 'Gabriel Felipe Sabino de Souza',
    role: 'Programador Full-stack',
    image: '/imgs/pfp_gabriel.jpg',
    primaryLink: 'https://main-portfolio-sigma-flame.vercel.app/',
    links: [
      { label: 'Links', href: 'https://personal-link-tree-livid.vercel.app/' },
      { label: 'Canal 2', href: 'https://www.youtube.com/@Kademaris' },
    ],
  },
  {
    initials: 'JV',
    name: 'João Victor Sampaio',
    role: 'Técnico de Consertos',
    image: '/imgs/pfp_joao.png',
    links: [],
  },
]

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.sectionLabel}>Sobre nós</p>
            <h2 className={styles.title}>
              Nascemos para{' '}
              <span className="text-gradient">desmistificar</span>{' '}
              a tecnologia
            </h2>

            <div className={styles.missionCard}>
              <p>
                "Resolver os problemas tecnológicos de nossos clientes com agilidade,
                transparência e qualidade, tornando a tecnologia uma aliada e não uma fonte
                de estresse, garantindo a plena funcionalidade de seus equipamentos."
              </p>
            </div>

            <div className={styles.founders}>
              {founders.map((founder) => <FounderProfileCard key={founder.initials} founder={founder} />)}
            </div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            className={styles.valuesGrid}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={item} className={styles.valueItem}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <div>
                  <strong>{v.title}</strong>
                  <p>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
