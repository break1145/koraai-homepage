import { HIRE_FEATURES_DATA } from '../constants/hireFeaturesConfig';

export const useHireFeatures = () => {
  const features = HIRE_FEATURES_DATA;
  
  const getFeatureByIndex = (index) => {
    return features[index] || null;
  };
  
  const getFeatureByTitle = (title) => {
    return features.find(feature => feature.title === title) || null;
  };
  
  return {
    features,
    featuresCount: features.length,
    getFeatureByIndex,
    getFeatureByTitle
  };
};