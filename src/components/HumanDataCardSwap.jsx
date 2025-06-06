import { useState, useEffect } from 'react'
import CardSwap, { Card } from '../blocks/Components/CardSwap/CardSwap.jsx'
import { useHumanData } from '../hooks/useHumanData'
import { RESPONSIVE_CONFIG } from '../constants/humanDataConfig'

const HumanDataCardSwap = () => {
  const { cards } = useHumanData()
  const [screenSize, setScreenSize] = useState('desktop')

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile')
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  const config = RESPONSIVE_CONFIG.cardSwap[screenSize]

  return (
    <div className="w-full max-w-sm lg:max-w-none" style={{ 
      height: config.containerHeight,
      position: 'relative'
    }}>
      <CardSwap
        width={config.width}
        height={config.height}
        cardDistance={config.cardDistance}
        verticalDistance={config.verticalDistance}
        delay={3000}
        pauseOnHover={true}
      >
        {cards.map((card) => (
          <Card 
            key={card.id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-4 md:p-6"
          >
            <h3 className={`text-lg md:text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-2`}>
              {card.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              {card.description}
            </p>
          </Card>
        ))}
      </CardSwap>
    </div>
  )
}

export default HumanDataCardSwap