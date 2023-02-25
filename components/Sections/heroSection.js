/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='bg-[url("../public/images/heroImg.jpg")] bg-fixed bg-cover bg-center min-h-screen'>
        <div className='bg-blue-900 bg-opacity-50 min-h-screen flex items-center justify-center backdrop-blur-sm'>
          <h1 className='text-5xl font-bold text-secondary font-primary'>"Learn to Code - Discover Your Possibilities!"</h1>
        </div>
      </div>
    </>
  )
}

export default HeroSection