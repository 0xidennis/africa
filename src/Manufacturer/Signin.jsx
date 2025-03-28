import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Products from '../assets/image/Products.png'
import logo from '../assets/logo/from.png'
import  { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const { login,loading,error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

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

          {/* Login Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#5c3c28] mb-2">Welcome back!</h2>
            <p className="text-gray-600 mb-6">Enter your e-mail to log in to your account</p>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Adress"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5d3c21]"
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5d3c21]"
                  required
                />
              </div>

              <div className="flex justify-end mb-6">
                <a href="/forgot-password" className="text-[#eba91c] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5d3c21] text-white py-3 rounded font-medium hover:bg-[#4a2e19] transition-colors"
                disabled={loading}
                onSubmit={handleSubmit}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <div className="mt-4 text-center">
                <span className="text-gray-600">Don't have an account, </span>
                <a href="/register" className="text-[#eba91c] hover:underline">
                  Create Account
                </a>
              </div>
            </form>
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

export default Signin