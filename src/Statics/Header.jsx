import React from 'react'
import { useState } from "react"
import { Search, User, UserPlus } from "lucide-react"
import logo from '../assets/logo/from.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

  const categories = ['Clothing', 'Footwear', 'Accessories', 'Skincare', 'Bags', 'Traditionals'];
  return (
    <div>
      <header className="bg-amber-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="" />
          </div>

          {/* Search Bar - Hidden on mobile, shown on tablet and up */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brand or category"
                className="w-full px-4 py-2 lg:py-3 pr-12 text-gray-800 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition-colors">
                <Search className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Mobile Search Button */}
            <button className="md:hidden p-2 hover:bg-amber-800 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Sign In Button */}
            <button className="flex items-center space-x-1 lg:space-x-2 px-3 lg:px-4 py-2 hover:bg-amber-800 rounded-lg transition-colors">
              <User className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden sm:inline text-sm lg:text-base">Sign In</span>
            </button>

            {/* Sign Up Button */}
            <button className="flex items-center space-x-1 lg:space-x-2 px-3 lg:px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
              <UserPlus className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden sm:inline text-sm lg:text-base">Sign Up</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brand or category"
              className="w-full px-4 py-2 pr-12 text-gray-800 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header