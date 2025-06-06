import { FEATURES_DATA } from '../constants/communityConfig'

export const useCommunityFeatures = () => {
  return {
    features: FEATURES_DATA,
    featuresCount: FEATURES_DATA.length,
    getFeatureById: (id) => FEATURES_DATA.find(feature => feature.id === id)
  }
}