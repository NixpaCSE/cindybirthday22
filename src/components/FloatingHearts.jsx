import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '💘']

function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 10,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
          }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-100px',
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {heart.symbol}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts

