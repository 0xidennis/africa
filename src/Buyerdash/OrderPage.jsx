import React from 'react'
import OrderRows from './OrderRows'
import OrderHeader from './OrderHeader'
import {useState} from 'react'
import BuyerNav from './BuyerNav'
import BuyerSideBar from './BuyerSideBar'

const mockOrders = [
    { id: "#1223", date: "08/21/2025", email: "michael@gmail.com", items: 3, status: "Pending" },
    { id: "#1223", date: "08/21/2025", email: "michael@gmail.com", items: 3, status: "Pending" },
    { id: "#1223", date: "08/21/2025", email: "michael@gmail.com", items: 3, status: "Pending" },
    { id: "#1223", date: "08/21/2025", email: "michael@gmail.com", items: 3, status: "Pending" },
    { id: "#1223", date: "08/21/2025", email: "michael@gmail.com", items: 3, status: "Pending" },
    { id: "#1223", date: "08/21/2025", email: "michael@gmail.com", items: 3, status: "Pending" },
    { id: "#1223", date: "08/21/2025", email: "michael@gmail.com", items: 3, status: "Pending" },
  ]

const OrderPage = () => {
     const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
       
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <BuyerSideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <BuyerNav onMenuClick={() => setSidebarOpen(true)} />
        <div className="min-h-screen bg-gray-50 mt-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OrderHeader />
        <OrderRows orders={mockOrders} />
      </div>
    </div>
      </div>
     

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
    </div>
  )
}

export default OrderPage