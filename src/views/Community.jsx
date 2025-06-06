import { motion } from 'framer-motion'
import CommunityTitle from '../components/CommunityTitle.jsx'
import CommunityFeaturesList from '../components/CommunityFeaturesList.jsx'
import CommunityVisualization from '../components/CommunityVisualization.jsx'
import { ANIMATION_CONFIG, STYLES } from '../constants/communityConfig.js'

const Community = () => {
  return (
    <div className="py-20 px-4" style={{ background: STYLES.background }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            {...ANIMATION_CONFIG.leftSlide}
            className="space-y-6 text-left"
          >
            <CommunityTitle />
            <CommunityFeaturesList />
          </motion.div>
          
          <CommunityVisualization />
        </div>
      </div>
    </div>
  )
}

export default Community