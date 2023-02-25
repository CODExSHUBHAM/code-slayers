import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const Blog = (props) => {

  // const [blogs, setblogs] = useState(props.allBlogs)
  const blogs = (props.allBlogs)

  return (
    <>
      <section className='p-8 flex justify-center pb-40'>
        {blogs.map((blogitem) => {
          return <div key={blogitem.slug} className='bg-blue-100 w-80 p-3 rounded-xl m-4'>
            <Link href={'/blogpost/' + blogitem.slug}><h1 className='font-bold text-2xl mt-1'>{blogitem.title}</h1></Link>
            <p className='mt-2'>{blogitem.content.substr(0, 250)}...</p>
          </div>
        })}
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()
  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}

export default Blog