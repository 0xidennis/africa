
import React from 'react'
import { AuthProvider } from "./context/AuthContext";
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
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Personalinfo from './Manufacturer/Personalinfo';
import BuyerDash from './Buyerdash/BuyerDash';
import Product from './ProductPage/Product';
import Order from './Page/Order';
import SellerDash from './Page/SellerDash';
import Overvew from './Dashboards/Overvew';
import SellerProduct from './Dashboards/SellerProduct';
import ProductForm from './Dashboards/ProductForm';
import ChatRoom from './Dashboards/ChatRoom';
import ProgressCard from './Dashboards/ProgressCard';
import SellerInfo from './Dashboards/SellerInfo';
import SellerProductPage from './Page/SellerProductPage';
import AddNew from './Dashboards/AddNew';
import Sellerformpage from './Page/Sellerformpage';
import ProductBeforeLogin from './ProductPage/ProductBeforeLogin';
import NavbarBeforeLogin from './ProductPage/NavbarBeforeLogin';

const App = () => {
  return (
    <div>
         <AuthProvider>
    
      <Router>
      <Routes>
      <Route path="/sellerdash" element={<SellerDash />}>
      <Route index element={<Businexdash />} />
    
          <Route path="messages" element={<ChatRoom/>} />
          {/* <Route path="orders" element={<Order/>} /> */}
          <Route path="progresscard" element={<ProgressCard/>} />
          <Route path="businessinfo" element={<SellerInfo/>} />
          <Route path="productform" element={<ProductForm/>} />
          <Route path="sellerproductpage" element={<SellerProductPage/>} />
          <Route path="sellerproduct" element={<SellerProduct/>} />
          <Route path="addnew" element={<AddNew/>} />
          <Route path="sellerform" element={<Sellerformpage/>} />
      </Route>
         <Route path="/" element={<Home />} />
         <Route path="/buyerdash" element={<BuyerDash/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/buyer" element={<Buyerverif/>} />
          <Route path="/businexinfo" element={<Businexinfo />} />
          <Route path="/businexdash" element={<Businexdash/>} />
          <Route path="/companyinfo" element={<Companyinfo/>} />
          <Route path="/chartbar" element={<Chartbar/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/seller" element={<Personalinfo/>} />
         
          <Route path="/product" element={<Product/>} />
        
          <Route path="/navbarbeforelogin" element={<NavbarBeforeLogin/>} />
          <Route path="/productbeforelogin/:category" element={<ProductBeforeLogin/>} />
          
      < Route path="/Verification" element={<Verification/>}/>
    
      </Routes>
      </Router>
      </AuthProvider>
    
      

      
    
    </div>
  )
}

export default App
