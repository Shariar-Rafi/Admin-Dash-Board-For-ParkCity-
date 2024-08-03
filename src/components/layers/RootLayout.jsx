import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const RootLayout = () => {
  return (

    <div className='flex'>
      <Sidebar />

      <Outlet />
    </div>
  )
}

export default RootLayout