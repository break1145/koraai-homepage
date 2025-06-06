import { useHumanData } from '../hooks/useHumanData'
import HumanDataFeatureItem from './HumanDataFeatureItem'

const HumanDataFeaturesList = () => {
  const { features } = useHumanData()

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <HumanDataFeatureItem 
          key={feature.id} 
          feature={feature} 
          index={index} 
        />
      ))}
    </div>
  )
}

export default HumanDataFeaturesList