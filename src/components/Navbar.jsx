import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const baseClass = "font-semibold cursor-pointer rounded-md px-2";
    const activeClass = "bg-green-300 hover:bg-green-200";
    const inactiveClass = "hover:bg-neutral-200";

  return (
    <nav className='bg-green-600 text-white text-lg p-4 flex justify-between gap-6'>
        <h2 className='font-semibold'>🐾 Wildlife Wonders</h2>
        <div className='flex justify-evenly gap-10 '>
            <Link to='/' className={`${baseClass} ${location.pathname === "/" ? activeClass : inactiveClass}`}>Home</Link>
            <Link to='/report' className={`${baseClass} ${location.pathname === "/report" ? activeClass : inactiveClass}`}>Report</Link>
            <Link to='/admin'className={`${baseClass} ${location.pathname === "/admin" ? activeClass : inactiveClass}`}>Admin</Link>
        </div> 
        
    </nav>
  )
}
