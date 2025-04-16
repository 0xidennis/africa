
import React from 'react'
// import { AuthProvider } from "./context/AuthContext";
import Home from './Page/Home'
import Signin from './Manufacturer/Signin'
import Reg from './Manufacturer/Reg'
import Verification from './Manufacturer/Verification'
import Buyerverif from './Manufacturer/Buyerverif'
import Businexinfo from './Manufacturer/Businexinfo'
import Businexdash from './Dashboards/Businexdash'
import Companyinfo from './Dashboards/Companyinfo'
import Chartbar from './Dashboards/Chartbar'
import Dashboard from './Dashboards/Dashboard'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/buyerverif" element={<Buyerverif/>} />
          <Route path="/businexinfo" element={<Businexinfo />} />
          <Route path="/businexdash" element={<Businexdash/>} />
          <Route path="/companyinfo" element={<Companyinfo/>} />
          <Route path="/chartbar" element={<Chartbar/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
