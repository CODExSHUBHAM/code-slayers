import { React, useState, useEffect } from 'react'

const Postblog = () => {

  const initialValues = {
    "title": "", "author": "", "slug": "", "content": ""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submited, setSubmited] = useState(false);
  const [isSubmitSucces, setIsSubmitSucess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues));
    setSubmited(true);
    // console.log(formValues)
  }

  const validation = (values) => {
    const errors = {}

    if (!values.title) {
      errors.title = " title is required! "
    }
    if (!values.slug) {
      errors.slug = " slug is required! "
    }
    if (!values.author) {
      errors.author = " author is required! "
    }
    if (!values.content) {
      errors.content = " content is required! "
    }

    return errors
  };

  useEffect(() => {

    const sendData = (formValues) => {

      let data;
      let error;

      fetch('http://localhost:3000/api/postblogs', {
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
      }
    }

    if (Object.keys(formErrors).length === 0 && submited) {
      sendData(formValues)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, submited])

  return (
    <section className='pb-40 pt-10'>
      <div className='w-4/5 m-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-primary text-primary font-semibold'>Post Your Blog Here</h1>
        </div>
        <div className='p-4'>
          <form onSubmit={submitForm}>
            <div className='flex flex-col w-3/5 m-auto'>
              <label htmlFor="title" className='leading-7 text-sm font-medium text-black tracking-wider'>Title</label>
              <input type="text" value={formValues.title} onChange={handleChange} name="title" id="title" className='w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <p className="text-gray-700 text-sm font-bold p-1">{formErrors.title}</p>
              <label htmlFor="slug" className='leading-7 text-sm font-medium text-black tracking-wider'>Slug</label>
              <input type="text" value={formValues.slug} onChange={handleChange} name="slug" id="slug" className='w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <p className="text-gray-700 text-sm font-bold p-1">{formErrors.slug}</p>
              <label htmlFor="author" className='leading-7 text-sm font-medium text-black tracking-wider'>Author</label>
              <input type="text" value={formValues.author} onChange={handleChange} name="author" id="author" className='w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              <p className="text-gray-700 text-sm font-bold p-1">{formErrors.author}</p>
              <label htmlFor="content" className='leading-7 text-sm font-medium text-black tracking-wider'>Blog</label>
              <textarea value={formValues.content} onChange={handleChange} name="content" id="content" placeholder='Write Your Blog Here' className="w-full bg-gray-100 rounded border border-gray-300 focus:border-purple-500 h-80 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out" />
              <p className="text-gray-700 text-sm font-bold p-1">{formErrors.content}</p>
              <div className='text-center'>
                <button className="flex text-white bg-primary border-0 px-8 p-2 my-10 mx-auto w-fit focus:outline-none hover:bg-purple-900 rounded text-lg">
                  SUBMIT
                </button>
                {isSubmitSucces && (<p className="text-gray-700 text-sm font-bold p-1">Blog Posted Succesfully</p>)}
                {isSubmitSucces === false && (<p className="text-gray-700 text-sm font-bold p-1">Please try again!</p>)}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Postblog