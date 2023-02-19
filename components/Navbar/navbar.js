import React from 'react'

function navbar() {
  return (
    <div className='flex justify-between bg-slate-200 px-20 py-2'>
      <div>
        <h1 className='text-2xl font-bold font-sans'>codeSlayers</h1>
      </div>
      <div>
        <ul className='flex font-bold justify-center '>
          <li className='p-2'>Home</li>
          <li className='p-2'>About</li>
          <li className='p-2'>Blog</li>
          <li className='p-2'>Contact</li>
        </ul>
      </div>

    </div>
  );
}

export default navbar;
