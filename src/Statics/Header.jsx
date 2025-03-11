import React from 'react'
import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import logo from '../assets/logo/from.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
        <header className="bg-[#ffff] text-white">
      <div className="container mx-auto   bg-[#523523]">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            {/* <image
              src={logo}
              width={120}
              height={40}
              alt="From Africa Logo"
              className="h-10 w-auto"
            /> */}
             <img src={logo} width={120} height={40} alt="" className='h-10 w-auto ml-3' />
          </a>
          

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 bg-white">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for product, brand or category"
                className="w-full py-2 pl-5 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className='bg-[#523523]'>
              <button className="absolute right-0 top-0 h-full px-3 text-amber-500">
                <Search className="h-5 w-5" />
              </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 mr-20">
            <a href="/signin" className="text-white hover:text-amber-200">
              Sign In
            </a>
            <a
              href="/signup"
              className="bg-[#eba91c] hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden md:flex items-center justify-between py-2  border-white-800 bg-white ">
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2 text-black">
                <span>All Categories</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
          </div>
         <div className='ml-200 justify-between  space-x-15 '>
         <a href="/manufacturers" className="py-2 hover:text-amber-300 text-black ">
              Manufacturers
            </a>
            <a href="/contact" className="py-2 hover:text-amber-300 text-black">
              Contact Us
            </a>
            <a href="/help" className="py-2 hover:text-amber-300 text-black">
              Help
            </a>
         </div>
          <a
            href="/become-supplier"
            className="text-sm border border-black text-black px-3 py-1 rounded hover:bg-amber-400 hover:text-[#5c3c28] transition-colors mr-20"
          >
            Become a supplier
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-800">
            <div className="flex mb-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for product, brand or category"
                  className="w-full py-2 pl-4 pr-10 rounded-md text-gray-800 focus:outline-none"
                />
                <button className="absolute right-0 top-0 h-full px-3 text-amber-500">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="/all-categories" className="py-2 hover:text-amber-300">
                All Categories
              </a>
              <a href="/manufacturers" className="py-2 hover:text-amber-300">
                Manufacturers
              </a>
              <a href="/contact" className="py-2 hover:text-amber-300">
                Contact Us
              </a>
              <a href="/help" className="py-2 hover:text-amber-300">
                Help
              </a>
              <a href="/become-supplier" className="py-2 hover:text-amber-300">
                Become a supplier
              </a>
              <div className="pt-2 flex space-x-4">
                <a href="/signin" className="text-white hover:text-amber-200">
                  Sign In
                </a>
                <a
                  href="/signup"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </div>
  )
}

export default Header