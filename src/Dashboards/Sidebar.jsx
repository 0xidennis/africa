import React, { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo/from.png'
import { Building2, BarChart3, Package, MessageSquare, ShoppingCart, HelpCircle, ChevronDown, X } from "lucide-react"

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Building2, label: "Business", active: true, path: "" },
    { icon: BarChart3, label: "Overview", active: false,path: "/sellerdash/overview" },
    { icon: Package, label: "Product", active: false, hasDropdown: true, path: "/sellerdash/sellerproduct" },
    { icon: MessageSquare, label: "Messages", active: false,path: "/sellerdash/messages" },
    { icon: ShoppingCart, label: "Order", active: false,path: "/sellerdash/orders" },
    { icon: HelpCircle, label: "Support", active: false,path: "/sellerdash/support" },
  ]
  
  return (
    <>
     {/* Sidebar */}
     <div
     className={`
     fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#523523] transform transition-transform duration-300 ease-in-out
     ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
   `}
   >
     <div className="flex flex-col h-full">
       {/* Logo */}
       <div className="flex items-center justify-between p-6">
         <div className="flex items-center space-x-2 border-b border-[#fff4] w-full ">
           <div className="w-8 h-8  rounded flex items-center justify-center">
           </div>
           <div className="flex-shrink-0">
                           <img src={logo} width={120} height={40} alt="" className='h-10 w-auto ml-3 ' />
                        </div>
         </div>
         <button onClick={onClose} className="lg:hidden text-white hover:text-gray-300">
           <X size={24} />
         </button>
       </div>

       {/* Navigation */}
       <nav className="flex-1 px-4 space-y-2">
         {menuItems.map((item) => (
           <Link 
           to={item.path} 
           key={item.label}
           className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}
         >
           <div key={item.label} className="mb-2">
             <button
               className={`
               w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors
               ${item.active ? " text-white" : "text-white hover:bg-rgba(235, 169, 28, 0.2) hover:text-white"}
             `}
             >
               <div className="flex items-center space-x-3">
                 <item.icon size={20} />
                 <span className="font-medium">{item.label}</span>
               </div>
               {item.hasDropdown && <ChevronDown size={16} />}
             </button>
           </div>
           </Link>
         ))}
       </nav>
     </div>
   </div>
   </>
  )
}

export default Sidebar