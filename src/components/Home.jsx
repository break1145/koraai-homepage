import { motion } from 'framer-motion'
import ChatInterface from './ChatInterface'

const Home = () => {
  return (
      <div className="min-h-screen pt-4 pb-4 px-4 relative" style={{ background: 'linear-gradient(to right, #f8fafc, #C0CDF4)' }}>
        {/* Responsive Absolute Logo */}


        {/* Main Content */}

        <div className="container mx-auto flex gap-8 items-center mt-12">
          <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-4 left-4 sm:left-4 left-1/2 sm:translate-x-0 -translate-x-1/2 z-50"
          >
            <div className="text-[#0066FF] text-2xl sm:text-3xl font-bold transition-all hover:opacity-80">
              Kora
            </div>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-[55%]"
          >
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Smarter Teams.
              <br />
              Smarter Work.
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-gray-400 text-3xl sm:text-4xl">—</span>
              <span className="text-gray-400 text-3xl sm:text-4xl">with</span>
              <span className="text-[#0066FF] text-3xl sm:text-4xl font-bold">Kora AI</span>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl">
              Kora is the AI-native talent platform — connecting top talent with the
              world's fastest-growing AI companies and labs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0066FF] text-white px-6 py-3 rounded-full font-semibold"
              >
                Join as Talent
              </motion.button>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0066FF]/10 text-[#0066FF] px-6 py-3 rounded-full font-semibold flex items-center justify-center"
              >
                Find Experts
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <div className="w-[45%] flex justify-end">
            <ChatInterface />
          </div>
        </div>
      </div>
  )
}

export default Home
