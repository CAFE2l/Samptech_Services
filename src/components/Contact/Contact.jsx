import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const contactInfo = [
  {
    label: 'WhatsApp',
    value: '(41) 99671-3782',
    href: 'https://wa.me/5541996713782',
    color: '#22c55e',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#22c55e">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.528 5.845L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.368l-.36-.214-3.728.888.931-3.613-.235-.371A9.794 9.794 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: 'gutiajs@gmail.com',
    href: 'mailto:gutiajs@gmail.com',
    color: '#00d4ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Endereço',
    value: 'Rua Major Antônio Ribeiro Vidal, 59 — Cajuru, Curitiba - PR',
    href: 'https://maps.google.com/?q=Rua+Major+Antonio+Ribeiro+Vidal+59+Cajuru+Curitiba',
    color: '#7c3aed',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá! Me chamo *${form.name}*.\nTelefone: ${form.phone}\nServiço: ${form.service}\n\n${form.message}`
    )
    window.open(`https://wa.me/5541996713782?text=${text}`, '_blank')
  }

  return (
    <section id="contato" className={styles.section}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left */}
          <div>
            <p className={styles.sectionLabel}>Contato</p>
            <h2 className={styles.title}>
              Vamos resolver{' '}
              <span className="text-gradient">juntos</span>
            </h2>
            <p className={styles.desc}>
              Entre em contato pelo canal de sua preferência.
              Respondemos rápido e sem enrolação.
            </p>

            <div className={styles.contactItems}>
              {contactInfo.map((c) => (
                <div key={c.label} className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{ background: `${c.color}12` }}>
                    {c.icon}
                  </div>
                  <div>
                    <strong>{c.label}</strong>
                    <a href={c.href} target="_blank" rel="noreferrer">{c.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Nome</label>
              <input name="name" placeholder="Seu nome" value={form.name} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label>Telefone / WhatsApp</label>
              <input name="phone" placeholder="(41) 9 9999-9999" value={form.phone} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label>Serviço</label>
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option>Diagnóstico Completo</option>
                <option>Formatação e Reinstalação</option>
                <option>Otimização e Limpeza</option>
                <option>Limpeza Física</option>
                <option>Reparo e Troca de Peças</option>
                <option>Upgrade de Performance</option>
                <option>Montagem de PC</option>
                <option>Outro</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Descreva o problema</label>
              <textarea name="message" placeholder="Descreva brevemente o que está acontecendo..." value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className={styles.submitBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.528 5.845L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.368l-.36-.214-3.728.888.931-3.613-.235-.371A9.794 9.794 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
              </svg>
              Enviar pelo WhatsApp
            </button>
            <p className={styles.formNote}>Você será redirecionado para o WhatsApp com sua mensagem pronta.</p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
