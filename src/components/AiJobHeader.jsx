import { motion } from 'framer-motion'
import { CONTENT, STYLES, ANIMATION_CONFIG } from '../constants/aiJobConfig'

const AiJobHeader = () => {
  return (
    <motion.div
      {...ANIMATION_CONFIG.titleFadeIn}
      className="text-left mb-16"
    >
      <h2 className="text-6xl text-left font-bold mb-6 leading-tight">
        {CONTENT.title.main}{' '}
        <span className={`${STYLES.gradientText} text-left`}>
          {CONTENT.title.highlight}
        </span>
      </h2>
      <p className="text-gray-600 text-left text-xl max-w-2xl">
        {CONTENT.description}
      </p>
    </motion.div>
  )
}

export default AiJobHeader