import React from 'react'
import { useState } from "react"
import Sidebar from '../Dashboards/Sidebar'
import Navbar from '../Dashboards/Navbar'
import SellerProduct from '../Dashboards/SellerProduct'

const SellerProductPage = () => {
     const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
        <div>
         <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <SellerProduct/>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
    </div>
    </div>
  )
}

export default SellerProductPage