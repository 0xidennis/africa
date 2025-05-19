import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Products from '../assets/image/Products.png';
import logo from '../assets/logo/from.png';

const Reg = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('seller');
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!role) {
      alert('Please select a role (Seller/Manufacturer or Buyer)');
      return;
    }

    try {
      await register(email, role);
      // On successful registration, navigate to verification
      navigate('/verification');
    } catch (err) {
      // Error is already set in the AuthContext
    }
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

            {/* Sign Up Form */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md border-0 bg-[white] p-10 shadow-lg rounded-lg">
                <div className="mb-6 text-start">
                  <h2 className="text-xl font-bold text-[#5c3c28] mb-3">Create Account</h2>
                  <p className="text-md text-black">Complete the details to create your account</p>
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="seller"
                        className={`flex items-center gap-2 cursor-pointer rounded-md border p-2 text-center ${role === 'seller' ? 'border-[#eba91c]' : 'border-black/20'}`}
                      >
                        <input
                          type="radio"
                          name="role"
                          id="seller"
                          checked={role === 'seller'}
                          onChange={() => setRole('seller')}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 rounded-full border ${role === 'seller' ? 'bg-[#eba91c] border-[#eba91c]' : 'border-gray-400'}`}></div>
                        Seller/Manufacturer
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="buyer"
                        className={`flex items-center gap-2 cursor-pointer rounded-md border p-2 text-center ${role === 'buyer' ? 'border-[#eba91c]' : 'border-black/20'}`}
                      >
                        <input
                          type="radio"
                          name="role"
                          id="buyer"
                          checked={role === 'buyer'}
                          onChange={() => setRole('buyer')}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 rounded-full border ${role === 'buyer' ? 'bg-[#eba91c] border-[#eba91c]' : 'border-gray-400'}`}></div>
                        Buyer
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5d3c21]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#eba91c] text-white py-3 rounded font-medium hover:bg-[#4a2e19] transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Sending OTP..." : "Continue"}
                  </button>

                  <div className="text-center text-md">
                    <p className='mb-6 text-black'>
                      Already have an account,{" "}
                      <Link to="/login" className="text-[#eba91c] hover:underline">
                        Log in
                      </Link>
                    </p>
                    <p className="mt-2 text-md text-gray-700">
                      By continuing you agree to From Africa,{" "} <br />
                      <a href="#" className="text-[#eba91c] hover:underline">
                        Terms and Conditions
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reg;