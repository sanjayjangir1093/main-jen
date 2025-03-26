import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  otp: "",
  isVerified: false,
  loading: false,
  error: null,
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    sendOtpStart: (state) => {
      state.loading = true;
    },
    sendOtpSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    sendOtpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    verifyOtpStart: (state) => {
      state.loading = true;
    },
    verifyOtpSuccess: (state) => {
      state.isVerified = true;
      state.loading = false;
      state.error = null;
    },
    verifyOtpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  sendOtpStart,
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpStart,
  verifyOtpSuccess,
  verifyOtpFailure,
} = otpSlice.actions;

export default otpSlice.reducer;

// Thunks (async actions)
export const sendOtp = (email) => async (dispatch) => {
  dispatch(sendOtpStart());
  try {
    await axios.post("/api/send-otp", { email });
    dispatch(sendOtpSuccess());
  } catch (error) {
    dispatch(sendOtpFailure(error.response.data.message));
  }
};

export const verifyOtp = (otp) => async (dispatch) => {
  dispatch(verifyOtpStart());
  try {
    await axios.post("/api/verify-otp", { otp });
    dispatch(verifyOtpSuccess());
  } catch (error) {
    dispatch(verifyOtpFailure(error.response.data.message));
  }
};
