import { FEATURES_DATA, CARD_DATA } from '../constants/humanDataConfig'

export const useHumanData = () => {
  return {
    features: FEATURES_DATA,
    cards: CARD_DATA,
    featuresCount: FEATURES_DATA.length
  }
}