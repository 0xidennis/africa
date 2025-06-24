import React from 'react'
import ProfileCard from './ProfileCard'
import Myinfo from './Myinfo'
import SignedAggre from './SignedAggre'

const MainContent = () => {
  return (
    <div>
        <main className="flex-1 overflow-y-auto bg-gray-50 lg:ml-69">
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, <span className="text-amber-600">Bishop</span>!
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