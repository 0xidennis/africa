import React from 'react'
import { useState, useEffect } from "react"
import { Search, MoreHorizontal, Download, Grid3x3, List, Filter } from "lucide-react"
import ProductHeader from './ProductHeader'
import { useAuth} from '../context/AuthContext'
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

// const products = [
//     {
//       id: 1,
//       name: "Straw Fedora Hat",
//       category: "ACCESSORIES",
//       price: 99.99,
//       date: "12.03.2023",
//       status: "Available",
//       image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop",
//     },
//     {
//       id: 2,
//       name: "Hammered Drop Earrings",
//       category: "ACCESSORIES",
//       price: 89.99,
//       date: "02.03.2023",
//       status: "Available",
//       image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
//     },
//     {
//       id: 3,
//       name: "Square Sunglasses",
//       category: "ACCESSORIES",
//       price: 299.9,
//       date: "20.03.2023",
//       status: "Disabled",
//       image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
//     },
//     {
//       id: 4,
//       name: "Printed Maxi A-Line Skirt",
//       category: "CLOTHES",
//       price: 150.0,
//       date: "20.03.2023",
//       status: "Available",
//       image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
//     },
//     {
//       id: 5,
//       name: "Leather Cross Body Bag",
//       category: "ACCESSORIES",
//       price: 74.69,
//       date: "20.03.2023",
//       status: "Available",
//       image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
//     },
//     {
//       id: 6,
//       name: "Non Wired Sports Top",
//       category: "SPORTSWEAR",
//       price: 55.5,
//       date: "20.03.2023",
//       status: "Disabled",
//       image: "https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=300&h=300&fit=crop",
//     },
//     {
//       id: 7,
//       name: "Leather Flat Sandals",
//       category: "CLOTHES",
//       price: 120.99,
//       date: "20.03.2023",
//       status: "Available",
//       image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop",
//     },
//     {
//       id: 8,
//       name: "Oversized Sunglasses",
//       category: "ACCESSORIES",
//       price: 123.99,
//       date: "20.03.2023",
//       status: "Available",
//       image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
//     },

const SellerProduct = () => {
    const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("ALL PRODUCTS")
  const [selectedFilters, setSelectedFilters] = useState([])
  const [viewMode, setViewMode] = useState("grid")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
 

  const { products, loading, error,fetchProducts } = useAuth();
  
  useEffect(() => {
    fetchProducts(); // Load when page loads
  }, []);
 

  const tabs = [
    { name: "ALL PRODUCTS", count: 120 },
    { name: "AVAILABLE", count: 90 },
    { name: "DISABLED", count: 30 },
  ]

  const filters = ["SPORTSWEAR", "ACCESSORIES"]

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
  }

  const filteredProducts = products || [].filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(product.category)
    const matchesTab =
      activeTab === "ALL PRODUCTS" ||
      (activeTab === "AVAILABLE" && product.status === "Available") ||
      (activeTab === "DISABLED" && product.status === "Disabled")
    return matchesSearch && matchesFilter && matchesTab
  });
  // useEffect(() => {
  //   if (!loading && products && products.length === 0) {
  //     navigate("/sellerproductpage");
  //   }
  // }, [products, loading, navigate]);
  
  return (
    <div>
         <ProductHeader/>
       <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <MoreHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Bulk Actions</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Products</span>
              </button>
              <Link to="/sellerdash/sellerform">
              <button className="px-4 py-2 bg-[#eba91c] text-white rounded-lg hover:bg-[#f3b530] transition-colors">
                Add Product
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.name
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>

          {/* Filters and View Controls */}
          <div className="p-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center gap-2 px-3 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-50"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>

                <div className={`flex flex-wrap items-center gap-2 ${showMobileFilters ? "block" : "hidden lg:flex"}`}>
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => toggleFilter(filter)}
                      className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                        selectedFilters.includes(filter)
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      {filter}
                      {selectedFilters.includes(filter) && <span className="ml-1 cursor-pointer">×</span>}
                    </button>
                  ))}

                  <button
                    onClick={() => toggleFilter("$10-$200")}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                      selectedFilters.includes("$10-$200")
                        ? "bg-blue-100 text-blue-700 border-blue-200"
                        : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    $10-$200
                  </button>

                  {selectedFilters.length > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                      CLEAR ALL
                    </button>
                  )}
                </div>
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("filter")}
                  className={`p-2 rounded ${viewMode === "filter" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <Filter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
          <div
            className={`grid gap-4 ${
              viewMode === "list" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {Array.isArray(filteredProducts) && filteredProducts.length > 0 ?
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === "Available" ? "bg-teal-100 text-teal-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">CATEGORY: {product.category}</div>
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{product.date}</span>
                    <span className="font-semibold text-gray-900">${product.price}</span>
                  </div>
                </div>
              </div>
            ))
             : (

          
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default SellerProduct