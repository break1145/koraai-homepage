import { motion } from 'framer-motion'
import HumanDataFeatureIcon from './HumanDataFeatureIcon'
import { ANIMATION_CONFIG } from '../constants/humanDataConfig'

const HumanDataFeatureItem = ({ feature, index }) => {
  return (
    <motion.div
      initial={ANIMATION_CONFIG.featureItemSlide.initial}
      whileInView={ANIMATION_CONFIG.featureItemSlide.whileInView}
      transition={ANIMATION_CONFIG.featureItemSlide.getTransition(index)}
      className="flex items-start space-x-3 mb-6"
    >
      <div className="text-blue-600 w-6 h-6 mt-1">
        <HumanDataFeatureIcon iconPath={feature.iconPath} />
      </div>
      <p className="text-gray-600 text-lg">{feature.text}</p>
    </motion.div>
  )
}

export default HumanDataFeatureItem