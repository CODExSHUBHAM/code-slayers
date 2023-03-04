/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Blog from "@/models/blog";
import mongoose from "mongoose";

const Blogs = (props) => {

  // const [blogs, setblogs] = useState(props.allBlogs)
  const blogs = (props.blogs)

  return (
    <>
      <section className="text-gray-600 body-font md:px-10 pb-20">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-3xl md:text-4xl font-primary font-semibold w-fit m-auto pb-10 text-primary'>EXPLORE ALL BLOG'S</h1>
          <div className="flex flex-wrap -m-4">
            {blogs.map((blogitem) => {
              return <div key={blogitem.slug} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-900  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative drop-shadow-xl">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{blogitem.title}</h1>
                  <p className="leading-relaxed mb-3 text-secondary">{blogitem.content.substr(0, 150)}...</p>
                  <Link className='text-indigo-500 inline-flex items-center' href={'/blogpost/' + blogitem.slug}>Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg></Link>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-400">By {blogitem.author}</h2>
                  </div>
                </div>
              </div>
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {

  const uri = process.env.MONGODB_URI

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(uri)
  }
  let blogs = await Blog.find()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }, // will be passed to the page component as props
  }
}

export default Blogs