import React from 'react'


const Button = ({ children, variant = "primary", size = "md", onClick, className = "" }) => {
    const baseClasses = "font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

    const variantClasses = {
      primary: "bg-[#eba91c] hover:bg-orange-600 text-white focus:ring-orange-500",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500",
      outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-blue-500",
    }
  
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    }

  return (
    <div>
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </button>
    </div>
  )
}

export default Button