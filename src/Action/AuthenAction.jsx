// actions/authActions.js
export const sendOTP = (email) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/initiateRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      dispatch({ type: 'SEND_OTP_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'SEND_OTP_FAIL', payload: error });
    }
  };


  export const verifyOTP = (email, otp) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      dispatch({ type: 'VERIFY_OTP_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'VERIFY_OTP_FAIL', payload: error });
    }
  };
  
  