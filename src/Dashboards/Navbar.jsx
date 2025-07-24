import React from 'react'
import { Search, Bell, Mail, Menu } from "lucide-react"
import { useAuth } from '../context/AuthContext';
import boy from '../assets/image/images 1.png'

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuth() || {};

  // Function to get initials from fullName
  const getInitials = (name) => {
    if (!name) return 'AB'; // Default initials
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  return (
    <header className="bg-gray-50 px-4 lg:px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Left side - Mobile menu button and search */}
      <div className="flex items-center space-x-4 flex-1">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu size={20} />
        </button>

        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full pl-10 pr-4 py-2 rounded-md focus:ring-1 bg-white placeholder-gray-500 focus:ring-[#eba91c] focus:border-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Right side - Notifications and user profile */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 bg-white relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 bg-white">
          <Mail size={20} className="text-gray-600" />
        </button>

        {/* <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AB</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-semibold text-gray-900 text-sm">Ade Batife John</div>
            <div className="text-gray-500 text-xs">adebatifejohn@gmail.com</div>
          </div>
        </div> */}
             <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {getInitials(user?.fullName)}
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-gray-900 text-sm">
                {user?.fullName || 'User'}
              </div>
              <div className="text-gray-500 text-xs">
                {user?.email || 'user@example.com'}
              </div>
            </div>
          </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar