import { motion } from 'framer-motion';
import { HIRE_FEATURES_CONFIG } from '../constants/hireFeaturesConfig';

const generateRandomGradient = () => {
  const { gradientColors } = HIRE_FEATURES_CONFIG.styles;
  const color1 = `rgb(${Math.floor(Math.random() * 10 + gradientColors.max.r)}, ${Math.floor(Math.random() * 10 + gradientColors.max.g)}, ${Math.floor(Math.random() * 10 + gradientColors.max.b)})`;
  const color2 = `rgb(${Math.floor(Math.random() * 10 + gradientColors.min.r)}, ${Math.floor(Math.random() * 10 + gradientColors.min.g)}, ${Math.floor(Math.random() * 10 + gradientColors.min.b)})`;
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

const HireFeaturesCard = ({ image, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-[20px] shadow-lg overflow-hidden group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-white p-4">
        <div 
          className="w-full h-full rounded-2xl overflow-hidden" 
          style={{ 
            background: generateRandomGradient(),
            padding: '10px'
          }}
        >
          <motion.div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)] bg-white">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
            />
          </motion.div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default HireFeaturesCard;