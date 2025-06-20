import React from 'react'
import { Search, Bell, MessageCircle, User } from "lucide-react"
import logo from '../assets/logo/from.png'
import group from '../assets/logo/Group.png'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-[#523523] px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
           <img src={logo} width={120} height={40} alt="" className='h-10 w-auto ml-3 ' />
        </div>

        {/* Search Bar - Hidden on mobile, shown on md+ */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search products, stores and categories"
              className=" w-full px-4 py-2 pr-12 rounded-lg bg-[#ffff] border-0 focus:outline-none focus:ring-2 focus:ring-[#eba91c] text-gray-700 placeholder-gray-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#eba91c] hover:bg-orange-500 p-2 rounded-md transition-colors">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Right Side Icons and Profile */}
        <div className="flex items-center space-x-3">
          {/* Mobile Search Button */}
          <button className="md:hidden bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
            <Search className="h-5 w-5 text-white" />
          </button>

          {/* Notification Icons */}
          <button className="bg-white hover:bg-white/20 p-2 rounded-full transition-colors">
            <img src={group} alt="" />
          </button>

          <button className="bg-white hover:bg-white/20 p-2 rounded-full transition-colors">
          <Bell className="h-5 w-5 text-black" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block text-white">
              <div className="text-sm font-medium">Michelle Jan</div>
              <div className="text-xs text-white/70">michelle@example.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-3 hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products, stores and categories"
            className="w-full px-4 py-2 pr-12 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder-gray-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 p-2 rounded-md transition-colors">
            <Search className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar