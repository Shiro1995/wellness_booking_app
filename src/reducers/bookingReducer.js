import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  listBooking: [],
  isLoadingCreate: false,
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
    setLoadingCreate(state, { payload: loading }) {
      state.isLoadingCreate = loading;
    },
    updateBooking(state, { payload: { input } }) {
      let tempList = state.listBooking;
      tempList.unshift({...input, _id: input.created_at});
      state.listBooking = tempList;
      state.isLoadingCreate = false;
    },
  },
});

export const { setLoading, setBookingData, signOut, updateBooking, setLoadingCreate } =
  bookingSlice.actions;

export const bookingReducer = bookingSlice.reducer;
