import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    resetPasswordStart: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    resetPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { resetPasswordStart, resetPasswordSuccess, resetPasswordFailure } = passwordSlice.actions;
export default passwordSlice.reducer;

// Thunks
export const resetPassword = (email) => async (dispatch) => {
  dispatch(resetPasswordStart());
  try {
    await axios.post("/api/reset-password", { email });
    dispatch(resetPasswordSuccess());
  } catch (error) {
    dispatch(resetPasswordFailure(error.response.data.message));
  }
};
