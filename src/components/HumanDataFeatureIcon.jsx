const HumanDataFeatureIcon = ({ iconPath }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
    </svg>
  )
}

export default HumanDataFeatureIcon