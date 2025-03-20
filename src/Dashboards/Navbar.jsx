import React from 'react'
import { Bell, Mail } from "lucide-react";
import boy from '../assets/image/images 1.png'

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 ">
       
    <input type="text" placeholder="Search..." className="bg-white rounded px-3 py-2 w-1/3" />
    <div className="flex items-center gap-4">
       <button className="relative">
                    <Bell size={20} className="cursor-pointer" />
                    <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full w-2 h-2 flex items-center justify-center">
                      
                    </span>
                  </button>
      <button className="relative">
                    <Mail size={20} className="cursor-pointer"/>
                    <span className="absolute -top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-2 h-2 flex items-center justify-center">
                      
                    </span>
                  </button>
      <div className="flex items-center">
        <img src={boy} alt="profile" className="rounded-full" width={30} height={30} />
        <span className="ml-2">Ade Bative John</span>
      </div>
    </div>
  </div>
  )
}

export default Navbar