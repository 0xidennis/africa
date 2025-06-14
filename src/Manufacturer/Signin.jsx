import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Products from '../assets/image/Products.png';
import logo from '../assets/logo/from.png';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, loading, error, setError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      
      if (user.role === 'seller') {
        navigate('/dashboard');
      } else if (user.role === 'buyer') {
        navigate('/buyerdash');
      } else {
        navigate('/buyerdash'); // Fallback for unknown roles
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      await login(email, password);
      // The useEffect will handle the navigation based on user role
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

            {/* Login Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold text-[#5c3c28] mb-2">Welcome back!</h2>
              <p className="text-gray-600 mb-6">Enter your e-mail to log in to your account</p>
              {error && <p className="text-red-500 mb-4">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5d3c21]"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="password" className="block text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5d3c21]"
                    required
                  />
                </div>

                <div className="flex justify-end mb-6">
                  <Link to="/forgot-password" className="text-[#eba91c] hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5d3c21] text-white py-3 rounded font-medium hover:bg-[#4a2e19] transition-colors"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <div className="mt-4 text-center">
                  <span className="text-gray-600">Don't have an account, </span>
                  <Link to="/register" className="text-[#eba91c] hover:underline">
                    Create Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Keep your existing footer */}
    </div>
  );
};

export default Signin;