import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import Image from 'next/image'
import Link from 'next/link'
import jsimage from '../public/images/js.jpg'
import sqlimage from '../public/images/sql.jpg'
import reactimage from '../public/images/react.jpg'
import webimage from '../public/images/web.jpg'

function blog() {
  return (
    <>
      <Navbar />

      <div className='p-8 flex justify-center'>

        {/* Blog Card */}
        <div className='bg-blue-100 w-64 h-80 p-3 rounded-xl m-4'>
          <Image src={jsimage} alt='blog-preview-img' width='300' height='300' className='rounded-md' />
          <Link href={'/blogpost/javascript'}><h1 className='font-bold text-xl mt-1'>Javascript</h1></Link>
          <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae dolore! Iste, porro.</p>
        </div>

        <div className='bg-blue-100 w-64 h-80 p-3 rounded-xl m-4'>
          <Image src={sqlimage} alt='blog-preview-img' width='300' height='300' className='rounded-md' />
          <Link href={'/blogpost/sql'}><h1 className='font-bold text-xl mt-1'>SQL</h1></Link>
          <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae dolore! Iste, porro.</p>
        </div>

        <div className='bg-blue-100 w-64 h-80 p-3 rounded-xl m-4'>
          <Image src={reactimage} alt='blog-preview-img' width='300' height='300' className='rounded-md' />
          <Link href={'/blogpost/react'}><h1 className='font-bold text-xl mt-1'>React</h1></Link>
          <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae dolore! Iste, porro.</p>
        </div>

        <div className='bg-blue-100 w-64 h-80 p-3 rounded-xl m-4'>
          <Image src={webimage} alt='blog-preview-img' width='300' height='300' className='rounded-md' />
          <Link href={'/blogpost/web-dev'}><h1 className='font-bold text-xl mt-1'>Web Dev</h1></Link>
          <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae dolore! Iste, porro.</p>
        </div>

      </div>
    </>
  )
}

export default blog