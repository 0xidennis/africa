
import React,{ createContext, useState,useContext } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [otpSent, setOtpSent] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
//   const navigate = useNavigate();
const register = async (email) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setUser(data.user); 
      return data;
    } catch (error) {
      console.error("Registration Error:", error.message);
      throw error;
    }
  };

//   otp verification
  const API_BASE_URL = "http://localhost:3000/api/v1/verifyOtp/tope3@gmail.com/552335";

  // Function to send OTP to the user
  const sendOtp = async (email) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/send-otp`, { email });
      setOtpSent(true);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Function to verify the entered OTP
  const verifyOtp = async (email, otp) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/verify-otp`, { email, otp });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };


  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (!response.ok) throw new Error(data.message || "Login failed");

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user,setUser, loading,setLoading, error,setError,
     login, logout,register,otpSent,setOtpSent,sendOtp, verifyOtp }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);