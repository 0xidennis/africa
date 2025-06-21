import React from 'react'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
  <motion.div 
    className="w-full bg-[#eba91c] py-8 px-4 sm:py-12 md:py-16 lg:py-20"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    }}
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.h1 
        className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide"
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }
        }}
      >
        Fashion Accessories & Footwear
      </motion.h1>
    </div>
  </motion.div>
</div>
  )
}

export default Header