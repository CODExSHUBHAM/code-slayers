import React from 'react'
import Navbar from '@/components/Navbar/navbar'
import Form from '@/components/Form/form'
import Footer from '@/components/Footer/footer'

function contact() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-2/4 m-auto text-center py-10 items-center'>
        <h1 className='text-3xl font-primary font-medium text-primary'>Connect with us</h1>
        <p className='mt-5 w-9/12 font-normal'>Thank you for visiting our website. If you have any questions or comments about our products or services, please contact us using the form below. We look forward to hearing from you and assisting you in any way we can.</p>
      </div>
      <Form />
      <Footer />

    </>
  )
}

export default contact