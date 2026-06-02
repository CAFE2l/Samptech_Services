import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './FounderProfileCard.module.css'

const externalIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FounderProfileCard({ founder }) {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef(null)
  const hasPrimaryLink = Boolean(founder.primaryLink)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnOutsideClick = (event) => {
      if (!cardRef.current?.contains(event.target)) setIsOpen(false)
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        cardRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const openPrimaryLink = () => {
    if (!hasPrimaryLink) {
      setIsOpen(true)
      return
    }

    window.open(founder.primaryLink, '_blank', 'noopener,noreferrer')
  }

  const handleClick = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      openPrimaryLink()
      return
    }

    if (isOpen) {
      openPrimaryLink()
    } else {
      setIsOpen(true)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      openPrimaryLink()
    }

    if (event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      role={hasPrimaryLink ? 'link' : 'button'}
      tabIndex="0"
      aria-label={hasPrimaryLink ? `Abrir perfil de ${founder.name}` : `Ver disponibilidade de links de ${founder.name}`}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      whileHover={{ y: -6, scale: 1.018 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 310, damping: 19, mass: 0.68 }}
    >
      <div className={styles.profile}>
        <motion.div
          className={styles.avatar}
          whileHover={{ scale: 1.09, rotate: -3 }}
          transition={{ type: 'spring', stiffness: 340, damping: 18 }}
        >
          {founder.image ? <img src={founder.image} alt={`Foto de ${founder.name}`} /> : founder.initials}
        </motion.div>

        <div>
          <strong>{founder.name}</strong>
          <span>{founder.role}</span>
        </div>
      </div>

      <div className={styles.tooltip}>{hasPrimaryLink ? 'Abrir perfil' : 'Ver links'}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menu}
            role="menu"
            aria-label={`Links de ${founder.name}`}
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className={styles.menuLabel}>Links rápidos</p>
            {founder.links.length > 0 ? (
              founder.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  role="menuitem"
                  aria-label={`${link.label} de ${founder.name}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  {externalIcon}
                </a>
              ))
            ) : (
              <p className={styles.emptyState}>Sem links no momento</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
