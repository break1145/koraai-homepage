import { motion } from 'framer-motion'

const Community = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Work your way — part-time native',
      description: 'Contribute on your own terms — even just one hour at a time'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
        </svg>
      ),
      title: 'Earn like the top 1%',
      description: 'Work with top AI labs, startups and frontier teams to earn exceptional pay'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Show who you really are',
      description: '360° profiles + AI-native testing — built to reflect your real capabilities'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'A new kind of talent community',
      description: 'Join the top minds shaping work, identity, and meaning in the AI age'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-left space-y-4">
              <div>AI-native talent community for</div>
              <div 
                style={{
                  background: 'linear-gradient(45deg, rgb(26, 67, 233), rgb(30, 70, 235))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'rgb(26, 67, 233)',
                  position: 'relative'
                }}
              >
                <span className="relative inline-block">
                  a new work era
                  <span 
                    className="absolute inset-0" 
                    style={{
                      background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
                      backgroundSize: '250% 100%',
                      animation: 'shine 3s infinite',
                      pointerEvents: 'none'
                    }}
                  />
                </span>
              </div>
            </h2>
            <style jsx>{`
              @keyframes shine {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
              }
            `}</style>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Community