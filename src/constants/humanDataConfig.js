export const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  featureItemSlide: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    getTransition: (index) => ({
      duration: 0.5,
      delay: index * 0.1
    })
  }
}

export const CONTENT_TEXT = {
  title: {
    main: "Human Data That Actually",
    highlight: "Improves AI"
  },
  description: {
    line1: "The most impactful AI systems aren't just trained on code or content-",
    line2: "but on how real people reason, decide, and solve problems.",
    line3: "Kora specializes in Human Data — to help AI learn from how great",
    line4: "people work"
  },
  sectionTitle: "Why Human Data?"
}

export const FEATURES_DATA = [
  {
    id: 1,
    iconPath: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    text: "Moves beyond synthetic or crowdsourced labels"
  },
  {
    id: 2,
    iconPath: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75M4.5 6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 011.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 011.5 2.25h1.5c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C1.095 4.01.25 4.973.25 6.108V19.5A2.25 2.25 0 002.5 21.75h15A2.25 2.25 0 0019.75 19.5v-13.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v13.25",
    text: "Captures high-context, expert-level workflows"
  },
  {
    id: 3,
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    text: "Powers agent training, evaluation & post-training tuning"
  }
]

export const CARD_DATA = [
  {
    id: 1,
    title: "Human Data",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    description: "The most impactful AI systems aren't just trained on code or content- but on how real people reason, decide, and solve problems. Kora specializes in Human Data — to help AI learn from how great people work"
  },
  {
    id: 2,
    title: "AI Training Excellence",
    gradient: "from-green-400 via-teal-500 to-blue-500",
    description: "Our platform provides comprehensive AI training solutions that go beyond traditional approaches, focusing on real-world applications and human-centered design principles."
  },
  {
    id: 3,
    title: "Future of Work",
    gradient: "from-purple-400 via-pink-500 to-red-500",
    description: "Discover how human expertise and AI capabilities combine to create unprecedented opportunities in the evolving landscape of digital work."
  }
]

export const RESPONSIVE_CONFIG = {
  cardSwap: {
    mobile: {
      width: 280,
      height: 350,
      cardDistance: 40,
      verticalDistance: 50,
      containerHeight: '400px'
    },
    tablet: {
      width: 320,
      height: 400,
      cardDistance: 60,
      verticalDistance: 70,
      containerHeight: '500px'
    },
    desktop: {
      width: 400,
      height: 450,
      cardDistance: 60,
      verticalDistance: 70,
      containerHeight: '500px'
    }
  }
}