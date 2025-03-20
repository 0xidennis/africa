
import React, { useState, useEffect, } from "react";
import {
    Bell,
    Mail,
    ChevronDown,
    Building2,
    LayoutDashboard,
    Package,
    MessageSquare,
    ClipboardList,
    LifeBuoy,
    Menu,
    X,
  } from "lucide-react"

const Businexdash = () => {
    const [businessInfo, setBusinessInfo] = useState({
        businessName: "3C Fashion Store",
        ownerName: "3C Fashion Store",
        country: "Nigeria",
        phoneNumber: "3C Fashion Store",
        officeAddress: "3C Fashion Store",
      })
    
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
      const [isMobile, setIsMobile] = useState(false)
    
      // Check if we're on mobile screen
      useEffect(() => {
        const checkIfMobile = () => {
          setIsMobile(window.innerWidth < 768)
        }
    
        // Initial check
        checkIfMobile()
    
        // Add event listener
        window.addEventListener("resize", checkIfMobile)
    
        // Cleanup
        return () => window.removeEventListener("resize", checkIfMobile)
      }, [])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setBusinessInfo((prev) => ({ ...prev, [name]: value }))
      }
    
      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
      }
    
      const closeMobileMenu = () => {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false)
        }
      }
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white relative ">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={closeMobileMenu} />}

      {/* Sidebar */}
      <div
        className={`w-[233px] bg-[#5D3A26] flex flex-col fixed md:static h-full z-30 transition-all duration-300 ${
          isMobileMenuOpen ? "left-0" : "-left-[233px] md:left-0"
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <image
            src="/placeholder.svg?height=40&width=120"
            alt="From Africa Logo"
            width={120}
            height={40}
            className="invert"
          />
          <button className="text-white md:hidden " onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="mt-8 flex flex-col space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-[#8B5E34] text-white"
            onClick={closeMobileMenu}
          >
            <Building2 size={20} />
            <span>Business</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-[#8B5E34]/50 transition-colors"
            onClick={closeMobileMenu}
          >
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-[#8B5E34]/50 transition-colors"
            onClick={closeMobileMenu}
          >
            <Package size={20} />
            <span>Product</span>
            <ChevronDown size={16} className="ml-auto" />
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-[#8B5E34]/50 transition-colors"
            onClick={closeMobileMenu}
          >
            <MessageSquare size={20} />
            <span>Messages</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-[#8B5E34]/50 transition-colors"
            onClick={closeMobileMenu}
          >
            <ClipboardList size={20} />
            <span>Order</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-[#8B5E34]/50 transition-colors"
            onClick={closeMobileMenu}
          >
            <LifeBuoy size={20} />
            <span>Support</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b">
          <div className="flex items-center gap-2">
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <Menu size={24} />
            </button>
            <div className="relative w-full md:w-[600px]">
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-1 w-full rounded-md border" />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-3">
            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full w-2 h-2 flex items-center justify-center">
                
              </span>
            </button>
            <button className="relative">
              <Mail size={20} />
              <span className="absolute -top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-2 h-2 flex items-center justify-center">
                
              </span>
            </button>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <image src="/placeholder.svg?height=32&width=32" alt="User Avatar" width={32} height={32} />
              </div>
              <div className="text-sm hidden sm:block">
                <p className="font-medium">Ade Batife John</p>
                <p className="text-gray-500 text-xs">adebatifejohn@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-6" onClick={closeMobileMenu}>
          <div className="mb-6">
            <h1 className="text-xl md:text-2xl font-medium">Welcome back ,</h1>
            <h2 className="text-xl md:text-2xl font-bold">Fade African Clothings !</h2>
            <p className="text-gray-600 mt-2">Complete all the sections to take your business live.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="bg-[#FFF8EE] border border-[#F5DEB3] p-4 rounded-md w-full sm:w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-green-600">Completed</span>
              </div>
              <h3 className="font-medium">Business Information</h3>
            </div>
            <div className="bg-white border p-4 rounded-md w-full sm:w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#8B5E34]"></div>
                <span className="text-sm text-[#8B5E34]">Pending</span>
              </div>
              <h3 className="font-medium">Company Information</h3>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Business Information</h2>
            <p className="text-gray-600 mb-6">Manage your warehouse details here</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={businessInfo.businessName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Owners Full Name</label>
                <input
                  type="text"
                  name="ownerName"
                  value={businessInfo.ownerName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Country</label>
                <div className="flex items-center border rounded-md p-2">
                  <span className="mr-2">🇳🇬</span>
                  <span>Nigeria</span>
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={businessInfo.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block mb-2 font-medium">Office Address</label>
                <textarea
                  name="officeAddress"
                  value={businessInfo.officeAddress}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md h-[120px]"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-[#F0B132] hover:bg-[#E0A122] text-white px-8 py-2 font-medium rounded-md">Save</button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Signed Agreement</h2>
            <p className="text-gray-600 mb-2">This business was created on: February, 27, 2025</p>
            <a href="#" className="text-[#F0B132] hover:underline">
              Your signed contract with From Africa
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Businexdash