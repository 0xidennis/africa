import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Products from '../assets/image/Products.png'
import logo from '../assets/logo/from.png'
import React ,{ useState, useEffect, useRef } from "react";

const Verification = () => {
    const [code, setCode] = useState(["", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(90); // 1:30 in seconds
    const inputRefs = useRef([]);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const handleChange = (index, value) => {
      if (value.length <= 1) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
  
        // Auto-focus next input after entering a digit
        if (value && index < 3) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    };
  
    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
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
          <div className="container mx-auto">
            <img src={logo} width={80} height={40} alt="" className='mt-2 ml-5 ' />
          </div>
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
    
              {/* Login Form */}
              <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 w-130">
      <div className="w-full max-w-md space-y-6">
        <div className="text-start space-y-4">
          <h1 className="text-2xl font-bold text-[#4A3F35]">Create Account</h1>
          <p className="text-[black]">
            A confirmation code has been sent to your mail
            <br />
            <span className="text-[#E6A817]">Olawale@gmail.com</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 my-8">
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
              className="w-16 h-16 text-center text-xl border border-gray-300 rounded focus:border-[#E6A817] focus:ring-1 focus:ring-[#E6A817] focus:outline-none"
            />
          ))}
        </div>

        <div className="text-center text-gray-500 mb-4">{formatTime(timeLeft)}</div>

        <button className="w-full py-3 bg-[#eba91c] hover:bg-[#d99c14] text-white font-medium rounded">Next</button>

        <div className="text-center mt-6 space-y-2 text-md">
          <p className="text-[#5d3c21]">Having problems receiving mails?</p>
          <p className="text-[black]">Please check your spam folder</p>
        </div>
      </div>
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

export default Verification