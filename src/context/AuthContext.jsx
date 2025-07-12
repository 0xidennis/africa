// context/AuthContext.js
import React, { createContext, useContext,useEffect,useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();
// export const useProducts = () => useContext(ProductContext);

export function AuthProvider({ children }) {
  const [registrationData, setRegistrationData] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailForVerification, setEmailForVerification] = useState('');
  const [role, setRole] = useState(''); // 'seller' or 'buyer'
  const [products, setProducts] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(null);
  





  
  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
  
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
  
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred during login');
      console.error(err);
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
  const register = async (email,role) => {
    setLoading(true);
    setError(null);
   
  
    try {
      const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/initiateRegistration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
  
      setEmailForVerification(email);
      setRole(role);
     
  
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred during registration');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  // Password confirmation function
  const confirmPassword = async (email, password, confirmPasswordValue) => {
    setLoading(true);
    setError(null);
  
    try {
      if (password !== confirmPasswordValue) {
        throw new Error("Passwords don't match");
      }
     // For buyers, include verification status
     const payload = {
      email,
      password,
      role,
      isVerified: true // Assuming buyer verification happens during OTP step
    };

      const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({payload}),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Password confirmation failed');
      }
            // Set user data for buyer
            const userData = {
              ...data.user,
              isComplete: true,
              isVerified: true
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));      
  
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred during password confirmation');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };



console.log({ emailForVerification, role, personalInfo });
// Complete seller registration
const completeSellerRegistration = async (businessInfo) => {
  setLoading(true);
  setError(null);
  const payload = {
    email: emailForVerification,
    role,
    password: personalInfo.password,
    confirmPassword: personalInfo.confirmPassword,
    fullName: personalInfo.fullName,
    phoneNumber: personalInfo.phoneNumber,
    businessInfo: {
      ...businessInfo,
      completed: true,
    },};
  

  try {

    const response = await fetch( 'https://fromafrica-backend.onrender.com/api/v1/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
   

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    // Set user data and mark as complete
    const userData = {
      ...data.user,
      isComplete: true,
      isVerified: true
    };

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    
    return data;
  } catch (err) {
    setError(err.message || 'Registration failed');
    console.error('Registration error:', err);
    throw err;
  } finally {
    setLoading(false);
  }
};





  
    // Verification function
    const verifyOtp = async (email,otp) => {
      setLoading(true);
      setError(null);
    

      try {
        if (!emailForVerification) {
          throw new Error("No email found for verification");
        }
        const response = await fetch('https://fromafrica-backend.onrender.com/api/v1/verifyOtp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp }),
        });
    
        const data = await response.json();
       
    
        if (!response.ok) {
          throw new Error(data.message || 'Verification failed');
        }
   
    
        return data;
      } catch (err) {
        setError(err.message || 'An error occurred during verification');
        console.error(err);
        throw err;
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

  // const fetchProducts = async () =>{
  //   try {
  //     setLoading(true);
  //     const res = await axios.get("http://localhost:3000/api/v1/get-all-products");
  //     setProducts(res.data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const addProduct = async (formData) => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.post("http://localhost:3000/api/v1/addProduct", formData);
  //     setProducts((prev) => [...prev, res.data]);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

 /**
 * Fetch all products from server
 */
//  const fetchProducts = async () => {
//   try {
//     setLoading(true);
//     setError(null);

//     const res = await fetch('http://localhost:3000/api/v1/my-products', {
//       method: 'GET',
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json();
//     setProducts(data);
//   } catch (err) {
//     console.error("Fetch error:", err);
//     setError(err.message || "Failed to fetch products");
//   } finally {
//     setLoading(false);
//   }
// };

// /**
//  * Add a new product
//  * After adding, re-fetch all products to sync state with server.
//  */
// const addProduct = async (formData) => {
//   try {
//     setLoading(true);
//     setError(null);

//     const res = await fetch("http://localhost:3000/api/v1/addProduct", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to add: ${res.status} ${res.statusText}`);
//     }

//     // Re-fetch to get updated list
//     await fetchProducts();
//   } catch (err) {
//     console.error(err);
//     setError(err.message || "Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };

// /**
//  * Initial load
//  */
// useEffect(() => {
//   fetchProducts();
// }, []);


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
    personalInfo,
    setPersonalInfo,
    completeSellerRegistration,
    role,
    setError,
    setUser,
    registrationData,
        activeCard,
        setActiveCard,
        updateBusinessInfo,
        updateCompanyInfo,
        // fetchProducts,
        // addProduct,
        // products
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}