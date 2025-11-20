import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

function QuestionButtons({ onYesClick }) {
  const [noButtonPosition, setNoButtonPosition] = useState(null)
  const noButtonRef = useRef(null)
  const containerRef = useRef(null)

  const handleNoClick = (e) => {
    e.preventDefault()
    
    if (!noButtonRef.current || !containerRef.current) return
    
    const button = noButtonRef.current
    const buttonRect = button.getBoundingClientRect()
    const buttonWidth = buttonRect.width
    const buttonHeight = buttonRect.height
    
    // Calculate random position within viewport, avoiding edges
    const padding = 20
    const maxX = window.innerWidth - buttonWidth - padding
    const maxY = window.innerHeight - buttonHeight - padding
    
    // Generate random position
    const randomX = Math.max(padding, Math.random() * maxX)
    const randomY = Math.max(padding, Math.random() * maxY)
    
    // Get container position to calculate relative position
    const containerRect = containerRef.current.getBoundingClientRect()
    const relativeX = randomX - containerRect.left
    const relativeY = randomY - containerRect.top
    
    setNoButtonPosition({ 
      x: relativeX, 
      y: relativeY 
    })
  }

  return (
    <div ref={containerRef} className="buttons-container">
      <motion.button
        id="yes-btn"
        className="btn btn-yes"
        onClick={onYesClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        Yes! 💖
      </motion.button>
      
      <motion.button
        ref={noButtonRef}
        id="no-btn"
        className="btn btn-no"
        onClick={handleNoClick}
        animate={noButtonPosition ? {
          x: noButtonPosition.x,
          y: noButtonPosition.y,
          scale: 1,
        } : {
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0 }}
        style={{ 
          position: noButtonPosition ? 'absolute' : 'static',
        }}
      >
        No
      </motion.button>
    </div>
  )
}

export default QuestionButtons

