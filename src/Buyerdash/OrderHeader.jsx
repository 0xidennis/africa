import React from 'react'
import  Button  from "./Button"

const OrderHeader = () => {
  return (
    <div>
         <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-600 mt-1">View all orders here</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="w-full sm:w-auto">
            Export to excel
          </Button>
          <Button variant="primary" className="w-full sm:w-auto">
            New Order
          </Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderHeader