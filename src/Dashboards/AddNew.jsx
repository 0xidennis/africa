import React from 'react'
import { Search, MoreHorizontal, Download, Plus } from "lucide-react"

const AddNew = () => {
  return (
    <div>
        <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Product..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <MoreHorizontal className="h-4 w-4 mr-2" />
              Bulk Actions
            </button>

            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Download className="h-4 w-4 mr-2" />
              Export Products
            </button>

            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#eba91c] hover:bg-[#f3b530] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              <Plus className="h-4 w-4 mr-2" />
              Add Products
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Empty State */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">No Product Available</h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">Add new products to this section to get started</p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
            <Plus className="h-5 w-5 mr-2" />
            Add Products
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddNew