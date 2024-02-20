// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface AuthData {
  token: string | null;
  authData: any;
  authInfo: {};
}

interface SetAuthPayload {
  token: string | null;
  authData: any;
  authInfo: {};
}

const initialState: AuthData = {
  // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlmY2I5YzA1MTBjY2ZjNmU4OGMwYTYiLCJuYW1lIjoiU2FicmluYSIsImVtYWlsIjoic2FicmluYUBjdXN0b21lci5jb20iLCJwaG9uZSI6IjAxMDEwMTAxMDEwIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzA2MDM5MjUwLCJleHAiOjE3MDg2MzEyNTB9.FVmlWkEYPtcMAbq2Onrvirn2z0THVYS86DVcG73gpHc",
  token:  localStorage.getItem('token') || null,
  authData: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')!) : {},
  authInfo: JSON.parse(localStorage.getItem('authInfo') || '{}'),
};

export const authDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<SetAuthPayload>) => {
      const { token, authInfo, authData } = action.payload;
      state.token = token;
      state.authInfo = authInfo;
      state.authData = authData;
      localStorage.setItem('token', token || ''); // Save token to local storage
      localStorage.setItem('authInfo', JSON.stringify(authInfo)); // Save authInfo to local storage
    },
    logout: (state) => {
      state.token = null;
      state.authData = {};
      state.authInfo = {};
      localStorage.removeItem('token'); // Remove token from local storage
      localStorage.removeItem('authInfo'); // Remove authInfo from local storage
    },
  },
});

export const { setAuth, logout } = authDataSlice.actions;

export default authDataSlice.reducer;
