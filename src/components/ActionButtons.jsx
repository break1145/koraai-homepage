import { motion } from 'framer-motion'
import { CONTENT_TEXT, ANIMATION_CONFIG } from '../constants/homeConfig'

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.button
        {...ANIMATION_CONFIG.buttonHover}
        className="future-button text-white text-sm px-8 py-4 rounded-full font-semibold relative overflow-hidden"
      >
        <span className="relative z-10">{CONTENT_TEXT.buttons.primary}</span>
      </motion.button>
      
      <motion.button
        {...ANIMATION_CONFIG.buttonHover}
        className="tech-card text-blue-600 text-sm px-8 py-4 rounded-full font-semibold flex items-center justify-center border border-blue-200 hover:border-blue-400 transition-all"
      >
        {CONTENT_TEXT.buttons.secondary}
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
          {...ANIMATION_CONFIG.arrowHover}
        >
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </motion.svg>
      </motion.button>
    </div>
  )
}

export default ActionButtons