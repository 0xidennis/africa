import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Overvew from './Overvew'
import Chartbar from './Chartbar'

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <Overvew />
        <div className="p-4 grid grid-cols-2 gap-4">
          <Chartbar />
          <div className="bg-white p-4 rounded shadow grid">Top Product</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard