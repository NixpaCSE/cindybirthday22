import { motion } from 'framer-motion'

function BirthdayCake() {
  return (
    <motion.div
      className="cake"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="candle">
        <motion.div
          className="flame"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="frosting frosting-top"></div>
      <div className="cake-layer layer-1"></div>
      <div className="cake-layer layer-2"></div>
      <div className="cake-layer layer-3"></div>
    </motion.div>
  )
}

export default BirthdayCake

