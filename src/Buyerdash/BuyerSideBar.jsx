import React from 'react'
import logo from '../assets/logo/from.png'

import { X, LayoutDashboard, MessageSquare, ShoppingCart, Settings, HelpCircle } from "lucide-react"

const BuyerSideBar = ({isOpen, onClose}) => {
    const menuItems = [
        { icon: LayoutDashboard, label: "My dashboard", active: true },
        { icon: MessageSquare, label: "Messages", active: false },
        { icon: ShoppingCart, label: "Order", active: false },
        { icon: Settings, label: "Settings", active: false },
        { icon: HelpCircle, label: "Support", active: false },
      ]

  return (
    <div>
     {/* Desktop Sidebar */}
     <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-[#523523]">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <div className="flex items-center h-16 px-4  ">
            <div className="flex items-center border-b border-[#523523] w-full">
              <div className="flex-shrink-0">
                 <img src={logo} width={120} height={40} alt="" className='h-10 w-auto ml-3 ' />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 pb-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  item.active ? "bg-[#885434] text-white" : "text-white hover:bg-[#885434] hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-[#523523] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded flex items-center justify-center mr-2">
              </div>
              <div className="flex-shrink-0">
                 <img src={logo}  height={10} alt="" className='h-8 w-auto ml-3 ' />
              </div>
            </div>
            <button onClick={onClose} className="text-white hover:text-gray-300">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 pb-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  item.active ? "bg-[#885434] text-white" : "text-white hover:bg-[#885434] hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

    </div>
  )
}

export default BuyerSideBar