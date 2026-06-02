import { motion } from 'framer-motion'
import styles from './HowItWorks.module.css'

const steps = [
  { n: '01', title: 'Primeiro Contato', desc: 'Fale conosco pelo WhatsApp, site ou Instagram. Descrevemos o problema juntos.' },
  { n: '02', title: 'Diagnóstico Técnico', desc: 'Análise detalhada do equipamento e laudo completo sobre o que precisa ser feito.' },
  { n: '03', title: 'Orçamento Aprovado', desc: 'Apresentamos o orçamento com tudo detalhado. Só iniciamos com sua aprovação.' },
  { n: '04', title: 'Execução do Serviço', desc: 'Técnico executa o serviço com qualidade, dentro do prazo combinado.' },
  { n: '05', title: 'Entrega e Suporte', desc: 'Equipamento entregue com garantia e suporte pós-entrega incluídos.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.sectionLabel}>Processo</p>
            <h2 className={styles.title}>
              Como <span className="text-gradient">funciona</span>
            </h2>

            <div className={styles.steps}>
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className={styles.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={styles.stepNumber}>{s.n}</div>
                  <div className={styles.stepContent}>
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Pricing info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.infoBox}>
              <h3>Política de Preços Transparente</h3>

              {[
                {
                  title: 'Serviços de Software',
                  desc: 'Formatação, limpeza e otimização com tabela de preços fixos.',
                },
                {
                  title: 'Reparos com Peças',
                  desc: 'Custo da peça + mão de obra fixa. Tudo detalhado antes de iniciar.',
                },
                {
                  title: 'Upgrades e Montagens',
                  desc: 'Consultoria gratuita para o melhor investimento dentro do seu orçamento.',
                },
              ].map((item) => (
                <div key={item.title} className={styles.pricingItem}>
                  <div className={styles.dot} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}

              <div className={styles.guarantee}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f83a3" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Garantia em todos os serviços realizados</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
