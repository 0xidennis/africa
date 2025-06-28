import React from 'react'


  import { Search,Bell,Mail,Menu} from "lucide-react"
const BuyerNav = ({ onMenuClick }) => {
  return (
    <div className='relative z-10 '>
        <header className="fixed top-0 left-0 right-0 bg-gray-50   lg:ml-64 z-50">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search ..."
              className=" w-full pl-10 pr-3 py-2  rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#eba91c] focus:border-[#eba91c] sm:text-sm"
            />
          </div>
        </div>

        {/* Right side icons and profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>

          {/* Mail */}
          <button className="p-2 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-colors">
            <Mail className="h-6 w-6" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
          <img
              className="h-10 w-10 rounded-full object-cover"
              src="/placeholder.svg?height=40&width=40"
              alt="Profile"
            />
            <div className="hidden sm:block text-right">
              <div className="text-sm font-medium text-gray-900">Ade Batife John</div>
              <div className="text-xs text-gray-500">adebatifejohn@gmail.com</div>
            </div>
           
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default BuyerNav