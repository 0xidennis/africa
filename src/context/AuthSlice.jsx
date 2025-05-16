// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useAuth } from './AuthContext';

export const sendOtpThunk = createAsyncThunk(
  'Auth/sendOtp', 
  async (email, thunkAPI) => {
    try {
      return await sendOtp(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const verifyOtpThunk = createAsyncThunk(
  'Auth/verifyOtp',
  async ({ email, otp }, thunkAPI) => {
    try {
      return await verifyOtp({ email, otp });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    message: '',
    isOtpSent: false,
    isOtpVerified: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.isOtpSent = true;
      })
      .addCase(sendOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to send OTP';
      })

      .addCase(verifyOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.isOtpVerified = true;
      })
      .addCase(verifyOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to verify OTP';
      });
  },
});

export default authSlice.reducer;
