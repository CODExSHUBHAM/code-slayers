import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import Link from 'next/link'


function blog() {
  return (
    <>
      <Navbar />

      <div className='p-8 flex justify-center'>

        {/* Blog Card */}
        <div className='bg-blue-100 w-80 p-3 rounded-xl m-4'>
          <Link href={'/blogpost/javascript'}><h1 className='font-bold text-2xl mt-1'>Javascript</h1></Link>
          <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae dolore! Iste, porro.</p>
        </div>

      </div>
    </>
  )
}

export default blog