import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import menuicon from '../assets/logo/vector.png'

const SubNav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  
    const toggleCategories = () => {
      setIsCategoriesOpen(!isCategoriesOpen)
    }

  return (
    <div>
        <nav className="bg-white shadow-sm border-b-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section - Categories */}
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={toggleCategories}
                className="flex items-center space-x-2 text-gray-700   rounded-md px-3 py-2"
              >
                <img src={menuicon} alt="" />
                <span className="flex sm:inline-block text-sm font-medium">All Categories</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Categories dropdown */}
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Electronics
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Fashion
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Home & Garden
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sports
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Automotive
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center section - Navigation links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Manufacturers
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Help
            </a>
          </div>

          {/* Right section - CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-colors duration-200">
              Become a supplier
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Manufacturers
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Help
              </a>
              <div className="pt-2">
                <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md border border-gray-300">
                  Become a supplier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for dropdowns */}
      {(isCategoriesOpen || isMenuOpen) && (
        <div
          className="fixed inset-0 z-40 bg-grey bg-opacity-25"
          onClick={() => {
            setIsCategoriesOpen(false)
            setIsMenuOpen(false)
          }}
        />
      )}
    </nav>
    </div>
  )
}

export default SubNav