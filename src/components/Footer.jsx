import React from 'react'

const Footer = () => {
  return (
    <div className="w-full py-4 flex justify-center items-center" style={{ background: 'linear-gradient(to right, #f8fafc, #C0CDF4)' }}>
      <div 
        className="text-4xl font-bold"
        style={{
          background: 'linear-gradient(45deg, rgb(26, 67, 233), rgb(30, 70, 235))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Kora
      </div>
    </div>
  )
}

export default Footer