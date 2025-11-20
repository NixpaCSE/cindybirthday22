import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const colors = ['#ff4da6', '#ff6bb3', '#b3ffd9', '#80ffbf', '#ffb3d9']

function Confetti() {
  const [confettiPieces, setConfettiPieces] = useState([])

  useEffect(() => {
    const pieces = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 6,
      rotate: Math.random() * 720,
    }))
    setConfettiPieces(pieces)
  }, [])

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
          }}
          initial={{ y: -100, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [1, 1, 0],
            rotate: piece.rotate,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  )
}

export default Confetti

