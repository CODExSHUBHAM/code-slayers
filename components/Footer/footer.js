/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import whiteLogo from '../../public/White Logo.png';
import arrow from '../../public/Icons/right-arrow.png';

const Footer = () => {
  return (
    <>
      <div className='text-center md:text-left flex flex-col md:flex-row items-center justify-between md:h-40 bg-blue-100 w-4/5 md:w-3/5 mx-auto rounded-2xl z-100 -mb-16 -mt-28 relative p-4 md:p-10 drop-shadow-2xl shadow-black'>
        <div>
          <h1 className='text-2xl md:text-3xl text-primary font-primary font-semibold'>Want to write a blog?</h1>
          <p className='font-medium text-sm md:text-base pt-2'>Submit your blog here, and become a CODESLAYER</p>
        </div>
        <Link href={'/submitblog'}>
          <button className='flex items-center text-white bg-primary border-0 px-4 md:px-8 p-2 md:p-3 md:mx-2 my-2 md:my-0 focus:outline-none hover:bg-purple-900 rounded text-xl'>Get Started <Image src={arrow} alt="arrow" width={20} height={20} className='ml-2 pt-1' /></button>
        </Link>
      </div>
      <div className='bg-dark md:h-96 flex flex-col justify-center items-center pb-10 md:pb-0  px-20 pt-16 z-0'>
        <div className='flex flex-col md:flex-row py-10'>
          <div className='w-80 mb-10 md:mb-32'>
            <Link href={'/'}><Image src={whiteLogo} alt='white-logo' /></Link>
          </div>
          <div className='flex justify-between'>
            <div className=' md:px-20 md:pb-2'>
              <h2 className='text-white font-medium text-lg'>Navigate</h2>
              <ul className='text-secondary underline'>
                <li className='p-1'><Link href='/'>Home</Link></li>
                <li className='p-1'><Link href='/about'>About</Link></li>
                <li className='p-1'><Link href='/blog'>Blog</Link></li>
                <li className='p-1'><Link href='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className=' md:px-20 md:pb-2'>
              <h2 className='text-white font-medium text-lg'>Famous Posts</h2>
              <ul className='text-secondary underline'>
                <li className='p-1'><Link href='blogpost/Javascript'>Javascript</Link></li>
                <li className='p-1'><Link href='blogpost/sql'>Sql</Link></li>
                <li className='p-1'><Link href='blogpost/react'>React Js</Link></li>
                <li className='p-1'><Link href='blogpost/web-dev'>Web Development</Link></li>
              </ul>
            </div>
          </div>
          <div className='py-5 md:py-0 md:px-16 md:pb-3'>
            <h2 className='text-white font-medium text-lg'>Stay Up to Date</h2>
            <p className='w-48 text-secondary mt-4'>Subscribe our newsletter to get latest updates.</p>
            <div className='flex flex-col md:flex-row mt-4'>
              <input placeholder='enter email to subscribe' type="email" name="email" id="news-letter-email" className='w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <button className='flex w-fit text-white bg-primary border-0 px-8 p-2 mt-4 md:mt-0 md:mx-2 focus:outline-none hover:bg-purple-900 rounded text-md'>Subscibe</button>
            </div>
          </div>
        </div>
        <div className='md:py-2 text-white flex flex-col md:flex-row text-center'>
          <h1>Copyright ©2023 All rights reserved | This blog is developed by </h1>
          <h2 className='text-secondary md:px-1'>CODExSHUBHAM</h2>
        </div>
      </div>
    </>
  )
}

export default Footer