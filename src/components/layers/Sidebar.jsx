import React, { useState } from 'react'
import { RiAdminFill } from "react-icons/ri";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from 'react-icons/bs';
import { HiOutlineMail } from "react-icons/hi";
import { FiBox } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineTableChart } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";





const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { 
      title: "Email", 
      icon: <HiOutlineMail/>,
      spacing: true, 
      submenu: true,
      submenuItems: [
        { title: "Inbox" },
        { title: "Read" },
        { title: "Compose" },

      ],
    
    },
    { title: "Chat",  icon: <IoChatbubbleOutline/> },
    { title: "Calender ",    icon: <SlCalender /> },
    {
      title: "Ui kits",
      spacing: true,
      icon: <FaPen/>,
      submenu: true,
      submenuItems: [
        { title: "Accordion " },
        { title: "Alert" },
        { title: "Badges" },

      ],
    },
    { title: "Chart", icon: <FaChartBar/> },
    { title: "Tables", icon: <MdOutlineTableChart /> },
    { title: "Documentation", spacing: true, icon: <FaHashtag /> },
  ];
  return (

    <>
      <div className={`bg-dark-purple h-screen p-5 pt-8 w-72 relative ${open ? "w-72" : "w-20"} duration-300 `}>
        <BsArrowLeftShort className=
          {`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className='inline-flex'>
          <RiAdminFill className={`bg-amber-300 text-4xl p-1 rounded-md cursor-pointer block float-left mr-2 ${open && "rotate-[360deg]"} duration-300`} />
          <h1 className={`text-white origin-left font-medium text-2xl ${!open && "scale-0"} duration-300`}>Admin</h1>
        </div>

        <div className={`flex items-center rounded-md bg-light-white
           mt-6 px-4 py-2 ${!open ? "px-2.5" : "px-4"}`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />

          <input type="search" placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
        </div>

        <div className='pt-2'>
          <ul>
            {Menus.map((menu, index) => (
              <>
                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white
                rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                  <span className='text-2xl block float-left'>
                    {menu.icon? menu.icon : <FiBox />}
                  </span>
                  <span className={`text-base font-medium flex-1 ${!open && "hidden"} duration-300`}>
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown className={`${submenuOpen && "rotate-180"} duration-200`}
                    onClick={() => setSubmenuOpen(!submenuOpen)} />
                  )}
                </li>

                {menu.submenu && submenuOpen && open &&(
                  <ul>
                    {
                      menu.submenuItems.map((submenuItems, index) => (

                        <>
                        <li key={index} 
                        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white
                          rounded-md px-5`}
                        >
                          {submenuItems.title}
                        </li>
                        </>

                      ))

                    }
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>

  )
}

export default Sidebar
