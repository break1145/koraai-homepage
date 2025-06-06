import { motion } from 'framer-motion'
import HumanDataTitle from '../components/HumanDataTitle.jsx'
import HumanDataDescription from '../components/HumanDataDescription.jsx'
import HumanDataFeaturesList from '../components/HumanDataFeaturesList.jsx'
import HumanDataCardSwap from '../components/HumanDataCardSwap.jsx'
import { CONTENT_TEXT, ANIMATION_CONFIG } from '../constants/humanDataConfig.js'

const HumanData = () => {
  return (
    <div className="py-12 md:py-20 px-4" style={{ background: 'linear-gradient(to right, #f7faff, #C0CDF4)' }}>
      <div className="container mx-auto max-w-7xl px-4 md:pl-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 左侧内容区域 */}
          <div className="w-full lg:w-1/2 lg:pr-12">
            <motion.div
              {...ANIMATION_CONFIG.fadeIn}
            >
              <HumanDataTitle />
              <HumanDataDescription />
              
              <h3 className="text-blue-600 text-xl md:text-2xl font-semibold mb-6 text-center lg:text-left">
                {CONTENT_TEXT.sectionTitle}
              </h3>

              <HumanDataFeaturesList />
            </motion.div>
          </div>
          
          {/* 右侧CardSwap区域 */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <HumanDataCardSwap />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HumanData