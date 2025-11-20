import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingHearts from './components/FloatingHearts'
import BirthdayCake from './components/BirthdayCake'
import QuestionButtons from './components/QuestionButtons'
import Confetti from './components/Confetti'
import PictureFrame from './components/PictureFrame'
import './App.css'

function App() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleYesClick = () => {
    setShowConfetti(true)
  }

  return (
    <div className="app">
      <FloatingHearts />
      <AnimatePresence>
        {showConfetti && <Confetti key="confetti" />}
      </AnimatePresence>
      
      <div className="container">
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Birthday Cake Section */}
          <motion.section
            className="section"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <BirthdayCake />
          </motion.section>

          {/* Happy Birthday Section */}
          <motion.section
            className="section"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h1
              className="title"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Happy 22nd Birthday, Cindy!
            </motion.h1>
          </motion.section>

          {/* I Love You Section */}
          <motion.section
            className="section"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.h2
              className="message"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I love you so much! 💖
            </motion.h2>
          </motion.section>

          {/* Interactive Question Section */}
          {!showConfetti && (
            <motion.section
              className="section"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.h2
                className="question"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Be with me forever? 💕
              </motion.h2>
              <QuestionButtons onYesClick={handleYesClick} />
            </motion.section>
          )}

          {/* Celebration Section */}
          <AnimatePresence>
            {showConfetti && (
              <motion.section
                className="section celebration-section"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.h2
                  className="celebration"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  Yayyy, you me and lobster forever!!! 🦞
                </motion.h2>
                <motion.p
                  className="celebration-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  MWAH MWAH MWAHHHHH!!!
                </motion.p>
                <PictureFrame imageSrc="/svmp-photo.jpg" />
              </motion.section>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default App
