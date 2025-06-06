const CommunityIcon = ({ iconPath, iconType = 'stroke', className = "w-6 h-6" }) => {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }

  if (iconType === 'fill') {
    return (
      <svg {...commonProps} fill="none">
        <path d={iconPath} fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg {...commonProps} fill="none">
      <path 
        d={iconPath} 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CommunityIcon