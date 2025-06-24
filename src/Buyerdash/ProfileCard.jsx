import React from 'react'
import { CheckCircle } from "lucide-react"

const ProfileCard = () => {
  return (
    <div>
        <div className="bg-amber-50  rounded-lg p-4 mb-8 w-50 h-24 ">
      <div className=" items-center justify-between  ">
        <div className='border-b border-gray-200 w-full '>
          <h3 className="text-lg font-medium text-gray-900  mb-2">Profile</h3>
        </div>
        <div className="flex items-center text-gray-600 mt-2">
          <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
          <span className="text-sm font-medium">Completed</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileCard