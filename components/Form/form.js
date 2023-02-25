import React, { useState, useEffect } from 'react'

const Form = () => {

  const initialValues = { name: "", email: "", message: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({});
  const [checked, setChecked] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [isSubmitSucces, setIsSubmitSucess] = useState(null)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleCheck = (e) => {
    if (checked === false) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues, checked));
    setSubmited(true);
    // console.log(formValues)
  }

  const validation = (values, checked) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = " Name is required! "
    }
    if (!values.email) {
      errors.email = " Email is required! "
    }
    else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email adress"
    }
    if (!values.message) {
      errors.message = " Message is required! "
    }
    if (checked === false) {
      errors.checked = " Please allow! "
    }

    return errors
  };

  useEffect(() => {

    const sendData = (formValues) => {

      let data;
      let error;

      fetch('http://localhost:3000/api/contact', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
        .then((response) => response.text())
        .then((d) => {
          // console.log('Success:', data);
          data = d
        })
        .catch((err) => {
          // console.error('Error:', error);
          error = err
        });

      if (error) {
        setIsSubmitSucess(false)
      }
      else {
        setIsSubmitSucess(true)
        setFormValues(initialValues)
        setChecked(false)
      }
    }

    if (Object.keys(formErrors).length === 0 && submited) {
      sendData(formValues)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, submited])




  return (
    <>
      <div className='w-2/5 mx-auto pb-10'>
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <div className='flex flex-col w-full p-2'>
              <label htmlFor="name" className='leading-7 text-sm text-black'>Name</label>
              <input value={formValues.name} onChange={handleChange} type="text" id='name' name='name' placeholder='write your name' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <p className="text-gray-700 text-sm font-bold">{formErrors.name}</p>
            </div>
            <div className='flex flex-col w-full p-2'>
              <label htmlFor="email" className='leading-7 text-sm text-black'>Email</label>
              <input value={formValues.email} onChange={handleChange} type="email" name="email" id="email" placeholder='write your email' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <p className="text-gray-700 text-sm font-bold">{formErrors.email}</p>
            </div>
          </div>
          <div className='flex flex-col p-2'>
            <label htmlFor="message" className='leading-7 text-sm text-black'>Message</label>
            <textarea value={formValues.message} onChange={handleChange} name="message" id="message" placeholder='type your message here' className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
            <p className="text-gray-700 text-sm font-bold">{formErrors.message}</p>
          </div>
          <div className="flex p-2 items-center">
            <input type="checkbox" name="check" id="check" onChange={handleCheck} className="p-1" />
            <label htmlFor="message" className='p-1 leading-7 text-sm text-black'>I allow you to send my details to your server</label>
            <p className="text-gray-700 text-sm font-bold p-1">{formErrors.checked}</p>
          </div>
          <div className='flex items-center'>
            <button className="flex text-white bg-primary border-0 px-8 p-2 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              SUBMIT
            </button>
            {isSubmitSucces && (<p className="mx-5 text-base text-green-300">Thanks for contacting Us</p>)}
            {isSubmitSucces === false && (<p className="mx-5 text-base text-red-400">Please try again!</p>)}
          </div>
        </form>
      </div>
    </>
  )
}

export default Form;