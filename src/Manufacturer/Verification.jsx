import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Link,useNavigate,useLocation } from "react-router-dom";
import Products from '../assets/image/Products.png';
import logo from '../assets/logo/from.png';

const Verification = () => {
   const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(90);
  const inputRefs = useRef([]);
  const { verifyOtp, sendOtp, loading, error, emailForVerification,setError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { email, role } = location.state || {};

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otp = code.join("");
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP");
      return;
    }
    
    try {
      await verifyOtp(emailForVerification, otp);
    // Navigate based on user role
    if (role === 'seller') {
      navigate('/seller', { 
        state: { 
          email, 
          role 
        } 
      });
    } else if (role === 'buyer') {
      navigate('/buyer');
    }
  } catch (err) {
    // Error is already set in the AuthContext
  }
  };

  const handleResendOtp = async () => {
    setError("");
    setCode(["", "", "", "", "", ""]);
    setTimeLeft(90);
    try {
      await sendOtp(emailForVerification);
    } catch (err) {
      // Error is already set in the AuthContext
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Header */}
      <header className="bg-white p-1.5">
        <Link to="/">
          <div className="container mx-auto">
            <img src={logo} width={80} height={40} alt="" className='mt-2 ml-5' />
          </div>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[black] bg-opacity-90 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={Products} alt="Background" className="object-cover h-150 w-full" priority />
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

            {/* Verification Form */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md border-0 bg-white p-10 shadow-lg rounded-lg">
                <div className="mb-6 text-start">
                  <h2 className="text-xl font-bold text-[#5c3c28] mb-3">Verify Your Email</h2>
                  <p className="text-md text-black">
                    A confirmation code has been sent to your email
                    <br />
                    <span className="text-[#eba91c]">{emailForVerification}</span>
                  </p>
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <form onSubmit={handleVerify} className="space-y-6">
                  <div className="flex justify-center gap-3 my-4">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:border-[#E6A817] focus:ring-1 focus:ring-[#E6A817] focus:outline-none"
                        required
                      />
                    ))}
                  </div>

                  <div className="text-center text-gray-500 mb-4">
                    {timeLeft > 0 ? (
                      `Code expires in ${formatTime(timeLeft)}`
                    ) : (
                      "Code has expired"
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#eba91c] text-white py-3 rounded font-medium hover:bg-[#4a2e19] transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify"}
                  </button>

                  <button
                    type="button"
                    className="w-full mt-3 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
                    onClick={handleResendOtp}
                    disabled={loading || timeLeft > 0}
                  >
                    Resend OTP
                  </button>

                  <div className="text-center mt-6 space-y-2 text-md">
                    <p className="text-[#5d3c21]">Having problems receiving mails?</p>
                    <p className="text-black">Please check your spam folder</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Keep your existing footer */}
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
  );
};

export default Verification;