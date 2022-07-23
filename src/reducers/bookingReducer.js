import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  listBooking: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setLoading(state, { payload: loading }) {
      state.isLoading = loading;
    },
    setBookingData(state, { payload: { list } }) {
      state.listBooking = list;
      state.isLoading = false;
    },
    signOut() {
      return initialState;
    },
  },
});

export const { setLoading, setBookingData, signOut } = bookingSlice.actions;

export const bookingReducer = bookingSlice.reducer;
