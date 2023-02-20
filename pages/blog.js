import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/navbar';
import Link from 'next/link';


function Blog() {

  const [blog, setblog] = useState([])

  useEffect(() => {
    console.log('hello')
    fetch('http://localhost:3000/api/blogs')
      .then((a) => { return a.json(); })
      .then((data) => {
        setblog(data)
      })
  }, []);

  return (
    <>
      <Navbar />

      <div className='p-8 flex justify-center'>

        {blog.map((blogitem) => {
          return <div key={blogitem.slug} className='bg-blue-100 w-80 p-3 rounded-xl m-4'>
            <Link href={'/blogpost/javascript'}><h1 className='font-bold text-2xl mt-1'>{blogitem.title}</h1></Link>
            <p className='mt-2'>{blogitem.content.substr(0, 250)}</p>
          </div>

        })}

      </div>
    </>
  )
}

export default Blog