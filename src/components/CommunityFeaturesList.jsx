import CommunityFeatureItem from './CommunityFeatureItem'
import {useCommunityFeatures} from "../hooks/useCommunityFeatures.js";

const CommunityFeaturesList = () => {
  const {features} = useCommunityFeatures()
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <CommunityFeatureItem 
          key={feature.id} 
          feature={feature} 
          index={index} 
        />
      ))}
    </div>
  )
}

export default CommunityFeaturesList