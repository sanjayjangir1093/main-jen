import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import otpReducer from "./otpSlice";
import userReducer from "./userSlice";
import passwordReducer from "./passwordSlice";
import hotelSearchReducer from "./slices/hotelSearchResultSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    otp: otpReducer,
    user: userReducer,
    password: passwordReducer,
    hotelSearchResult: hotelSearchReducer,
  },
});
