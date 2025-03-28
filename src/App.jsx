
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

const App = () => {
  return (
    <div>
    
      
        {/* <Home/> */}
        <Signin/>
      <Reg/>
      <Verification/>
      <Buyerverif/>
      {/* <Businexinfo/> */}
      {/* <Businexdash/> */}
      {/* <Companyinfo/> */}
      {/* <Chartbar/> */}
      {/* <Dashboard/> */}
    
    </div>
  )
}

export default App
