export const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  logoFadeIn: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  scaleAnimation: {
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 2, repeat: Infinity }
  },
  buttonHover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
  arrowHover: {
    whileHover: { x: 5 },
    transition: { type: "spring", stiffness: 400 }
  }
}

export const GRID_STYLES = {
  backgroundImage: `
    linear-gradient(rgba(0,102,255,0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,102,255,0.4) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
  backgroundPosition: '0 0, 0 0'
}

export const CONTENT_TEXT = {
  title: {
    line1: "Smarter Teams.",
    line2: "Smarter Work."
  },
  subtitle: "with Kora AI",
  description: "Kora is the AI-native talent platform — connecting top talent with the world's fastest-growing AI companies and labs",
  buttons: {
    primary: "Join as Talent",
    secondary: "Find Experts"
  }
}