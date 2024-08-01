import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'

const RootLayout = () => {
  return (
    <div>
        {/* <Navbar/> */}

            <Outlet/>


    </div>
  )
}

export default RootLayout