// reducers/authReducer.js
const initialState = {
    loading: false,
    error: null,
    otpSent: false,
    otpVerified: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_OTP_SUCCESS':
        return { ...state, otpSent: true };
      case 'SEND_OTP_FAIL':
        return { ...state, error: action.payload };
      case 'VERIFY_OTP_SUCCESS':
        return { ...state, otpVerified: true };
      case 'VERIFY_OTP_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  