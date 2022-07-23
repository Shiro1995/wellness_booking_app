import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  isLogin: undefined,
  userName: '',
};

const authenSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setLoading(state, { payload: loading }) {
      state.isLoading = loading;
    },
    setLoginSuccess(state, { payload: userName }) {
      state.isLogin = true;
      state.userName = userName;
      state.isLoading = false;
    },
  },
});

export const { setLoading, setLoginSuccess, onLogout } = authenSlice.actions;

export const authenReducer = authenSlice.reducer;
