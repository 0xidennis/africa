import React from 'react'
import {useState} from 'react'
import BuyerNav from './BuyerNav'
import MainContent from './MainContent'
import BuyerSideBar from './BuyerSideBar'

const BuyerDash = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
       <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <BuyerSideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <BuyerNav onMenuClick={() => setSidebarOpen(true)} />
        <MainContent />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
    </div>
  )
}

export default BuyerDash