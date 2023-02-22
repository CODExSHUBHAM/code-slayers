/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar/navbar'

function slug(props) {

  const blog = (props.blog)
  // const router = useRouter();
  // const [blog, setblog] = useState()

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => { return a.json(); })
  //     .then((data) => {
  //       setblog(data)
  //     })

  // }, [router.isReady]);

  return (

    <>
      <Navbar />

      <div className='p-8 justify-center'>
        <div className='bg-blue-100 p-3 rounded-xl m-4'>
          <h1 className='font-bold text-2xl mt-1'>{blog && blog.title}</h1>
          <p className='mt-2'>{blog && blog.content}</p>
          <p className='mt-2 font-bold'>Author: {blog && blog.author}</p>
        </div>
      </div>
    </>

  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let blog = await data.json();
  return {
    props: { blog }, // will be passed to the page component as props
  }
}

export default slug