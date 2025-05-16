import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailForVerification, setEmailForVerification] = useState("");
  const navigate = useNavigate();

  const register = async (email) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/initiateRegistration', { email });
      setEmailForVerification(email);
      setOtpSent(true);
      navigate('/verify-otp');
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const sendOtp = async (email) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/send-otp', { email });
      setEmailForVerification(email);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (email, otp) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/verifyOtp', { email, otp });
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate('/dashboard');
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", { email, password });
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      error, 
      otpSent,
      emailForVerification,
      login, 
      logout,
      register,
      sendOtp, 
      verifyOtp,
      setError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);