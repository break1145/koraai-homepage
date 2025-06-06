import { motion } from 'framer-motion'
import CommunityIcon from './CommunityIcon'
import { ANIMATION_CONFIG } from '../constants/communityConfig'

const CommunityFeatureItem = ({ feature, index }) => {
  return (
    <motion.div
      {...ANIMATION_CONFIG.featureItem.initial}
      whileInView={ANIMATION_CONFIG.featureItem.whileInView}
      transition={ANIMATION_CONFIG.featureItem.getTransition(index)}
      className="flex items-start space-x-4"
    >
      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <CommunityIcon 
          iconPath={feature.iconPath} 
          iconType={feature.iconType}
        />
      </div>
      <div className="text-left">
        <h3 className="font-semibold text-lg">{feature.title}</h3>
        <p className="text-gray-600 mt-1">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default CommunityFeatureItem