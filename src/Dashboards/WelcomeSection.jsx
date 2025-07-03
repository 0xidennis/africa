import React from 'react'
import { useAuth } from '../context/AuthContext'; 

const WelcomeSection = () => {
  const { user } = useAuth();
  return (
    <div className="space-y-2">
    <h1 className="text-2xl lg:text-3xl font-md text-gray-900">
      Welcome back, <br />
      <span className="block sm:inline font-bold text-black">
        {user?.companyName || user?.fullName || 'Valued User'}!
      </span>
    </h1>
    <p className="text-gray-600">
      {user?.isComplete 
        ? "We're glad to have you back." 
        : "Complete all the sections to take your business live."
      }
    </p>
  </div>
  )
}

export default WelcomeSection