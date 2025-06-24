import React from 'react'
import { CheckCircle } from "lucide-react"

const ProfileCard = () => {
  return (
    <div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Profile</h3>
        </div>
        <div className="flex items-center text-green-600">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Completed</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileCard