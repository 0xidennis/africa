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

const Sidebar = () => {
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
              <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b">
                        <button className="md:hidden" onClick={toggleMobileMenu}>
                          <Menu size={24} />
                        </button>
                        </header>
                        
            </div>
             
          </div>
          </div>
  )
}

export default Sidebar