import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orb cyan */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, #00d4ff18 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb purple */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: '10%',
          right: '-5%',
          background: 'radial-gradient(circle, #7c3aed18 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orb mid */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '50%',
          left: '45%',
          background: 'radial-gradient(circle, #00d4ff0d 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  )
}
