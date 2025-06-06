import { motion } from 'framer-motion'
import { CONTENT_TEXT, ANIMATION_CONFIG } from '../constants/homeConfig'

const MainTitle = () => {
  return (
    <>
      <h2 className="text-3xl lg:text-6xl sm:text-6xl font-bold text-gray-900 mb-4 leading-tight">
        <span className="relative inline-block">
          {CONTENT_TEXT.title.line1}
        </span>
        <br />
        <span className="gradient-text">{CONTENT_TEXT.title.line2}</span>
      </h2>
      
      <div className="flex items-center gap-2 mb-6">
        <motion.span
          className="text-blue-500 text-2xl lg:text-3xl sm:text-6xl"
          {...ANIMATION_CONFIG.scaleAnimation}
        >
          —
        </motion.span>
        <span className="gradient-text text-2xl lg:text-3xl sm:text-6xl">with</span>
        <span className="gradient-text text-2xl lg:text-3xl sm:text-6xl font-bold relative">
          {CONTENT_TEXT.subtitle}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-sm opacity-30 animate-pulse"></div>
        </span>
      </div>
    </>
  )
}

export default MainTitle