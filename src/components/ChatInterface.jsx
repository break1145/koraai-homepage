import { motion } from 'framer-motion'

const ChatInterface = () => {
  const messages = [
    {
      type: 'user',
      text: 'Hey Kora, I\'m looking for new opportunities — something flexible and at the frontier of AI.'
    },
    {
      type: 'kora',
      text: 'Hi there! Let\'s unlock your real strengths — and match you with the jobs or gigs that fit you best. Ready to begin?',
    },
    {
      type: 'user',
      text: 'Absolutely — let\'s go find something exciting and impactful.'
    },
    {
      type: 'kora',
      text: 'On it — linking you to roles that move AI forward with human insight.',
      progress: [
        { text: 'Search for open positions', done: true },
        { text: 'Found 20 matched positions', done: true },
        { text: 'Assess suitability for each role', done: true },
        { text: 'Narrowed down to 17 positions', done: true },
        { text: 'Send job applications to all', done: true },
        { text: 'Awaiting for response', done: false, count: '01/17' }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative tech-card p-4 ml-auto overflow-hidden"
    >
      {/* 高级光效 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400/50 via-indigo-400/30 to-transparent animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-blue-400/50 via-indigo-400/30 to-transparent animate-pulse" />
        <motion.div 
          className="absolute top-1/3 left-[-20%] w-[140%] h-1 rotate-2 bg-gradient-to-r from-blue-400/20 via-white/60 to-blue-400/20 blur-md opacity-40"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative space-y-4 z-10">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.8 }}
            className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : ''}`}
          >
            {message.type === 'kora' && (
              <motion.div 
                className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-[10px] rounded-full flex items-center justify-center shadow-lg tech-glow flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  boxShadow: [
                    '0 0 15px rgba(59, 130, 246, 0.4)',
                    '0 0 20px rgba(99, 102, 241, 0.6)',
                    '0 0 15px rgba(59, 130, 246, 0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                K
              </motion.div>
            )}
            <motion.div
              className={`rounded-xl p-3 max-w-[85%] tech-card transition-all duration-300 hover:scale-[1.01]
                ${message.type === 'kora'
                  ? 'bg-gradient-to-br from-blue-50/80 to-indigo-50/60 border-blue-200/50'
                  : 'bg-gradient-to-br from-gray-50/80 to-slate-50/60 border-gray-200/50'}`}
              whileHover={{ y: -1 }}
            >
              <p className={`text-xs leading-relaxed ${
                message.type === 'kora'
                  ? 'gradient-text font-medium'
                  : 'text-gray-700'
              }`}>
                {message.text}
              </p>

              {/* 任务进度 */}
              {message.progress && (
                <div className="space-y-1.5 mt-3">
                  {message.progress.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.5) + 0.8 + (i * 0.3) }}
                      className="flex items-center gap-2 text-[10px] text-gray-600 p-1.5 rounded-md bg-white/50 backdrop-blur-sm"
                    >
                      {item.done ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: (index * 0.5) + 0.8 + (i * 0.3) + 0.2, type: "spring" }}
                        >
                          <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="w-3 h-3 border-2 border-blue-400 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                      <span className="flex-1 leading-tight">{item.text}</span>
                      {item.count && (
                        <motion.span 
                          className="text-blue-500 font-mono font-semibold px-1.5 py-0.5 bg-blue-50 rounded text-[9px]"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          {item.count}
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ChatInterface
