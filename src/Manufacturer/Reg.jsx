import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Products from '../assets/image/Products.png'
import logo from '../assets/logo/from.png'

const Reg = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
        {/* Header */}
        <header className="bg-white p-1.5">
          <div className="container mx-auto">
            <img src={logo} width={80} height={40} alt="" className='mt-2 ml-5 ' />
          </div>
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
    
                {/* Sign Up Form */}
          <div className="flex items-center justify-center">
            <card className="w-full max-w-md border-0 bg-[white] p-6 shadow-lg">
              <div className="mb-6 text-start">
                <h2 className="text-xl font-bold text-[#5c3c28] mb-3">Create Account</h2>
                <p className="text-md text-black">Complete the details to create your account</p>
              </div>

              <form className="space-y-6">
                <radio defaultValue="seller" className="grid grid-cols-2 gap-4">
                  <div>
                    <radio value="seller" id="seller" className="peer sr-only" />
                    <label
                      htmlFor="seller"
                      className="flex cursor-pointer justify-center rounded-md border border-black/20 p-1 text-center hover:bg-[#5a4639] peer-data-[state=checked]:border-white peer-data-[state=checked]:bg-[#5a4639]"
                    >
                      Seller/Manufacturer
                    </label>
                  </div>
                  <div>
                    <radio value="buyer" id="buyer" className="peer sr-only" />
                    <label
                      htmlFor="buyer"
                      className="flex cursor-pointer justify-center rounded-md border border-black/20 p-1 text-center hover:bg-[#5a4639] peer-data-[state=checked]:border-white peer-data-[state=checked]:bg-[#5a4639]"
                    >
                      Buyer
                    </label>
                  </div>
                </radio>

                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email Adress"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5d3c21]"
                />
              </div>

                <button className="w-full bg-[#d8a35d] text-[#3c2a21] hover:bg-[#c89550]">Continue</button>

                <div className="text-center text-sm">
                  <p>
                    Already have an account,{" "}
                    <a href="#" className="text-[#d8a35d] hover:underline">
                      Log in
                    </a>
                  </p>
                  <p className="mt-2 text-xs text-gray-300">
                    By continuing you agree to From Africa,{" "}
                    <a href="#" className="text-[#d8a35d] hover:underline">
                      Terms and Conditions
                    </a>
                  </p>
                </div>
              </form>
            </card>
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

export default Reg