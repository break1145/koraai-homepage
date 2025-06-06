
import { motion } from 'framer-motion'
import Home from './views/Home.jsx'
import AiJob from './views/AiJob.jsx'
import Community from './components/Community.jsx'
import HireFeatures from './components/HireFeatures.jsx'
import HumanData from './components/HumanData.jsx'
import IconShowcase from './components/IconShowcase.jsx'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* 动态背景粒子效果 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(30,70,235,0.1)_0%,transparent_50%)]"></div>
        
        {/* 浮动光点 */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-40"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50"
          animate={{
            y: [-15, 15, -15],
            x: [-15, 15, -15],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Home/>
        <AiJob/>
        <Community/>
        <HireFeatures/>
        <HumanData/>
        <IconShowcase/>
        <Footer />
      </div>
    </div>
  );
}

export default App
