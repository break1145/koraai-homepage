import { HIRE_FEATURES_CONFIG } from '../constants/hireFeaturesConfig';

const HireFeaturesFooter = () => {
  const { cta } = HIRE_FEATURES_CONFIG;
  
  return (
    <div className="text-center">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
        {cta.button}
      </button>
      <p className="text-gray-600 text-lg mb-6">{cta.tagline}</p>
    </div>
  );
};

export default HireFeaturesFooter;