import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-green-600 text-white p-4 flex gap-6'>
        <h2>🐾 Wildlife Wonders</h2>
        <Link to='/'>Home</Link>
        <Link to='/report'>Rpoert</Link>
        <Link to='/admin'>Admin</Link>
    </nav>
  )
}
