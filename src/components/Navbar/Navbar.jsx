import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} className={`${styles.logo} flex items-center gap-2`}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h8M2 12h5" stroke="#080c14" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-base leading-tight">SampTech</p>
            <span>Informática</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className={`${styles.desktopNav} flex items-center gap-8`}>
          {links.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)} className={styles.navLink}>
              {l.label}
            </button>
          ))}
          <a href="https://wa.me/5541996713782" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            Fale Conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`${styles.menuBtn} ${open ? styles.open : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button key={l.href} onClick={() => handleNav(l.href)} className={`${styles.navLink} text-left`}>
                  {l.label}
                </button>
              ))}
              <a href="https://wa.me/5541996713782" target="_blank" rel="noreferrer" className={`${styles.ctaBtn} inline-block text-center mt-2`}>
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
