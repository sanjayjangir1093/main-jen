import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destination: "",
  checkInDate: "",
  checkOutDate: "",
  guests: { adults: 2, children: 0, rooms: 1 },
};

const hotelSearchResultSlice = createSlice({
  name: "hotelSearchResult",
  initialState,
  reducers: {
    setHotelSearchData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setHotelSearchData } = hotelSearchResultSlice.actions;
export default hotelSearchResultSlice.reducer;
