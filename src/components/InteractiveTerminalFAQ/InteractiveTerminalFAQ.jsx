import { useEffect, useRef, useState } from 'react'
import styles from './InteractiveTerminalFAQ.module.css'

const terminalQuestions = [
  {
    question: 'O que a SampTech faz?',
    answer:
      'A SampTech oferece manutenção, upgrades, diagnóstico e reparos para computadores e notebooks, com foco em transparência, agilidade e preço justo.',
  },
  {
    question: 'Quais serviços vocês oferecem?',
    answer:
      'Trabalhamos com formatação, limpeza, troca de peças, upgrades, otimização de desempenho, diagnóstico técnico, montagem e manutenção preventiva.',
  },
  {
    question: 'Como funciona o atendimento?',
    answer:
      'Você entra em contato, explica o problema, fazemos uma análise inicial e seguimos com diagnóstico, orçamento e execução do serviço aprovado.',
  },
  {
    question: 'Vocês fazem orçamento?',
    answer:
      'Sim. O orçamento pode ser solicitado pelo WhatsApp, com descrição do problema e, se possível, fotos ou vídeos do equipamento.',
  },
  {
    question: 'Onde vocês atendem?',
    answer:
      'Atendemos Curitiba e região de Cajuru, PR, e Rio Verde, GO, com possibilidade de combinar detalhes pelo WhatsApp.',
  },
  {
    question: 'Como entro em contato?',
    answer:
      "Clique no botão 'Fale Conosco' ou 'Chamar no WhatsApp' para falar diretamente com a SampTech.",
  },
]

export default function InteractiveTerminalFAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [displayedAnswer, setDisplayedAnswer] = useState('')
  const answerRef = useRef(null)

  useEffect(() => {
    if (!selectedQuestion) return undefined

    setDisplayedAnswer('')
    let currentIndex = 0
    const interval = window.setInterval(() => {
      currentIndex += 1
      setDisplayedAnswer(selectedQuestion.answer.slice(0, currentIndex))

      if (currentIndex >= selectedQuestion.answer.length) {
        window.clearInterval(interval)
      }
    }, 12)

    return () => window.clearInterval(interval)
  }, [selectedQuestion])

  useEffect(() => {
    answerRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [displayedAnswer])

  const selectQuestion = (item) => {
    setSelectedQuestion(null)
    setDisplayedAnswer('')
    window.setTimeout(() => setSelectedQuestion(item), 0)
  }

  const clearTerminal = () => {
    setSelectedQuestion(null)
    setDisplayedAnswer('')
  }

  return (
    <div className={styles.terminalCard} aria-label="Terminal interativo de perguntas frequentes">
      <div className={styles.terminalHeader}>
        <div className={styles.windowControls} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className={styles.terminalTitle}>samptech ~ faq</span>
      </div>

      <div className={styles.terminalBody}>
        <div className={styles.welcome}>
          <span className={styles.prompt}>$ </span>
          <span>Olá, eu sou o terminal da SampTech.</span>
          <br />
          <span className={styles.helper}>Escolha uma pergunta abaixo:</span>
        </div>

        <div className={styles.questions} aria-label="Perguntas frequentes">
          {terminalQuestions.map((item, index) => (
            <button
              key={item.question}
              type="button"
              className={styles.questionButton}
              onClick={() => selectQuestion(item)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.question}
            </button>
          ))}
        </div>

        {selectedQuestion && (
          <div className={styles.answerBlock} ref={answerRef}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$ </span>
              <span className={styles.command}>faq --pergunta &quot;{selectedQuestion.question}&quot;</span>
            </div>
            <p className={styles.answer} aria-live="polite">
              {displayedAnswer}
              <span className={styles.cursor} aria-hidden="true" />
            </p>
          </div>
        )}

        {!selectedQuestion && (
          <div className={styles.readyLine}>
            <span className={styles.prompt}>$ </span>
            <span className={styles.helper}>aguardando comando</span>
            <span className={styles.cursor} aria-hidden="true" />
          </div>
        )}
      </div>

      <div className={styles.terminalFooter}>
        <button type="button" className={styles.clearButton} onClick={clearTerminal}>
          limpar terminal
        </button>
        <span>clique em uma pergunta para consultar</span>
      </div>
    </div>
  )
}
