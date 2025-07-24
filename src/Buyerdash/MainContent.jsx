import React from 'react'
import ProfileCard from './ProfileCard'
import Myinfo from './Myinfo'
import SignedAggre from './SignedAggre'
import { useAuth } from '../context/AuthContext'

const MainContent = () => {
  const {user} = useAuth()
  return (
    <div>
        <main className="flex-1 overflow-y-auto bg-gray-50 lg:ml-69 mt-10 ">
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-md text-gray-900 mb-2">
            Welcome back,{""} <span className="text-black font-bold">{user?.name|| "Guest"}!</span>
          </h1>
          <p className="text-gray-600">Complete all the sections to take your store live.</p>
        </div>

        {/* Profile Completion Card */}
        <ProfileCard />

        {/* My Info Form */}
        <Myinfo/>

        {/* Signed Agreement */}
        <SignedAggre />
      </div>
    </main>
    </div>
  )
}

export default MainContent