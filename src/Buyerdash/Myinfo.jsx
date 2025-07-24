
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';

const Myinfo = () => {
   const {
    formData,
    handleInputChange,
    updateBuyer,
    loading,
    error,
    success,
   } = useAuth()

   const handleSave = () => {
    updateBuyer();
  };


  return (
    <div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">My Info</h2>
        <p className="text-gray-600">Update your personal details here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Surname */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name Surname</label>
          <input
          placeholder='3c fashion store'
            type="text"
            name="nameSurname"
            value={formData.nameSurname}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba91c] focus:border-[#eba91c]"
          />
        </div>

        {/* Buyer Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Buyer Code</label>
          <input
          placeholder='#ehndhfj'
            type="text"
            name="buyerCode"
            value={formData.buyerCode}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba91c] focus:border-[#eba91c]"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <div className="relative">
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba91c] focus:border-[#eba91c] appearance-none bg-white"
            >
              <option value="Nigeria">🇳🇬 Nigeria</option>
              <option value="Ghana">🇬🇭 Ghana</option>
              <option value="Kenya">🇰🇪 Kenya</option>
              <option value="South Africa">🇿🇦 South Africa</option>
            </select>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba91c] focus:border-[#eba91c]"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
          placeholder='email address'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba91c] focus:border-[#eba91c]"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <input
         
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eba91c] focus:border-[#eba91c]"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          disabled={loading}
          type="button"
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          {loading ? 'saving...' : 'save'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
    </div>
  )
}

export default Myinfo