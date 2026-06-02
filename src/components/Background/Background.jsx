import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#4f83a3 1px, transparent 1px), linear-gradient(90deg, #4f83a3 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orb blue */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 600,
          height: 600,
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, #164e7330 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb navy */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 500,
          height: 500,
          bottom: '10%',
          right: '-5%',
          background: 'radial-gradient(circle, #0b274238 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orb mid */}
      <motion.div
        className="absolute rounded-full blur-2xl"
        style={{
          width: 300,
          height: 300,
          top: '50%',
          left: '45%',
          background: 'radial-gradient(circle, #4f83a30d 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <motion.div
        className="absolute h-px w-[46vw] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[1px]"
        style={{ top: '28%', left: '-12%', rotate: '-10deg' }}
        animate={{ x: ['-10%', '135%'], opacity: [0, 0.65, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', repeatDelay: 5 }}
      />

      <motion.div
        className="absolute h-px w-[36vw] bg-gradient-to-r from-transparent via-secondary/40 to-transparent blur-[1px]"
        style={{ bottom: '24%', right: '-8%', rotate: '-12deg' }}
        animate={{ x: ['20%', '-160%'], opacity: [0, 0.5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4, repeatDelay: 6 }}
      />
    </div>
  )
}
