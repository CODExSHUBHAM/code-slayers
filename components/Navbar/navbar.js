/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png'

function navbar() {
  return (
    <div className='flex justify-between items-center bg-secondary px-20 py-2'>
      <div className='items-center'>
        <a href="/"><Image src={logo} alt='logo' width={220} /></a>
      </div>
      <div className='items-center'>
        <ul className='flex font-medium justify-center font-primary text-primary'>
          <li className='p-2 px-4 hover:underline'><Link href='/'>HOME</Link></li>
          <li className='p-2 px-4 hover:underline'><Link href='/about'>ABOUT</Link></li>
          <li className='p-2 px-4 hover:underline'><Link href='/blog'>BLOG</Link></li>
          <li className='p-2 px-4 hover:underline'><Link href='/contact'>CONTACT</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default navbar;
