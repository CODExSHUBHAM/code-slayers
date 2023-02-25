/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png'

function navbar() {
  return (
    <div className='flex justify-between items-center bg-blue-100 px-20 py-2'>
      <div className='items-center'>
        <a href="/"><Image src={logo} alt='logo' width={220} /></a>
      </div>
      <div className='flex  items-center'>
        <input type="text" placeholder="search blogs" className='p-1 rounded-2xl border outline-none placeholder:text-md placeholder:text-center placeholder:text-black' />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 mx-2">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd" />
        </svg>
      </div>
      <div className='items-center'>
        <ul className='flex font-bold justify-center '>
          <li className='p-2 mx'><Link href='/'>Home</Link></li>
          <li className='p-2 mx'><Link href='/about'>About</Link></li>
          <li className='p-2 mx'><Link href='/blog'>Blog</Link></li>
          <li className='p-2 mx'><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default navbar;
