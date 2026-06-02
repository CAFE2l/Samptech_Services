import { useState } from 'react'
import { motion } from 'framer-motion'
import InternationalPhoneInput, {
  formatInternationalPhone,
  getPhoneValidationMessage,
} from '../InternationalPhoneInput/InternationalPhoneInput'
import styles from './Contact.module.css'

const contactInfo = [
  {
    label: 'WhatsApp',
    value: '(41) 99671-3782',
    href: 'https://wa.me/5541996713782',
    color: '#4f83a3',
    icon: '/imgs/Whatsapp.png',
  },
  {
    label: 'E-mail',
    value: 'gutiajs@gmail.com',
    href: 'mailto:gutiajs@gmail.com',
    color: '#4f83a3',
    icon: '/imgs/Gmail.png',
  },
  {
    label: 'Instagram',
    value: 'Instagram da SampTech',
    href: 'https://www.instagram.com/',
    color: '#4f83a3',
    icon: '/imgs/Instagram.png',
  },
  {
    label: 'Curitiba — PR',
    value: 'Rua Major Antônio Ribeiro Vidal, 59 — Cajuru, Curitiba - PR',
    href: 'https://maps.google.com/?q=Rua+Major+Antonio+Ribeiro+Vidal+59+Cajuru+Curitiba',
    color: '#164e73',
    icon: '/imgs/Google_Maps.png',
  },
  {
    label: 'Rio Verde — GO',
    value: 'Rua 9, Quadra 2, Lote 19 — Conjunto Morada do Sol, Rio Verde - GO',
    href: 'https://maps.google.com/?q=Rua+9+Quadra+2+Lote+19+Conjunto+Morada+do+Sol+Rio+Verde+GO',
    color: '#164e73',
    icon: '/imgs/Google_Maps.png',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: { country: 'BR', digits: '' },
    service: '',
    message: '',
  })
  const [phoneError, setPhoneError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handlePhoneChange = (phone) => {
    setPhoneError('')
    setForm({ ...form, phone })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationMessage = getPhoneValidationMessage(form.phone)

    if (validationMessage) {
      setPhoneError(validationMessage)
      return
    }

    const text = encodeURIComponent(
      `Olá! Me chamo *${form.name}*.\nTelefone: ${formatInternationalPhone(form.phone)}\nServiço: ${form.service}\n\n${form.message}`
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
                    <img src={c.icon} alt="" />
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
              <InternationalPhoneInput value={form.phone} onChange={handlePhoneChange} error={phoneError} />
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
              <img src="/imgs/Whatsapp.png" alt="" />
              Enviar pelo WhatsApp
            </button>
            <p className={styles.formNote}>Você será redirecionado para o WhatsApp com sua mensagem pronta.</p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
