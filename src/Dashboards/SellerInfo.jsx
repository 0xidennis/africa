
import React, { useState, useEffect } from 'react';
import { useAuth} from '../context/AuthContext';

const SellerInfo = () => {
  const { registrationData, updateBusinessInfo, setActiveCard } = useAuth();
  
  const [formData, setFormData] = useState(registrationData.businessInfo);

  useEffect(() => {
    setActiveCard(0); // Set Business Info as active card
  }, [setActiveCard]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBusinessInfo(formData);
      console.log("Business info updated successfully", formData);
    } catch (error) {
      console.error("Failed to save business info:", error);
    }
    
  };
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Business Information</h2>
        <p className="text-gray-600">Manage your warehouse details here</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Name and Owner Name */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Owners Full Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Country and Phone Number */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <div className="relative">
              {/* <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                
              </div> */}
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full pl-16 pr-3 py-2 border border-gray-500 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Office Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Office Address</label>
          <textarea
            name="officeAddress"
            value={formData.officeAddress}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default SellerInfo