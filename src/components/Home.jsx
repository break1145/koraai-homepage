import { motion } from 'framer-motion'
import ChatInterface from './ChatInterface'

const Home = () => {
  return (
    <div className="min-h-screen pb-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.1)_0%,transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(30,70,235,0.08)_0%,transparent_70%)]"></div>
      
      {/* 动态网格背景 - 修复版本 */}
      <div className="absolute inset-0 opacity-[0.15] z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,102,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,102,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 0'
        }}></div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-start pt-28 pl-12">
        {/* 左侧内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 lg:max-w-3xl p-8 lg:p-20 rounded-3xl tech-card"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="gradient-text text-2xl lg:text-4xl sm:text-3xl font-bold transition-all hover:opacity-80 relative">
              Kora
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            </div>
          </motion.div>

          {/* 标题 */}
          <h2 className="text-3xl lg:text-6xl sm:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="relative inline-block">
              Smarter Teams.
            </span>
            <br />
            <span className="gradient-text">Smarter Work.</span>
          </h2>
          
          <div className="flex items-center gap-2 mb-6">
            <motion.span
              className="text-blue-500 text-2xl lg:text-3xl sm:text-6xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              —
            </motion.span>
            <span className="gradient-text text-2xl lg:text-3xl sm:text-6xl">with</span>
            <span className="gradient-text text-2xl lg:text-3xl sm:text-6xl font-bold relative">
              Kora AI
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-sm opacity-30 animate-pulse"></div>
            </span>
          </div>
          
          <p className="text-gray-600 text-sm lg:text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            Kora is the AI-native talent platform — connecting top talent with the
            world's fastest-growing AI companies and labs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="future-button text-white text-sm px-8 py-4 rounded-full font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">Join as Talent</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="tech-card text-blue-600 text-sm px-8 py-4 rounded-full font-semibold flex items-center justify-center border border-blue-200 hover:border-blue-400 transition-all"
            >
              Find Experts
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.button>
          </div>
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
