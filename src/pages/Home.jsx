import React from 'react'
import Sidebar from '../components/layers/Sidebar'   

const Home = () => {
  return (
    <div className='flex'>
            <Sidebar />

      
      <div className='flex flex-col'>
      <div className='text-2xl font-semibold p-7 '>Home Page</div>
      </div>
    </div>
  )
}

export default Home
