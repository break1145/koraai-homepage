import { motion } from 'framer-motion';
import { HIRE_FEATURES_CONFIG } from '../constants/hireFeaturesConfig';

const HireFeaturesHeader = () => {
  const { title, description } = HIRE_FEATURES_CONFIG;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {title.main}
        <br />
        {title.sub}
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        {description.main}{' '}
        <span className="text-blue-600 font-semibold">{description.highlight}</span>
        {description.sub}
      </p>
    </motion.div>
  );
};

export default HireFeaturesHeader;