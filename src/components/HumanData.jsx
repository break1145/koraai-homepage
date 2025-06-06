import { motion } from 'framer-motion'
import MagnetLines from '../blocks/Animations/MagnetLines/MagnetLines.jsx';
import Orb from '../blocks/Backgrounds/Orb/Orb.jsx';
import CircularText from '../blocks/TextAnimations/CircularText/CircularText.jsx';
import PixelCard from '../blocks/Components/PixelCard/PixelCard.jsx';
import CardSwap, { Card } from '../blocks/Components/CardSwap/CardSwap.jsx'

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-start space-x-3 mb-6">
    <div className="text-blue-600 w-6 h-6 mt-1">{icon}</div>
    <p className="text-gray-600 text-lg">{text}</p>
  </div>
)

const HumanData = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      text: 'Moves beyond synthetic or crowdsourced labels'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75M4.5 6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 011.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 011.5 2.25h1.5c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C1.095 4.01.25 4.973.25 6.108V19.5A2.25 2.25 0 002.5 21.75h15A2.25 2.25 0 0019.75 19.5v-13.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v13.25" />
        </svg>
      ),
      text: 'Captures high-context, expert-level workflows'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      text: 'Powers agent training, evaluation & post-training tuning'
    }
  ]

  return (
    <div className="py-12 md:py-20 px-4" style={{ background: 'linear-gradient(to right, #f7faff, #C0CDF4)' }}>
      <div className="container mx-auto max-w-7xl px-4 md:pl-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 左侧内容区域 */}
          <div className="w-full lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
                Human Data That Actually{' '}
                <span className="text-blue-600">Improves AI</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base mb-8 text-center lg:text-left leading-relaxed">
                The most impactful AI systems aren't just trained on code or content-
                <br className="hidden md:block" />
                but on how real people reason, decide, and solve problems.
                <br className="hidden md:block" />
                Kora specializes in Human Data — to help AI learn from how great
                people work
              </p>

              <h3 className="text-blue-600 text-xl md:text-2xl font-semibold mb-6 text-center lg:text-left">Why Human Data?</h3>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* 右侧CardSwap区域 */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-none" style={{ 
              height: window.innerWidth < 768 ? '400px' : '500px',
              position: 'relative'
            }}>
              <CardSwap
                width={window.innerWidth < 768 ? 280 : window.innerWidth < 1024 ? 320 : 400}
                height={window.innerWidth < 768 ? 350 : window.innerWidth < 1024 ? 400 : 450}
                cardDistance={window.innerWidth < 768 ? 40 : 60}
                verticalDistance={window.innerWidth < 768 ? 50 : 70}
                delay={3000}
                pauseOnHover={true}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    Human Data
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    The most impactful AI systems aren't just trained on code or content-
                    but on how real people reason, decide, and solve problems.
                    Kora specializes in Human Data — to help AI learn from how great people work
                  </p>
                </Card>
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    AI Training Excellence
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Our platform provides comprehensive AI training solutions that go beyond traditional approaches, 
                    focusing on real-world applications and human-centered design principles.
                  </p>
                </Card>
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                    Future of Work
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Discover how human expertise and AI capabilities combine to create 
                    unprecedented opportunities in the evolving landscape of digital work.
                  </p>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HumanData