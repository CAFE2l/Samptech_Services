import { motion } from 'framer-motion'
import InteractiveTerminalFAQ from '../InteractiveTerminalFAQ/InteractiveTerminalFAQ'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.1)} className={styles.badge}>
            Curitiba — PR · Rio Verde — GO
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className={styles.title}>
            Tecnologia que{' '}
            <span className="text-gradient">funciona</span>{' '}
            para você
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className={styles.subtitle}>
            Manutenção, upgrades e reparos com diagnóstico transparente,
            agilidade real e preço justo. Seu equipamento, de volta ao máximo.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className={styles.actions}>
            <a href="https://wa.me/5541996713782" target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              <img src="/imgs/Whatsapp.png" alt="" />
              Chamar no WhatsApp
            </a>
            <button
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className={styles.btnSecondary}
            >
              Ver Serviços
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.55)} className={styles.stats}>
            {[
              { value: '100%', label: 'Transparência' },
              { value: 'Rápido', label: 'Prazo de entrega' },
              { value: '2 cidades', label: 'PR · GO' },
            ].map((s) => (
              <div key={s.label} className={styles.statItem}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Terminal */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <InteractiveTerminalFAQ />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f83a340" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
