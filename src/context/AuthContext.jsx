// context/AuthContext.js
import React, { createContext, useContext,useEffect,useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();
// export const useProducts = () => useContext(ProductContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailForVerification, setEmailForVerification] = useState('');
  const [role, setRole] = useState(''); // 'seller' or 'buyer'
  const [products, setProducts] = useState([]);





  
  // Login function
  const login = async (email, password,userData) => {
    setLoading(true);
    setError(null);
    
    
    try {
      const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      

       // Validate required fields exist
    // if (!data.email || !data.role || !data.token) {
    //   throw new Error('Incomplete user data received from server');
    // }

      // Set user data after successful login
      setUser({
        email: data.email,
        role: data.role,
        token: data.token,
        fullName: data.fullName,
        companyName: data.companyName
      });
      // store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: data.email,
        role: data.role,
        token: data.token,
        fullName: data.fullName,
        companyName: data.companyName
      }));
      
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred during login');
      console.error('Login error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
   // Add this to check for existing session on app load
   useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  // Registration function
  const register = async (email, role ,) => {
    setLoading(true);
    setError(null);
    setUser({ email, role }); // Ensure user always has email
    
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
  // Password confirmation function
  const confirmPassword = async (email, password, confirmPassword) => {
    setLoading(true);
    setError(null);
    
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }

      const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          password,
          role: 'buyer' // Force buyer role as per requirements
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Password confirmation failed');
      }

      // Update user with complete registration status
      setUser({ ...user, isComplete: true });
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred during password confirmation');
      console.error('Password confirmation error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

//    // context/AuthContext.js
// const completeRegistration = async (personalInfo, businessInfo) => {
//   setLoading(true);
//   setError(null);
  
//   try {
//     if (!user) {
//       throw new Error("User information is missing");
//     }

//     const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ 
//         ...user,
//         ...personalInfo,
//         ...businessInfo,
//         role: user.role
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'Registration completion failed');
//     }

//     // Update user with complete registration status
//     setUser({ 
//       ...user, 
//       ...personalInfo,
//       ...businessInfo,
//       isRegistrationComplete: true 
//     });
    
//     return data;
//   } catch (err) {
//     setError(err.message || 'An error occurred during registration completion');
//     console.error('Registration completion error:', err);
//     throw err;
//   } finally {
//     setLoading(false);
//   }
// }
const completeRegistration = async (completeUserData) => {
  try {
    setLoading(true);
    // Send all user data to your backend
    const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(completeUserData)
    });

    // Handle response and login user
    setUser(response.data);
    return response.data;
  } catch (err) {
    setError(err.response?.data?.message || err.message);
    throw err;
  } finally {
    setLoading(false);
  }
};

  
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

    const [registrationData, setRegistrationData] = useState({
      businessInfo: {
        businessName: "",
        ownerName: "",
        country: "",
        phoneNumber: "",
        officeAddress: "",
        completed: false
      },
      companyInfo: {
        companyName: "",
        registrationNumber: "",
        cacNumber: "",
        certificate: "",
        tin: "",
        completed: false
      }
    });
  
    const [activeCard, setActiveCard] = useState(null);
  
    const updateBusinessInfo = async (data) => {
      try {
        // API call to save business info
        const response = await axios.post('http://localhost:3000/api/v1/edit-business-info', data);
        
        setRegistrationData(prev => ({
          ...prev,
          businessInfo: {
            ...data,
            completed: true
          }
        }));
        
        return response.data;
      } catch (error) {
        console.error("Error saving business info:", error);
        throw error;
      }
    };
  
    const updateCompanyInfo = async (data) => {
      try {
        // API call to save company info
        const response = await axios.post('http://localhost:3000/api/v1/edit-company-info', data);
        
        setRegistrationData(prev => ({
          ...prev,
          companyInfo: {
            ...data,
            completed: true
          }
        }));
        
        return response.data;
      } catch (error) {
        console.error("Error saving company info:", error);
        throw error;
      }
    };

  const fetchProducts = async () =>{
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/v1/get-all-products");
      setProducts(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/v1/addProduct", formData);
      setProducts((prev) => [...prev, res.data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    user,
    loading,
    login,
    error,
    register,
    verifyOtp,
    sendOtp,
    emailForVerification,
    confirmPassword,
    completeRegistration,
    role,
    setError,
    setUser,
    registrationData,
        activeCard,
        setActiveCard,
        updateBusinessInfo,
        updateCompanyInfo,
        fetchProducts,
        addProduct,
        products
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}