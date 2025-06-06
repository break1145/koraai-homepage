export const ANIMATION_CONFIG = {
  leftSlide: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  rightSlide: {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  featureItem: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    getTransition: (index) => ({ duration: 0.5, delay: index * 0.1 })
  }
}

export const STYLES = {
  background: 'linear-gradient(to right, #f8fafc, #C0CDF4)',
  titleGradient: {
    background: 'linear-gradient(45deg, rgb(26, 67, 233), rgb(30, 70, 235))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'rgb(26, 67, 233)',
    position: 'relative'
  },
  shineEffect: {
    background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
    backgroundSize: '250% 100%',
    animation: 'shine 3s infinite',
    pointerEvents: 'none'
  }
}

export const CONTENT = {
  title: {
    main: 'AI-native talent community for',
    highlight: 'a new work era'
  },
  circularText: 'AI-NATIVE TALENT COMMUNITY '
}

export const FEATURES_DATA = [
  {
    id: 'flexible-work',
    title: 'Work your way — part-time native',
    description: 'Contribute on your own terms — even just one hour at a time',
    iconPath: 'M12 6V12M12 12V18M12 12H18M12 12H6'
  },
  {
    id: 'top-earnings',
    title: 'Earn like the top 1%',
    description: 'Work with top AI labs, startups and frontier teams to earn exceptional pay',
    iconPath: 'M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    iconType: 'fill'
  },
  {
    id: 'authentic-profile',
    title: 'Show who you really are',
    description: '360° profiles + AI-native testing — built to reflect your real capabilities',
    iconPath: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
  },
  {
    id: 'talent-community',
    title: 'A new kind of talent community',
    description: 'Join the top minds shaping work, identity, and meaning in the AI age',
    iconPath: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
  }
]