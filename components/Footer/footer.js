/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import whiteLogo from '../../public/White Logo.png';
import arrow from '../../public/Icons/right-arrow.png';

function Footer() {
  return (
    <>
      <div className='flex items-center justify-between h-40 bg-blue-100 w-3/5 mx-auto mt-10 rounded-2xl z-100 -mb-16 relative p-10'>
        <div>
          <h1 className='text-3xl text-primary font-primary font-semibold'>Want to write a blog?</h1>
          <p className='font-medium pt-2'>Submit your blog here, and become a CODESLAYER</p>
        </div>
        <button className='flex items-center text-white bg-primary border-0 px-8 p-3 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-xl'>Get Started <Image src={arrow} alt="arrow" width={20} height={20} className='ml-2 pt-1' /></button>
      </div>
      <div className='bg-dark h-80 flex items-end px-20 py-8 z-0'>
        <div className='w-80 mb-32'>
          <Image src={whiteLogo} alt='white-logo' />
        </div>
        <div className='px-20 pb-2'>
          <h2 className='text-white font-medium text-lg'>Navigate</h2>
          <ul className='text-secondary underline'>
            <li className='p-1'><Link href='/'>Home</Link></li>
            <li className='p-1'><Link href='/about'>About</Link></li>
            <li className='p-1'><Link href='/blog'>Blog</Link></li>
            <li className='p-1'><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className='px-20 pb-2'>
          <h2 className='text-white font-medium text-lg'>Famous Posts</h2>
          <ul className='text-secondary underline'>
            <li className='p-1'><Link href='blogpost/Javascript'>Javascript</Link></li>
            <li className='p-1'><Link href='blogpost/sql'>Sql</Link></li>
            <li className='p-1'><Link href='blogpost/react'>React Js</Link></li>
            <li className='p-1'><Link href='blogpost/web-dev'>Web Development</Link></li>
          </ul>
        </div>
        <div className='px-16 pb-3'>
          <h2 className='text-white font-medium text-lg'>Stay Up to Date</h2>
          <p className='w-48 text-secondary mt-4'>Subscribe our newsletter to get latest updates.</p>
          <div className='flex mt-4'>
            <input placeholder='enter email to subscribe' type="email" name="email" id="news-letter-email" className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            <button className='flex text-white bg-primary border-0 px-8 p-2 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-md'>Subscibe</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer