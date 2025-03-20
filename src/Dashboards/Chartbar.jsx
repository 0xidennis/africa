import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', orders: 50000, completed: 20000 },
  { name: 'Feb', orders: 60000, completed: 30000 },
  { name: 'Mar', orders: 35000, completed: 25000 },
  { name: 'Apr', orders: 20000, completed: 15000 },
  { name: 'May', orders: 45000, completed: 30000 },
  { name: 'Jun', orders: 55000, completed: 25000 },
  { name: 'Jul', orders: 40000, completed: 30000 },
];

const Chartbar= () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-3">Statistics</h2>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-orange-500 rounded-full mr-1"></span>
          <p className="text-sm">Orders</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-orange-300 rounded-full mr-1"></span>
          <p className="text-sm">Completed</p>
        </div>
      </div>
      <select className="border rounded px-2 py-1 text-sm">
        <option>Past 3 Months</option>
        <option>Past 6 Months</option>
        <option>Past Year</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#FFA500" />
        <Bar dataKey="completed" fill="#FFCC80" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Chartbar 