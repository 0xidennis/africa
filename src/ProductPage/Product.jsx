import React from 'react'
import { useState } from "react"
import { Heart, Search ,ChevronLeft, ChevronRight} from "lucide-react"
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
import { motion, AnimatePresence } from "framer-motion"

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
      const [showAllSubCategories, setShowAllSubCategories] = useState(false);
  const [productsPerPage] = useState(8); // Number of products per page


   // Calculate pagination
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
   const totalPages = Math.ceil(products.length / productsPerPage);
    
  
    const toggleFavorite = (productId) => {
      setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
    }
  
    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesMinPrice = !minPrice || product.price >= parseInt(minPrice)
      const matchesMaxPrice = !maxPrice || product.price <= parseInt(maxPrice)
      return matchesSearch && matchesMinPrice && matchesMaxPrice
    })
    
    const [currentPage, setCurrentPage] = useState(1)
    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  
    const goToPage = (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

     // Close sidebar when clicking on a link or button inside
  const handleSidebarItemClick = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

    // Close sidebar when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

      // Animation variants
  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  }

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  }

  const overlayVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

   // Number of categories to show initially
  const initialVisibleCount = 5;
  const visibleSubCategories = showAllSubCategories 
    ? subCategories 
    : subCategories.slice(0, initialVisibleCount);

  return (
    <div className='bg-gray-50'>
        <Navbar/>
        <SubNav/>
        <Header/>
         <div className="min-h-screen bg-gray-50 mt-5">
            <div className='flex gap-15 lg:ml-30 lg:-mb-7'>
            <h3 className=" font-semibold text-gray-800 mb-3 hidden lg:flex z-10"> All Categories</h3>
                <h3 className=" font-semibold text-gray-800 mb-3  text-center justify-center ">Fashion Accessories & Footwear</h3>
            </div>
         
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                transition={{ duration: 0.3 }}
                onClick={() => setSidebarOpen(false)}
              />
            )}
          </AnimatePresence>

        {/* Sidebar */}
        <div
          className={` -mt-3
          fixed lg:static inset-y-0 left-0  w-64 bg-gray-50  border-gray-200 transform transition-transform duration-300 ease-in-out z-50 lg:z-0
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
      <div className="space-y-1">
        {visibleSubCategories.map((subCategory) => (
          <div 
            key={subCategory} 
            className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer p-1"
          >
            {subCategory}
          </div>
        ))}
      </div>
      {subCategories.length > initialVisibleCount && (
        <button 
          className="text-[#eba91c] text-sm mt-2 hover:underline"
          onClick={() => setShowAllSubCategories(!showAllSubCategories)}
        >
          {showAllSubCategories ? 'Show Less' : 'View More'}
        </button>
      )}
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

          {/* cards grid */}

          <div className="p-4 lg:p-6 z-10">
  <motion.div 
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1
        }
      }
    }}
  >
    {filteredProducts.map((product, index) => (
      <motion.div
        key={product.id}
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        variants={{
          hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.95
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.05 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { 
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <motion.img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover mt-5"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.button
            onClick={() => toggleFavorite(product.id)}
            className="absolute top-0 right-2 p-1.5 bg-white rounded-full hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart
              className={`h-6 w-6 -mt-4 ${
                favorites.includes(product.id) ? "fill-[#eba91c] text-[#eba91c]" : "text-gray-400"
              }`}
            />
          </motion.button>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold text-gray-900">US$ {product.price}</span>
            <span className="text-xs text-gray-500">/ New Price Paid</span>
          </div>

          <div className="text-xs text-gray-500 mb-3">{product.pieces} Pieces (MOQ)</div>

          <div className="flex items-center justify-between border-t border-gray-400 pt-3">
            <div className="flex items-center gap-2">
              {product.isVerified && (
                <motion.div 
                  className="flex items-center gap-1 text-md text-black-600"
                  whileHover={{ scale: 1.05 }}
                >
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
                </motion.div>
              )}
            </div>

            {product.isGoldSupplier && (
              <motion.span 
                className="bg-[#eba91c] text-white text-md px-2 py-1 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Chat Supplier
              </motion.span>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>

            {/* Pagination */}
            <div className="flex items-end justify-center mb-6 ">
      <div className="flex items-center space-x-1 bg-white rounded-lg shadow-sm border border-gray-200 p-1">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-colors duration-200"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Current Page Indicator */}
        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-[#eba91c] text-white font-medium text-sm sm:text-base">
          {currentPage}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-colors duration-200"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
          </div>
        </div>
    <Footer/>
    </div>
    </div>
  )
}

export default Product