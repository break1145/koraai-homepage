import { CONTENT, STYLES } from '../constants/communityConfig'

const CommunityTitle = () => {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-left space-y-4">
        <div>{CONTENT.title.main}</div>
        <div style={STYLES.titleGradient}>
          <span className="relative inline-block">
            {CONTENT.title.highlight}
            <span 
              className="absolute inset-0" 
              style={STYLES.shineEffect}
            />
          </span>
        </div>
      </h2>
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  )
}

export default CommunityTitle