import { motion } from 'framer-motion'
import ChatInterface from './ChatInterface'

const Home = () => {
  return (
      <div className="min-h-screen pb-4 px-4 relative" style={{ background: 'linear-gradient(to right, #f8fafc, #C0CDF4)' }}>
        {/* Responsive Absolute Logo */}


        {/* Main Content */}

        <div className="flex flex-col lg:flex-row gap-8 items-start pl-8">
          {/* Left Side Content */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:max-w-2xl p-8 lg:p-20 rounded-2xl backdrop-blur-sm bg-white/10"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="text-[#0066FF] text-2xl lg:text-4xl sm:text-3xl font-bold transition-all hover:opacity-80">
                Kora
              </div>
            </motion.div>

            {/* Content */} 
            <h2 className="text-3xl lg:text-6xl sm:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Smarter Teams.
              <br />
              Smarter Work.
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#0066FF] text-2xl lg:text-3xl sm:text-6xl">—</span>
              <span className="text-[#0066FF] text-2xl lg:text-3xl sm:text-6xl">with</span>
              <span className="text-[#0066FF] text-2xl lg:text-3xl sm:text-6xl font-bold">Kora AI</span>
            </div>
            <p className="text-gray-600 text-sm lg:text-base sm:text-lg mb-8 max-w-xl">
              Kora is the AI-native talent platform — connecting top talent with the
              world's fastest-growing AI companies and labs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0066FF] text-white text-xs px-6 py-3 rounded-full font-semibold"
              >
                Join as Talent
              </motion.button>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0066FF]/10 text-[#0066FF] text-xs px-6 py-3 rounded-full font-semibold flex items-center justify-center"
              >
                Find Experts
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <div className="flex justify-center lg:justify-end w-full lg:w-[40%]">
            <div className="rounded-2xl backdrop-blur-sm bg-white/10 p-4 w-full">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home
