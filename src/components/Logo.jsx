import { motion } from 'framer-motion'
import { ANIMATION_CONFIG } from '../constants/homeConfig'

const Logo = () => {
  return (
    <motion.div
      {...ANIMATION_CONFIG.logoFadeIn}
      className="mb-8"
    >
      <div className="gradient-text text-2xl lg:text-4xl sm:text-3xl font-bold transition-all hover:opacity-80 relative">
        Kora
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      </div>
    </motion.div>
  )
}

export default Logo