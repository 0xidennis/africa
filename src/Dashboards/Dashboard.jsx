import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Overvew from './Overvew'
import Chartbar from './Chartbar'
import { useState } from "react";
import Location from './Location'

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Items");
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <Overvew />
        <div className="p-4  grid-cols-2 gap-4 space-y-2 lg:grid">
          <Chartbar />
          <div className="bg-white shadow-md rounded-2xl p-4 w-full h-102">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Top Product</h2>
        <select
          className="border rounded-md text-gray-600 text-sm p-1 focus:outline-none"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Items">Items</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      {/* Content for the card goes here */}
    </div>
        </div>
        <Location/>
      </div>
      
    </div>
  )
}

export default Dashboard