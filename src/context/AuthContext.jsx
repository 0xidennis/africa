// context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailForVerification, setEmailForVerification] = useState('');
  const [role, setRole] = useState(''); // 'seller' or 'buyer'


  // Registration function
  const register = async (email, role ,) => {
    setLoading(true);
    setError(null);
    
    try {
      // Call your registration API here
      const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/initiateRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // Store email and role for verification
      setEmailForVerification(email);
      setRole(role);

      // If registration is successful
      setUser({ email, role });
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred during registration');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  }
  
    // Verification function
    const verifyOtp = async (email, otp) => {
      setLoading(true);
      setError(null);
      
      try {
        // Call your verification API here
        const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/verifyOtp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, otp }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || 'Verification failed');
        }
  
        // Set user data after successful verification
        setUser({ email, role });
        
        return data;
      } catch (err) {
        setError(err.message || 'An error occurred during verification');
        console.error('Verification error:', err);
        throw err; // Re-throw to handle in component
      } finally {
        setLoading(false);
      }
    };
  
    // Resend OTP function
    const sendOtp = async (email) => {
      setLoading(true);
      setError(null);
      
      try {
        // Call your resend OTP API here
        const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/resendOtp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || 'Failed to resend OTP');
        }
  
        return data;
      } catch (err) {
        setError(err.message || 'An error occurred while resending OTP');
        console.error('Resend OTP error:', err);
        throw err; // Re-throw to handle in component
      } finally {
        setLoading(false);
      }
    }

  ;

  const value = {
    user,
    loading,
    error,
    register,
    verifyOtp,
    sendOtp,
    emailForVerification,
    role,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}