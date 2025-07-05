import React from 'react'

const CreateFormHeader = () => {
  return (
    <div>
          <div className="w-full  bg-gray-50 ml-4 lg:ml-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer transition-colors">Products</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Add new products</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Create Products</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">Add new product here</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreateFormHeader