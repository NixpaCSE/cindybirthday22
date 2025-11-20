import { motion } from 'framer-motion'

function PictureFrame({ imageSrc }) {
  return (
    <motion.div
      className="picture-frame"
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.5 
      }}
    >
      <div className="frame-inner">
        <div className="frame-border">
          <img 
            src={imageSrc || '/placeholder.jpg'} 
            alt="Cindy and me at SVMP" 
            className="frame-image"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default PictureFrame

