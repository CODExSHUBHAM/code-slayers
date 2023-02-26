import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-primary font-medium title-font text-gray-900">Want to know more about CODE SLAYERS or have a suggestion..</h1>
            <Link href={'/contact'}>
              <button className="flex-shrink-0 text-white bg-primary border-0 py-2 px-7 focus:outline-none hover:bg-purple-900 rounded text-lg mt-10 sm:mt-0">Connect with Us</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cta