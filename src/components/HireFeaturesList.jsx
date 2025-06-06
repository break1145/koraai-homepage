import HireFeaturesCard from './HireFeaturesCard.jsx';
import { useHireFeatures } from '../hooks/useHireFeatures';

const HireFeaturesList = () => {
  const { features } = useHireFeatures();
  
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <HireFeaturesCard key={index} {...feature} index={index} />
      ))}
    </div>
  );
};

export default HireFeaturesList;