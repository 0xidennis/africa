import React from 'react'
import logo from '../assets/logo/from.png'

const Footer = () => {
  return (
    <div>
         {/* Footer */}
                      <footer className="bg-[#5c3c28] text-white py-10">
                        <div className="container mx-auto px-4">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Logo and Tagline */}
                            <div>
                            <img src={logo} width={120} height={40} alt="" className='mb-4 h-10 w-auto ' />
                           
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
                  
                          <div className="border-t border-[#6d4c31] mt-8 pt-6 text-sm text-center lg:text-center md:text-right">
                            © 2025 fromafricab2b.com. All rights reserved.
                          </div>
                        </div>
                      </footer>
    </div>
  )
}

export default Footer