/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const slug = (props) => {

  const blog = (props.blog[0])
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
      {/* <div className='p-8 justify-center'>
        <div className='bg-blue-100 p-3 rounded-xl m-4'>
          <h1 className='font-bold text-2xl mt-1'>{blog && blog.title}</h1>
          <p className='mt-2'>{blog && blog.content}</p>
          <p className='mt-2 font-bold'>Author: {blog && blog.author}</p>
        </div>
      </div> */}
      <section className='pb-40 pt-14'>
        <div className='text-center w-11/12 md:w-4/5 m-auto'>
          <h1 className='text-4xl font-bold font-primary text-primary tracking-wider py-5'>{blog && blog.title}</h1>
          <hr className='bg-gray-900 h-0.5 w-2/5 m-auto border-none' />
          <p className='text-lg font-primary font-normal md:leading-8 md:tracking-wide text-justify py-5'>{blog && blog.content}</p>
          <h3 className='font-primary text-dark text-xl font-semibold'>Author:  {blog && blog.author}</h3>
        </div>
      </section>
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