import { motion } from 'framer-motion'
import Orb from '../blocks/Backgrounds/Orb/Orb.jsx'
import CircularText from '../blocks/TextAnimations/CircularText/CircularText.jsx'
import { ANIMATION_CONFIG, CONTENT } from '../constants/communityConfig'

const CommunityVisualization = () => {
  return (
    <motion.div
      {...ANIMATION_CONFIG.rightSlide}
      className="relative hidden md:flex justify-center items-center"
    >
      <div className="relative w-full max-w-[500px] aspect-square">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <CircularText
            text={CONTENT.circularText}
            onHover="speedUp"
            spinDuration={20}
            textClassName="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text font-bold"
          />
        </div>
        <div className="absolute inset-0 z-0">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default CommunityVisualization