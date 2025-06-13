import React from 'react'
import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Products from '../assets/image/Products.png'
import logo from '../assets/logo/from.png'
import { useAuth } from '../context/AuthContext';
import { Link,useLocation,useNavigate} from 'react-router-dom';

const Businexinfo =()=>{
  const location = useLocation();
  const navigate = useNavigate();
  const personalInfo = location.state?.personalInfo;

  useEffect(() => {
    if (!personalInfo) {
      navigate('/personalinfo');
    }
  }, [personalInfo, navigate]);


  const [formData, setFormData] = useState({
    companyName: "",
    country: "Nigeria",
    state: "",
    shippingAddress: "",
    socialMedia: "",
  });

  const { 
    user, 
    loading, 
    error, 
    completeRegistration, 
    setError 
  } = useAuth();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!personalInfo) {
      setError("Missing personal information. Please start from the beginning.");
      return;
    }

    try {
      // Combine personal and business info
      const completeUserData = {
        ...personalInfo,
        ...formData
      };
  
      await completeRegistration(completeUserData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Registration completion error:', err);
      setError(err.message || "Registration failed");
    }
  };

    return(
         <div className="flex min-h-screen flex-col overflow-x-hidden">
              {/* Header */}
              <header className="bg-white p-1.5">
                <Link to="/">
                <div className="container mx-auto">
                  <img src={logo} width={80} height={40} alt="" className='mt-2 ml-5 ' />
                </div>
                </Link>
              </header>
          
              {/* Main Content */}
              <main className="flex-1 bg-[black] bg-opacity-90 relative">
                <div className="absolute inset-0 z-0 opacity-30 ">
                  <img src={Products} alt="Background" fill className="object-cover h-150 w-full" priority />
                </div>
          
                <div className="container mx-auto px-4 py-16 relative z-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left side text */}
                    <div className="mb-10 lg:mb-0 text-white">
                      <h1 className="text-5xl font-bold mb-2">
                        <span className="text-[#eba91c]">Made In</span> Africa
                      </h1>
                      <h2 className="text-5xl font-bold">
                        Sold <span className="text-[#eba91c]">Continental</span>
                      </h2>
                    </div>
          
                    {/* Businexinfo */}
                     <div className="max-w-md  p-6 bg-white rounded-lg">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-[#5D4037]">Business Information</h1>
          <p className="text-gray-600">Setup your business details</p>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-gray-700">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              placeholder="Brand Name"
              value={formData.companyName}
              onChange={handleChange}
              className="border-gray-300 w-full p-2 border rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="text-gray-700">Country/Region</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border-gray-300 border rounded "
              required
            >
              <option value="Nigeria">🇳🇬 Nigeria</option>
              <option value="Ghana">🇬🇭 Ghana</option>
              <option value="Kenya">🇰🇪 Kenya</option>
              <option value="South Africa">🇿🇦 South Africa</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="state" className="text-gray-700">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border-gray-300 border rounded"
              required
            >
              <option value="">Select State</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="rivers">Rivers</option>
              <option value="kano">Kano</option>
              <option value="oyo">Oyo</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="shippingAddress" className="text-gray-700">Shipping Address</label>
            <input
              id="shippingAddress"
              name="shippingAddress"
              placeholder="Address"
              value={formData.shippingAddress}
              onChange={handleChange}
              className="border-gray-300 w-full p-2 border rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="socialMedia" className="text-gray-700">Social Media Page (Facebook)</label>
            <input
              id="socialMedia"
              name="socialMedia"
              placeholder="@page"
              value={formData.socialMedia}
              onChange={handleChange}
              className="border-gray-300 w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F1B929] hover:bg-[#E0A918] text-white font-medium py-2 rounded-md transition-colors"
            disabled={loading}
          >
            {loading ? "Submitting.." : "Submit"}
          </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            By continuing you agree to From Africa, <br />
            <a href="#" className="text-[#F1B929] hover:underline"> Terms and Conditions</a>
          </div>
        </form>
      </div>
    </div>
                  </div>
                </div>
              </main>
          
              {/* Footer */}
              <footer className="bg-[#5c3c28] text-white py-10">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Tagline */}
                    <div>
                    <img src={logo} width={120} height={40} alt="" className='mb-4 h-10 w-auto ' />
                      {/* <image src="/logo.svg" alt="From Africa Logo" width={120} height={40} className="h-10 w-auto mb-4" /> */}
                      <p className="text-sm">
                        Connecting African Manufacturers
                        <br />
                        Excellence to the World
                      </p>
          
                      {/* <div className="flex space-x-4 mt-6">
                        <a href="#" className="text-white hover:text-yellow-500">
                          <Facebook size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500">
                          <Instagram size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500">
                          <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500">
                          <Twitter size={20} />
                        </a>
                      </div> */}
                    </div>
          
                    {/* Quick Links */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/about" className="hover:text-yellow-500">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="/how-it-works" className="hover:text-yellow-500">
                            How It Works
                          </a>
                        </li>
                        <li>
                          <a href="/success-stories" className="hover:text-yellow-500">
                            Success Stories
                          </a>
                        </li>
                      </ul>
                    </div>
          
                    {/* Categories */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Categories</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/category/fashion" className="hover:text-yellow-500">
                            African Fashion
                          </a>
                        </li>
                        <li>
                          <a href="/category/accessories" className="hover:text-yellow-500">
                            African Accessories
                          </a>
                        </li>
                        <li>
                          <a href="/category/skincare" className="hover:text-yellow-500">
                            African Skincare
                          </a>
                        </li>
                      </ul>
                    </div>
          
                    {/* Contact */}
                    <div>
                      <h3 className="font-bold text-lg mb-4">Contact</h3>
                      <ul className="space-y-2">
                        <li>support@fromafrica.com</li>
                        <li>+1 234 567 8900</li>
                      </ul>
                    </div>
                  </div>
          
                  <div className="border-t border-[#6d4c31] mt-8 pt-6 text-sm text-center md:text-right">
                    © 2025 fromafricab2b.com. All rights reserved.
                  </div>
                </div>
              </footer>
            </div>
    )
}

export default Businexinfo



