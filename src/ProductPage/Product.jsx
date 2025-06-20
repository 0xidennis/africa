import React from 'react'
import { useState } from "react"
import { Heart, Search } from "lucide-react"
import bag from "../assets/armg.png"
import handbag from "../assets/image/handbag.png"
import belt from "../assets/image/belt.png"
import necklace from "../assets/image/necklace.png"
import earrings from "../assets/image/earrings.png"
import facecap from "../assets/image/facecap.png"
import boot from "../assets/image/boot.png"
import Header from './Header'
import SubNav from '../Statics/SubNav'
import Navbar from '../Statics/Navbar'
import Footer from '../Statics/Footer'

const products = [
  {
    id: 1,
    name: "-",
    price: 50,
    pieces: 100,
    image: bag,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image: handbag,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image: handbag,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image: belt,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Armguard Bag",
    price: 10,
    pieces: 100,
    image: necklace,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image:earrings,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 7,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image: facecap,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 8,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image: belt,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 9,
    name: "Armguard Bag",
    price: 10,
    pieces: 100,
    image: bag,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 10,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image: boot ,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 11,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image: handbag,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
  {
    id: 12,
    name: "Armguard Bag",
    price: 50,
    pieces: 100,
    image:  belt,
    isVerified: true,
    isGoldSupplier: true,
    isFavorite: false,
  },
]

const categories = ["All Categories", "Fashion Accessories & Footwear"]

const subCategories = [
  "Baby & Children's Fashion",
  "Goods & Services",
  "Baby & Children's Footwear",
  "Bags & Luggage",
  "Beauty Treatment & Salon",
  "Supplies",
  "Gifts",
  "Jewelry & Watches",
  "Makeup & Cosmetics",
  "Men's & Women's Fashion",
  "Accessories",
  "Men's & Women's Footwear",
  "Scarves, Shawls & Gloves",
]

const Product = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All Categories")
    const [favorites, setFavorites] = useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false)
  
    const toggleFavorite = (productId) => {
      setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
    }
  
    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesMinPrice = !minPrice || product.price >= parseInt(minPrice)
      const matchesMaxPrice = !maxPrice || product.price <= parseInt(maxPrice)
      return matchesSearch && matchesMinPrice && matchesMaxPrice
    })
    
  return (
    <div className='bg-gray-50'>
        <Navbar/>
        <SubNav/>
        <Header/>
         <div className="min-h-screen bg-gray-50 mt-5">
            <div className='flex gap-15 lg:ml-30 '>
            <h3 className=" font-semibold text-gray-800 mb-3 hidden lg:flex"> All Categories</h3>
                <h3 className=" font-semibold text-gray-800 mb-3  text-center justify-center">Fashion Accessories & Footwear</h3>
            </div>
         
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <div
          className={` -mt-3
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-50  border-gray-200 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="p-4 h-full overflow-y-auto">
            {/* Categories */}
            <div className="mb-6">
             
              {categories.map((category) => (
                <div key={category} className="mb-2 lg:hidden">
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm w-full text-left p-2 rounded ${
                      selectedCategory === category
                        ? "bg-orange-100 text-[#eba91c]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                </div>
              ))}
            </div>

            {/* Sub Categories */}
            <div className="mb-6 bg-white rounded border-gray-200 border p-3">
              <h3 className="font-semibold text-[#eba91c] mb-3">Sub Categories</h3>
              <div className="space-y-1 max-h-48 overflow-y-auto">
                {subCategories.map((subCategory) => (
                  <div key={subCategory} className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer p-1">
                    {subCategory}
                  </div>
                ))}
              </div>
              <button className="text-[#eba91c] text-sm mt-2 hover:underline">View More</button>
            </div>

            {/* Search */}
            <div className="mb-6  bg-white rounded border-gray-200 border p-3">
              <h3 className="font-semibold text-[#eba91c] mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Min Order */}
            <div className="mb-6  bg-white rounded border-gray-200 border p-3">
              <h3 className="font-semibold text-[#eba91c] mb-3">Min. order</h3>
              <input
                type="text"
                placeholder="Min. order"
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
            </div>

            {/* Price Range */}
            <div className="mb-6  bg-white rounded border-gray-200 border p-3">
              <h3 className="font-semibold text-[#eba91c] mb-3">Price</h3>
              <div className="flex gap-1 mb-3">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded text-sm w-24"
                />
                
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded text-sm w-24"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#eba91c] text-white py-2 px-4 rounded text-sm hover:bg-orange-600 transition-colors">
                  Apply
                </button>
                <button className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded text-sm hover:bg-gray-400 transition-colors">
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white border-b border-gray-200 p-4">
            <button onClick={() => setSidebarOpen(true)} className="text-white hover:text-gray-800 bg-[#eba91c] w-8 h-8">

              {">"}
            </button>
          </div>

          {/* Products Grid */}
          <div className="p-4 lg:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover mt-5"
                    />
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-0 right-2 p-1.5 bg-white rounded-full  hover:shadow-md transition-shadow"
                    >
                      <Heart
                        className={`h-6 w-6 -mt-4  ${
                          favorites.includes(product.id) ? "fill-[#eba91c] text-[#eba91c]" : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-semibold text-gray-900">US$ {product.price}</span>
                      <span className="text-xs text-gray-500">/ New Price Paid</span>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">{product.pieces} Pieces (MOQ)</div>
                    {/* <hr className='bg-white mb-3'/> */}

                    <div className="flex items-center justify-between border-t border-gray-400 pt-3">
                      <div className="flex items-center gap-2 ">
                        {product.isVerified && (
                          <div className="flex items-center gap-1 text-md text-black-600">
                            <div className="w-3 h-3 bg-[#eba91c] rounded-full flex items-center justify-center">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span>Verified <span>(NGN)</span></span>
                          </div>
                        )}
                      </div>

                      {product.isGoldSupplier && (
                        <span className=" bg-[#eba91c] text-white text-md px-2 py-1 rounded">Chat Supplier</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  {"<"}
                </button>
                <button className="w-8 h-8 rounded-full bg-[#eba91c] text-white flex items-center justify-center">
                  1
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  2
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  {"..."}
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  {">>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Product