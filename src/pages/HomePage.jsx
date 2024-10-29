import React from 'react'
import NavBar from '../components/nav/NavBar'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <div className='p-'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default HomePage
