import { motion } from 'framer-motion'
import ChatInterface from '../components/ChatInterface.jsx'
import BackgroundLayers from '../components/BackgroundLayers.jsx'
import Logo from '../components/Logo.jsx'
import MainTitle from '../components/MainTitle.jsx'
import ActionButtons from '../components/ActionButtons.jsx'
import { CONTENT_TEXT, ANIMATION_CONFIG } from '../constants/homeConfig.js'

const Home = () => {
  return (
    <div className="min-h-screen pb-4 px-4 relative overflow-hidden">
      <BackgroundLayers />

      {/* 主要内容 */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-start pt-28 pl-12">
        {/* 左侧内容 */}
        <motion.div
          {...ANIMATION_CONFIG.fadeIn}
          className="flex-1 lg:max-w-3xl p-8 lg:p-20 rounded-3xl tech-card"
        >
          <Logo />
          <MainTitle />
          
          <p className="text-gray-600 text-sm lg:text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            {CONTENT_TEXT.description}
          </p>
          
          <ActionButtons />
        </motion.div>

        {/* 聊天界面 */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[35%]">
          <div className="tech-card p-3 w-full max-w-sm">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
