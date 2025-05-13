import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Products from '../assets/image/Products.png'
import logo from '../assets/logo/from.png'
import { Link } from 'react-router-dom'

const Personalinfo = () => {
        const [formData, setFormData] = useState({
            fullName: "",
            phoneNo: "",
            password: "",
            confirmPassword: "",
          });
        
          const [errors, setErrors] = useState({
            fullName: "",
            phoneNo: "",
            password: "",
            confirmPassword: "",
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({
              ...prev,
              [name]: value,
            }));
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
        
            const newErrors = {
              fullName: formData.fullName ? "" : "Full name is required",
              phoneNo: formData.phoneNo ? "" : "Phone number is required",
              password: formData.password ? "" : "Password is required",
              confirmPassword: formData.password !== formData.confirmPassword ? "Passwords do not match" : "",
            };
        
            setErrors(newErrors);
        
            if (!Object.values(newErrors).some((error) => error)) {
              console.log("Form submitted:", formData);
            }
          };

  return (
   <div className="flex min-h-screen flex-col overflow-x-hidden">
                 {/* Header */}
                 <header className="bg-white p-1.5">
                  <Link to="/">
                   <div className="container mx-auto">
                     <img src={logo} width={80} height={40} alt="" className='mt-2 ml-5 ' />
                   </div>
                   </Link>
                 </header>
             
                 {/* Main Content */}
                 <main className="flex-1 bg-[black] bg-opacity-90 relative">
                   <div className="absolute inset-0 z-0 opacity-30 ">
                     <img src={Products} alt="Background" fill className="object-cover h-150 w-full" priority />
                   </div>
             
                   <div className="container mx-auto px-4 py-16 relative z-10">
                     <div className="flex flex-col lg:flex-row items-center justify-between">
                       {/* Left side text */}
                       <div className="mb-10 lg:mb-0 text-white">
                         <h1 className="text-5xl font-bold mb-2">
                           <span className="text-[#eba91c]">Made In</span> Africa
                         </h1>
                         <h2 className="text-5xl font-bold">
                           Sold <span className="text-[#eba91c]">Continental</span>
                         </h2>
                       </div>
             
                       {/* Businexinfo */}
                       <div className="max-w-md  p-8 bg-white rounded ">
         <div className="mb-6">
           <h1 className="text-2xl font-bold text-[#5c3c28] mb-2">Personal Information</h1>
           <p className="text-gray-600">Setup your password and provide your phone Number</p>
         </div>
   
         <form onSubmit={handleSubmit} className="space-y-6">
           <div className="space-y-2">
             <label htmlFor="fullName" className="block text-md font-medium">Full Name</label>
             <input
               id="fullName"
               name="fullName"
               placeholder="Full Name"
               value={formData.fullName}
               onChange={handleChange}
               className={`w-full p-2 border rounded ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
             />
             {errors.fullName && <p className="text-red-500 text-md">{errors.fullName}</p>}
           </div>
   
           <div className="space-y-2">
             <label htmlFor="phoneNo" className="block text-md font-medium">Phone No</label>
             <div className="flex gap-2">
               <input id="countryCode" value="+234" readOnly className="w-20 p-2 border rounded bg-gray-200" />
               <input
                 id="phoneNo"
                 name="phoneNo"
                 placeholder="Phone No Here"
                 value={formData.phoneNo}
                 onChange={handleChange}
                 className={`w-full p-2 border rounded ${errors.phoneNo ? "border-red-500" : "border-gray-300"}`}
               />
             </div>
             {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
           </div>
   
           <div className="space-y-2">
             <label htmlFor="password" className="block text-md font-medium">Password</label>
             <input
               id="password"
               name="password"
               type="password"
               placeholder="Password"
               value={formData.password}
               onChange={handleChange}
               className={`w-full p-2 border rounded ${errors.password ? "border-red-500" : "border-gray-300"}`}
             />
             {errors.password && <p className="text-red-500 text-md">{errors.password}</p>}
           </div>
   
           <div className="space-y-2">
             <label htmlFor="confirmPassword" className="block text-md font-medium">Confirm Password</label>
             <input
               id="confirmPassword"
               name="confirmPassword"
               type="password"
               placeholder="Confirm Password"
               value={formData.confirmPassword}
               onChange={handleChange}
               className={`w-full p-2 border rounded ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
             />
             {errors.confirmPassword && <p className="text-red-500 text-md">{errors.confirmPassword}</p>}
           </div>
   
           <button type="submit" className="w-full p-3 bg-[#eba91c] hover:bg-[#D99A1F] text-white font-semibold rounded">
             Next
           </button>
         </form>
       </div>
                     </div>
                   </div>
                 </main>
             
                 {/* Footer */}
                 <footer className="bg-[#5c3c28] text-white py-10">
                   <div className="container mx-auto px-4">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                       {/* Logo and Tagline */}
                       <div>
                       <img src={logo} width={120} height={40} alt="" className='mb-4 h-10 w-auto ' />
                         {/* <image src="/logo.svg" alt="From Africa Logo" width={120} height={40} className="h-10 w-auto mb-4" /> */}
                         <p className="text-sm">
                           Connecting African Manufacturers
                           <br />
                           Excellence to the World
                         </p>
             
                         {/* <div className="flex space-x-4 mt-6">
                           <a href="#" className="text-white hover:text-yellow-500">
                             <Facebook size={20} />
                           </a>
                           <a href="#" className="text-white hover:text-yellow-500">
                             <Instagram size={20} />
                           </a>
                           <a href="#" className="text-white hover:text-yellow-500">
                             <Linkedin size={20} />
                           </a>
                           <a href="#" className="text-white hover:text-yellow-500">
                             <Twitter size={20} />
                           </a>
                         </div> */}
                       </div>
             
                       {/* Quick Links */}
                       <div>
                         <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                         <ul className="space-y-2">
                           <li>
                             <a href="/about" className="hover:text-yellow-500">
                               About Us
                             </a>
                           </li>
                           <li>
                             <a href="/how-it-works" className="hover:text-yellow-500">
                               How It Works
                             </a>
                           </li>
                           <li>
                             <a href="/success-stories" className="hover:text-yellow-500">
                               Success Stories
                             </a>
                           </li>
                         </ul>
                       </div>
             
                       {/* Categories */}
                       <div>
                         <h3 className="font-bold text-lg mb-4">Categories</h3>
                         <ul className="space-y-2">
                           <li>
                             <a href="/category/fashion" className="hover:text-yellow-500">
                               African Fashion
                             </a>
                           </li>
                           <li>
                             <a href="/category/accessories" className="hover:text-yellow-500">
                               African Accessories
                             </a>
                           </li>
                           <li>
                             <a href="/category/skincare" className="hover:text-yellow-500">
                               African Skincare
                             </a>
                           </li>
                         </ul>
                       </div>
             
                       {/* Contact */}
                       <div>
                         <h3 className="font-bold text-lg mb-4">Contact</h3>
                         <ul className="space-y-2">
                           <li>support@fromafrica.com</li>
                           <li>+1 234 567 8900</li>
                         </ul>
                       </div>
                     </div>
             
                     <div className="border-t border-[#6d4c31] mt-8 pt-6 text-sm text-center md:text-right">
                       © 2025 fromafricab2b.com. All rights reserved.
                     </div>
                   </div>
                 </footer>
               </div>
  )
}

export default Personalinfo