import React from 'react'

function navbar() {
  return (
    <div>
      <ul className="flex font-bold justify-center bg-slate-200">
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
        <li className="p-2">Blog</li>
        <li className="p-2">Contact</li>
      </ul>
    </div>
  );
}

export default navbar;
