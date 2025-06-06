import { motion } from 'framer-motion'

const AnimatedDots = () => {
  return (
    <div className="w-full h-[400px] bg-blue-100/30 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('/network-bg.svg')] bg-no-repeat bg-cover opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
              className="w-8 h-8 bg-blue-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedDots