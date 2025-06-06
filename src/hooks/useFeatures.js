import { FEATURES_DATA } from '../constants/aiJobConfig'

export const useFeatures = () => {
  return {
    features: FEATURES_DATA,
    featuresCount: FEATURES_DATA.length
  }
}