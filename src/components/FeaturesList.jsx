import { motion } from 'framer-motion'
import FeatureItem from './FeatureItem'
import { FEATURES_DATA, ANIMATION_CONFIG } from '../constants/aiJobConfig'

const FeaturesList = () => {
  return (
    <motion.div {...ANIMATION_CONFIG.featuresFadeIn} className="space-y-6">
      {FEATURES_DATA.map((feature, index) => (
        <FeatureItem 
          key={feature.id} 
          feature={feature} 
          index={index} 
        />
      ))}
    </motion.div>
  )
}

export default FeaturesList