// context/AuthContext.js
import React, { createContext, useContext,useEffect,useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { data } from 'react-router-dom';

const AuthContext = createContext();
// export const useProducts = () => useContext(ProductContext);

export function AuthProvider({ children }) {
  const [registrationData, setRegistrationData] = useState({
    businessInfo: { completed: false },
  companyInfo: { completed: false },
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailForVerification, setEmailForVerification] = useState('');
  const [role, setRole] = useState(''); // 'seller' or 'buyer'
  const [products, setProducts] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [activeCard, setActiveCard] = useState(0)
  
  const [formData, setFormData] = useState({
    nameSurname:'',
    country:'nigeria',
    address:'',
    email:'',
    phoneNumber:'',
    buyerCode:'',

  });

 
  const updateBuyer =async (e) =>{
    setLoading (true);
    setError(null);
    setSuccess(false);

    try {
      const token = Cookies.get('authToken'); 
      if (!token) throw new Error("No auth token found");
      const params = new URLSearchParams(formData).toString();
      console.log(params)
      const response = await fetch(
        `https://fromafrica-backend.onrender.com/v1/update-buyer?${params}`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to update buyer info.");
      }

      setSuccess("Buyer info updated successfully!");
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  





  
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
      Cookies.set('authToken', data.user?.token, {path: '/'}); 
      setUser(data.user);
     
  
      return data?.user;
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
    const cookieUser = Cookies.get('user');
    if (cookieUser) {
      setUser(JSON.parse(cookieUser));
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
      Cookies.set('registrationData', JSON.stringify({ email, role }), { expires: 7 });
  
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
      isVerified: true ,
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
            Cookies.set('user', JSON.stringify(userData), { expires: 7 });
  
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred during password confirmation');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };



// console.log({ emailForVerification, role, personalInfo });
// Complete seller registration
const completeSellerRegistration = async (businessInfo) => {
  setLoading(true);
  setError(null);
  const payload = {
    email: emailForVerification,
    password: personalInfo.password,role,
    name: personalInfo.fullName,
    phone: personalInfo.phoneNumber,
    avatar: personalInfo.avatar || "", // optional
    address: `${businessInfo.shippingAddress}, ${businessInfo.state}, ${businessInfo.country}`,
    confirmPassword: personalInfo.confirmPassword,
   
    sellerDetails: {
      companyName: businessInfo.companyName,
      country: businessInfo.country,
      state: businessInfo.state,
      shippingAddress: businessInfo.shippingAddress,
      socialMedia: businessInfo.socialMedia,
    },};
  
    console.log("🚀 Sending payload to backend:", payload);
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
      isVerified: true,
      companyName: businessInfo.companyName,
    };

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    Cookies.set('user',JSON.stringify(userData), {expires:7})
    
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
   
       Cookies.set('AuthToken', data.token,{expires:7})
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

  
    const updateBusinessInfo = async (data) => {

      try {
        const token = Cookies.get('authToken');
        console.log('Auth Token (updateBusinessInfo):', token);
        if (!token) throw new Error('No authentication token found');
        const response = await fetch(
          'https://fromafrica-backend.onrender.com/api/v1/edit-business-info',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
               "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
          }
        );
        // console.log('Auth Token(from cookies):', Cookies.get('authToken'));
    
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || 'Failed to update business info.');
        }
    
        const result = await response.json();
    
        setRegistrationData((prev) => ({
          ...prev,
          businessInfo: {
            ...data,
            completed: true,
          },
        }));
    
        return result;
      } catch (error) {
        console.error('Error saving business info:', error);
        throw error;
      }
    };
    
  
    const updateCompanyInfo = async (data) => {
      try {
        const token = Cookies.get('authToken');
        if (!token) throw new Error('No authentication token found');
        // API call to save company info
        const response = await fetch('https://fromafrica-backend.onrender.com/edit-company-info', {
          method:'PUT',
          headers:{
           'content-type':'application/json',
           'Authorization': `Bearer ${token}`,
          },
          body:JSON.stringify(data)

        });
        
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


 
 // Fetch all products from server

 const fetchProducts = async () => {
  try {
    setLoading(true);
    setError(null);
     const token = Cookies.get('authToken');

    const res = await fetch('https://fromafrica-backend.onrender.com/api/v1/my-products', {
      method: 'GET',
      headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // Include auth token
       },
    
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    setProducts(data);
  } catch (err) {
    console.error("Fetch error:", err);
    setError(err.message || "Failed to fetch products");
  } finally {
    setLoading(false);
  }
};


// Function to add a new product
const addProduct = async (formData) => {
  try {
    setLoading(true);
    setError(null);
      // ✅ Safely get token from user context
      const token = Cookies.get("authToken");
      // console.log("Auth Token (addProduct):", token);
      if (!token) {
        throw new Error("No authentication token found");
      }

    const res = await fetch("https://fromafrica-backend.onrender.com/api/v1/addProduct", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Include auth token,
        
      },
      body: formData,
    });

    if (!res.message) {
      const errorText = await res.text();
      throw new Error(data.message`Failed to add: ${res.status} ${res.statusText}`);
    }

    // Re-fetch to get updated list
    await fetchProducts();
  } catch (err) {
    console.log("Add Product Error:", err.message);
    setError(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

// /**
 //  * Fetch all products from the server
useEffect(() => {
  fetchProducts();
}, []);

useEffect(()=>{
  const storedUser=Cookies.get('user');
  if (storedUser){
    setUser(JSON.parse(storedUser));
  }
},[])

const logout = () => {
  setUser(null);
  Cookies.remove('user');
  Cookies.remove('authToken');
};


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
    logout,
    registrationData,
        activeCard,
        setActiveCard,
        updateBusinessInfo,
        updateCompanyInfo,
        formData,
        setFormData,
        updateBuyer,
        registrationData,
        setRegistrationData,
        
        fetchProducts,
        addProduct,
        products
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}