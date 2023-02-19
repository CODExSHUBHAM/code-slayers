import React from 'react'
import Link from 'next/link';

function navbar() {
  return (
    <div className='flex justify-between bg-slate-200 px-20 py-2'>
      <div>
        <h1 className='text-2xl font-bold font-sans'>codeSlayers</h1>
      </div>
      <div>
        <ul className='flex font-bold justify-center '>
          <li className='p-2'><Link href='/'>Home</Link></li>
          <li className='p-2'><Link href='/about'>About</Link></li>
          <li className='p-2'><Link href='/blog'>Blog</Link></li>
          <li className='p-2'><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default navbar;
