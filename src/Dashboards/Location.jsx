import React from 'react'
import { useState } from "react";

const Location = () => {
    const [selectedTab, setSelectedTab] = useState("Urgent");
    const tabs = ["Urgent", "Normal", "Dispatched", "Returns"];

  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-gray-100 min-h-screen">
    {/* Audience by Region */}
    <div className="bg-white shadow-md rounded-2xl p-4 h-100">
      <h2 className="text-gray-700 font-medium">Audience by Region</h2>
      <div className="relative mt-4">
        <img src="/world-map-placeholder.png" alt="World Map" className="w-full" />
        <div className="absolute top-10 left-20 bg-yellow-500 text-white text-xs px-3 py-1 rounded-lg shadow-md">
          <p>Impressions: 2000</p>
          <p>Clicks: 1000</p>
          <p>Orders: 100</p>
        </div>
      </div>
    </div>
    
    {/* Upcoming Orders */}
    <div className="bg-white shadow-md rounded-2xl p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-700 font-medium">Upcoming Orders</h2>
        <button className="text-gray-500 text-sm">View More</button>
      </div>
      <div className="flex space-x-2 my-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-1 rounded-full text-sm ${
              selectedTab === tab ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div>
        {["15-08-2023", "16-08-2023", "16-08-2023"].map((date, index) => (
          <div key={index} className="mb-4">
            <p className="text-gray-600 font-medium">{date}</p>
            <p className="text-gray-700">Order #df355</p>
            <ul className="text-gray-600 text-sm">
              <li>• Item 1</li>
              <li>• Item 1</li>
              <li>• Item 1</li>
            </ul>
            <p className="text-gray-500 text-xs mt-1">13:55 PM</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Location