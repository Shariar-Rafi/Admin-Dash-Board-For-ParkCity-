import React from 'react'
import { IoMdArrowUp } from "react-icons/io";

const DashboardCard = () => {
  return (
    <div className='w-[576px] h-[138px] shadow-md flex p-6'>
      <div className="left flex flex-col bg-gray-500 gap-y-2" >
        <h2 className='text-[#0c0c0c] text-sm uppercase' >New Customers</h2>
        <p  className='text-[#0c0c0c] text-2xl'>3,897</p>
        <div className='flex gap-x-2 items-center'>
            <p className='text-green-900 text-sm' >{"+"}{3.3}%</p>
            <IoMdArrowUp className='text-green-900'/>
        </div>
      </div>

      <div className="right bg-blue-300 h-full">

      </div>
    </div>
  )
}

export default DashboardCard
