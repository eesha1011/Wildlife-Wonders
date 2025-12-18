import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const baseClass = "text-center cursor-pointer rounded-md px-2";
    const activeClass = "bg-green-500 text-center font-semibold hover:bg-green-400 p-1";
    const inactiveClass = "hover:bg-white hover:text-center hover:font-semibold hover:text-green-700 p-1";

  return (
    <nav className='bg-green-600 text-white text-lg p-4 flex justify-between gap-4'>
        <h2 className='font-semibold'>🐾 Wildlife Wonders</h2>
        <div className='flex justify-evenly gap-8 '>
            <Link to='/' className={`${baseClass} ${location.pathname === "/" ? activeClass : inactiveClass}`}>Home</Link>
            <Link to='/report' className={`${baseClass} ${location.pathname === "/report" ? activeClass : inactiveClass}`}>Report</Link>
            <Link to='/admin'className={`${baseClass} ${location.pathname === "/admin" ? activeClass : inactiveClass}`}>Admin</Link>
        </div> 
        
    </nav>
  )
}
