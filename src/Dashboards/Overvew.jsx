import React from 'react'

const data = [
    { name: 'Jan', orders: 4000, completed: 2400 },
    { name: 'Feb', orders: 3000, completed: 1398 },
    { name: 'Mar', orders: 2000, completed: 9800 },
    { name: 'Apr', orders: 2780, completed: 3908 },
    { name: 'May', orders: 1890, completed: 4800 },
    { name: 'Jun', orders: 2390, completed: 3800 },
    { name: 'Jul', orders: 3490, completed: 4300 },
  ];

const Overvew = () => {
  return (
    
  <div className=''>
     <div className="mb-4 p-4">
            <h1 className="text-xl md:text-2xl font-medium">Welcome back ,</h1>
            <h2 className="text-xl md:text-2xl font-bold">Fade African Clothings !</h2>
            <p className="text-gray-600 mt-2">Here’s Your Current Store Overview</p>
          </div>
    <h1 className="text-2xl font-bold p-4 ">Overview</h1>
      <div className=" grid-cols-2 gap-4 p-4 space-y-2 lg:grid lg:grid-cols-4">
    {["Total Products", "Total Customers", "Total Orders", "Total Impressions"].map((title, index) => (
      <div key={index} className="bg-white p-4 rounded shadow">
        <h2 className="text-1xl font-sm">{title}</h2>
        <p className="text-xl font-bold">{Math.floor(Math.random() * 25000)}  <span className="text-green-500 bg-green-100 text-xs px-2 py-1 rounded-md  items-center w-max mt-2 ml-23">
          10% ↑
        </span></p>

      </div>
    ))}
  </div>
  </div>
  )
}

export default Overvew