/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='bg-[url("../public/images/heroImg.jpg")] bg-fixed bg-contain md:bg-cover bg-center h-96 md:min-h-screen'>
        <div className='bg-blue-900 bg-opacity-50 h-96 md:min-h-screen flex items-center justify-center backdrop-blur-sm'>
          <div className='inline-block text-center'>
            <p className='hidden md:block font-primary font-bold text-3xl lg:text-5xl w-full text-secondary border-r-4 border-purple-900 overflow-hidden whitespace-nowrap typing'>"Learn to Code - Discover Your Possibilities!"</p>
            <p className='md:hidden font-primary font-bold text-2xl w-fit m-auto text-secondary overflow-hidden whitespace-nowrap'>"Learn to Code"</p>
            <p className='md:hidden font-primary font-bold text-2xl  text-secondary border-r-4 border-purple-900 overflow-hidden whitespace-nowrap typing'>"Discover Your Possibilities!"</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection