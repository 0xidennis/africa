
import React from "react";

import WelcomeSection from "./WelcomeSection";
import ProgressCard from "./ProgressCard";
import SellerInfo from "./SellerInfo";
import SignedAggre from "../Buyerdash/SignedAggre";

const Businexdash = () => {
  
    
  return (

    <main className="flex-1 overflow-y-auto p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <WelcomeSection />
        <ProgressCard/>
        <SellerInfo/>
        <SignedAggre />
      </div>
    </main>
  )
}

export default Businexdash