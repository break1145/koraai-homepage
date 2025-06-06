import React from 'react'
import { useFeatures } from '../hooks/useFeatures'
import FeatureItem from './FeatureItem'

const FeaturesList = () => {
  const { features, featuresCount } = useFeatures()

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">共 {featuresCount} 个特性</p>
      {features.map((feature, index) => (
        <FeatureItem 
          key={feature.id} 
          feature={feature} 
          index={index} 
        />
      ))}
    </div>
  )
}

export default FeaturesList