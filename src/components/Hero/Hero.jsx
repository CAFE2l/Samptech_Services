import { motion } from 'framer-motion'
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
            Curitiba — Cajuru, PR
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.528 5.845L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.368l-.36-.214-3.728.888.931-3.613-.235-.371A9.794 9.794 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
              </svg>
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
              { value: 'Curitiba', label: 'Cajuru — PR' },
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
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <span style={{ background: '#ef4444' }} />
              <span style={{ background: '#f59e0b' }} />
              <span style={{ background: '#22c55e' }} />
              <span style={{ marginLeft: 8, color: '#475569', fontSize: '0.7rem', fontFamily: 'JetBrains Mono' }}>
                samptech ~ diagnóstico
              </span>
            </div>
            <div className={styles.terminalBody}>
              <div><span className={styles.prompt}>$ </span><span className={styles.cmd}>scan --device notebook</span></div>
              <div className={styles.out}>✓ Hardware verificado</div>
              <div className={styles.out}>✓ Sistema analisado</div>
              <div className={styles.out}>✓ Diagnóstico concluído</div>
              <div className={styles.dim}>──────────────────────</div>
              <div><span className={styles.prompt}>$ </span><span className={styles.cmd}>run --fix all</span></div>
              <div className={styles.out}>✓ Problemas resolvidos</div>
              <div className={styles.out}>✓ Performance restaurada</div>
              <div><span className={styles.prompt}>$ </span><span className={styles.cursor} /></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff40" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
