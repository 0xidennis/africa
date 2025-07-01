import React from 'react'
import { motion } from "framer-motion";
import logo from '../assets/logo/from.png'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <motion.img
      src={logo}
      alt="Loading..."
      className="w-16 h-16"
      animate={{
        rotate: 360,
        opacity: [1, 0.5, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      }}
    />
  </div>
  )
}

export default LoadingSpinner