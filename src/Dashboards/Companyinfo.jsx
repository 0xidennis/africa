import React, { useState, useEffect } from 'react';
import {  Upload } from "lucide-react";
import { useAuth } from '../context/AuthContext';

const Companyinfo = () => {
  const { registrationData, updateCompanyInfo, setActiveCard } = useAuth();
  const [formData, setFormData] = useState(registrationData.companyInfo);

  useEffect(() => {
    setActiveCard(1); 
  }, [setActiveCard]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: file, // Store actual file object
      }));
    }
  };
      
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCompanyInfo(formData);
      console.log("Company info updated successfully", formData);
    } catch (error) {
      console.error("Failed to save company info:", error);
    }
  };

  return (
    <div>
          {/* Company Information Form */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Company Information</h2>
            <p className="text-gray-600 mb-6">Provide the following details of your business</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.companyName || ''}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Business Registration Number</label>
                <input type="text" placeholder="Legal Registration Number" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <label className="block mb-2 font-medium">CAC Number (Required)</label>
                <div className="relative border rounded-md">
                  <input
                    type="file"
                    placeholder="Upload .jpg or PDF"
                    className="w-full p-3 pr-10 border-none"
                    onChange={(e) =>handleFileUpload(e, 'cacNumber')}
                    value={formData.cacNumber || ''}
                    id='cac-upload'
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Upload size={18} />
                  </button>
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium">Certificate of Registration</label>
                <div className="relative border rounded-md">
                  <input
                    type="file"
                    placeholder="Upload .jpg or PDF"
                    className="w-full p-3 pr-10 border-none"
                    onChange={(e) =>handleFileUpload(e, 'certificateOfRegistration')}
                  value={formData.certificateOfRegistration || ''}
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Upload size={18} />
                  </button>
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium">Tax Identification Number TIN (Required)</label>
                <div className="relative border rounded-md">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    placeholder="Upload .jpg or PDF"
                    className="w-full p-3 pr-10 border-none"
                    onChange={(e) =>handleFileUpload(e, 'taxIdentificationNumber')}
                    value={formData.taxIdentificationNumber || ''}
                    id='tin-upload'
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() =>document.getElementById('tin-upload').click()}>
                    <Upload size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button className="px-8 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md"
                onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
    </div>
  )
}

export default Companyinfo