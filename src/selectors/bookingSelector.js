import { createSelector } from 'reselect';

export const selectBooking = state => state.bookingState;

export const selectBookingState = createSelector(selectBooking, bookingState => bookingState);
