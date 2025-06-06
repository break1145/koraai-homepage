import CommunityFeatureItem from './CommunityFeatureItem'
import { FEATURES_DATA } from '../constants/communityConfig'

const CommunityFeaturesList = () => {
  return (
    <div className="space-y-6">
      {FEATURES_DATA.map((feature, index) => (
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