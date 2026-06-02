import { motion } from 'framer-motion'
import styles from './Services.module.css'

export default function ServiceCard({ icon, title, desc, tags, color, delay }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={styles.cardIcon} style={{ background: `${color}15` }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={styles.tags}>
        {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
    </motion.div>
  )
}
