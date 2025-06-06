export const ANIMATION_CONFIG = {
  titleFadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  featuresFadeIn: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  featureItemSlide: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    getTransition: (index) => ({ duration: 0.5, delay: index * 0.1 })
  }
}

export const STYLES = {
  background: 'linear-gradient(to right, #f1f5f9, #C0CDF4)',
  gradientText: 'bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'
}

export const CONTENT = {
  title: {
    main: 'Your AI agent finds you the perfect',
    highlight: 'AI-native opportunity'
  },
  description: 'No matter your background or industry — if you have real talent, Kora helps you discover flexible, high-impact roles at the frontier of AI'
}

export const FEATURES_DATA = [
  {
    id: 'chat',
    title: 'Chat with Kora',
    description: 'Tell Kora about your skills and career goals',
    iconPath: 'M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z'
  },
  {
    id: 'analyze',
    title: 'AI Analyzes & Matches',
    description: 'Kora finds top-tier jobs that fit you best',
    iconPath: 'M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
  },
  {
    id: 'apply',
    title: 'Auto-Apply',
    description: 'Kora applies on your behalf — effortless hiring',
    iconPath: 'M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z'
  }
]