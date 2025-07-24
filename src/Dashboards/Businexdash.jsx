
import React from "react";

import WelcomeSection from "./WelcomeSection";
import ProgressCard from "./ProgressCard";
import SellerInfo from "./SellerInfo";
import SignedAggre from "../Buyerdash/SignedAggre";
import Companyinfo from "./Companyinfo";
import { useAuth } from "../context/AuthContext";

const Businexdash = () => {
  const {activeCard,registrationData} = useAuth();
    
  return (

    <main className="flex-1 overflow-y-auto p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <WelcomeSection />
        <ProgressCard/>
        {activeCard === 0 && <SellerInfo />}
        {activeCard === 1 && registrationData.businessInfo.completed && <Companyinfo />}
      
        <SignedAggre />
      </div>
    </main>
  )
}

export default Businexdash