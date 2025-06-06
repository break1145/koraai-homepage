import { HIRE_FEATURES_CONFIG } from '../constants/hireFeaturesConfig.js';
import HireFeaturesHeader from '../components/HireFeaturesHeader.jsx';
import HireFeaturesList from '../components/HireFeaturesList.jsx';
import HireFeaturesFooter from '../components/HireFeaturesFooter.jsx';


const HireFeatures = () => {
  const { styles } = HIRE_FEATURES_CONFIG;
  
  return (
    <div className="py-20 px-4" style={{ background: styles.background }}>
      <div className="container mx-auto max-w-7xl">
        <HireFeaturesHeader />
        <HireFeaturesList />
        <HireFeaturesFooter />
      </div>
    </div>
  );
};

export default HireFeatures;