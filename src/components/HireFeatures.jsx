import { motion } from 'framer-motion'
import pic1 from '../assets/homepage4_01.png';
import pic2 from '../assets/homepage4_02.png';
import pic3 from '../assets/homepage4_03.png';

const FeatureCard = ({ image, title, description, index }) => (
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
          background: `linear-gradient(135deg, 
            rgb(${Math.floor(Math.random() * 10 + 205)}, ${Math.floor(Math.random() * 10 + 214)}, ${Math.floor(Math.random() * 10 + 243)}),
            rgb(${Math.floor(Math.random() * 10 + 200)}, ${Math.floor(Math.random() * 10 + 209)}, ${Math.floor(Math.random() * 10 + 238)})
          )`,
          padding: '10px'
        }}
      >
        <motion.div
          className="w-full h-full rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)] bg-white"
        >
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
)

const HireFeatures = () => {
  const features = [
    {
      image: pic1,
      title: 'AI-Structured Matching',
      description: 'Smart, context-aware algorithms match you with the right talent — fast and accurately'
    },
    {
      image: pic2,
      title: 'Verified and Vetted',
      description: 'We test what matters — with real tasks that show what talent can do, not just say'
    },
    {
      image: pic3,
      title: 'Flexible Access to Top Minds',
      description: 'Hire the smartest brains — top university students, elite freelancers, domain experts, and AI-native talent — on your terms'
    }
  ]

  return (
    <div className="py-20 px-4" style={{ background: 'linear-gradient(to bottom right, rgb(247,250,254), rgb(193,204,241))' }}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Hire smarter with AI-vetted,
            <br />
            execution-ready talent
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Still struggling to find the right people to train your models or build your AI product? 
            <span className="text-blue-600 font-semibold">Kora makes it simple</span> — just tell us your need. We'll match you with top talent, fast
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Start Hiring
          </button>
          <p className="text-gray-600 text-lg mb-6">Work smarter. Match faster. Grow together.</p>
        </div>
      </div>
    </div>
  )
}

export default HireFeatures