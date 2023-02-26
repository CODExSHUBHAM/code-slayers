/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useRef } from 'react';

const Navbar = () => {

  const toggleMenu = () => {
    if (ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('block')
      open.current.classList.remove('block')
      open.current.classList.add('hidden')
      close.current.classList.remove('hidden')
      close.current.classList.add('block')
    }
    else if (!ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('block')
      ref.current.classList.add('hidden')
      open.current.classList.remove('hidden')
      open.current.classList.add('block')
      close.current.classList.remove('block')
      close.current.classList.add('hidden')
    }
  }

  const ref = useRef()
  const open = useRef()
  const close = useRef()

  return (
    <>
      <div className='md:flex justify-between items-center bg-secondary p-4 md:px-20 md:py-2 shadow-md '>
        <div className='flex justify-between items-center'>
          <div className='items-center'>
            <a href="/"><Image src={logo} alt='logo' width={220} /></a>
          </div>
          <div onClick={toggleMenu}>
            <span ref={open} className='text-2xl text-primary block'><GiHamburgerMenu /></span>
            <span ref={close} className='text-2xl text-primary hidden' ><GrClose /></span>
          </div>
        </div>
        <div className='items-center hidden md:block'>
          <ul className='flex font-medium justify-center font-primary text-primary'>
            <li className='p-2 px-4 hover:underline'><Link href='/'>HOME</Link></li>
            <li className='p-2 px-4 hover:underline'><Link href='/about'>ABOUT</Link></li>
            <li className='p-2 px-4 hover:underline'><Link href='/blog'>BLOG</Link></li>
            <li className='p-2 px-4 hover:underline'><Link href='/contact'>CONTACT</Link></li>
          </ul>
        </div>
        <div ref={ref} className='items-center bg-secondary absolute right-0 w-full top-15 z-10 p-4 hidden'>
          <ul className='flex flex-col items-center font-medium text-xl justify-center font-primary tracking-widest text-primary'>
            <li className='p-2 px-4'><Link href='/'>HOME</Link></li>
            <li className='p-2 px-4'><Link href='/about'>ABOUT</Link></li>
            <li className='p-2 px-4'><Link href='/blog'>BLOG</Link></li>
            <li className='p-2 px-4'><Link href='/contact'>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
