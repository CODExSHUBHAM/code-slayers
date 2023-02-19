import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import Image from 'next/image'
import jsimage from '../public/images/js.jpg'

function blog() {
  return (
    <>
      <Navbar />
      <div className='bg-blue-200 w-64 h-80 p-1'>
        <Image src={jsimage} alt='blog-preview-img' width='300' height='300' />
        <h3 className='font-bold'>Javascript</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae dolore! Iste, porro. Et laboriosam sequi quod voluptatem nulla odit.</p>
      </div>
    </>
  )
}

export default blog