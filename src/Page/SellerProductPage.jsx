import React from 'react'
import { useState } from "react"

import SellerProduct from '../Dashboards/SellerProduct'

const SellerProductPage = () => {
     
  return (
    <div>
        <div>
         <div className=" bg-gray-50">

      {/* Main content area */}
      <div className=" flex-col overflow-hidden">
       
        <SellerProduct/>
      </div>

      
    </div>
    </div>
    </div>
  )
}

export default SellerProductPage