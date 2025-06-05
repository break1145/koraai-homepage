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
          className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-lg ml-auto overflow-hidden border border-white/20"
      >
        {/* 光泽反射特效 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-transparent animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/30 via-white/10 to-transparent animate-pulse" />
          <div className="absolute top-1/3 left-[-20%] w-[140%] h-1 rotate-2 bg-gradient-to-r from-white/10 via-white/50 to-white/10 blur-md opacity-40 animate-move" />
        </div>

        <div className="relative space-y-8 z-10">
          {messages.map((message, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.8 }}
                  className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}
              >
                {message.type === 'kora' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-400 text-white rounded-full flex items-center justify-center font-bold shadow-inner">
                      K
                    </div>
                )}
                <div
                    className={`rounded-2xl p-4 max-w-[80%] shadow-md transition hover:shadow-xl
                ${message.type === 'kora'
                        ? 'bg-gradient-to-br from-blue-100/40 to-blue-200/20'
                        : 'bg-gradient-to-br from-gray-100/60 to-gray-200/40'}`}
                >
                  <p
                      className={`text-transparent bg-clip-text ${
                          message.type === 'kora'
                              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500'
                              : 'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
                      }`}
                  >
                    {message.text}
                  </p>

                  {/* 任务进度 */}
                  {message.progress && (
                      <div className="space-y-2 mt-4">
                        {message.progress.map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.5) + 0.8 + (i * 0.3) }}
                                className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              {item.done ? (
                                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                  </svg>
                              ) : (
                                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full" />
                              )}
                              <span>{item.text}</span>
                              {item.count && (
                                  <span className="text-blue-400 ml-auto font-mono">{item.count}</span>
                              )}
                            </motion.div>
                        ))}
                      </div>
                  )}
                </div>
                {message.type === 'user' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex-shrink-0" />
                )}
              </motion.div>
          ))}
        </div>

        {/* Animate 'shine' 光泽动效 */}
        <style jsx>{`
        @keyframes move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-move {
          animation: move 3s linear infinite;
        }
      `}</style>
      </motion.div>
  )
}

export default ChatInterface
