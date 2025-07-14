import React from 'react'

const Category = ({ title, description, image }) => {
  return (
    <div>
            <div className="group cursor-pointer">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
        {/* Image Container */}
        <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-600 line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Category