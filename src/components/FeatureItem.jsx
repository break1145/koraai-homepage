import { motion } from 'framer-motion'
import FeatureIcon from './FeatureIcon'
import { ANIMATION_CONFIG } from '../constants/aiJobConfig'

const FeatureItem = ({ feature, index }) => {
  return (
    <motion.div
      {...ANIMATION_CONFIG.featureItemSlide.initial}
      whileInView={ANIMATION_CONFIG.featureItemSlide.whileInView}
      transition={ANIMATION_CONFIG.featureItemSlide.getTransition(index)}
      className="flex items-start gap-4 p-0"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <FeatureIcon iconPath={feature.iconPath} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureItem