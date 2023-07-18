import { createSlice } from '@reduxjs/toolkit';
import { register, refreshUser, logOut, logIn } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.pending](state) {
      state.error = null;
      state.isLoggedIn = true;
    },

    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = false;
    },

    [register.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },

    [refreshUser.pending](state) {
      state.error = null;
      state.isLoggedIn = true;
      state.isRefreshing = true;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },

    [refreshUser.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },

    [logOut.pending](state) {
      state.error = null;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [logOut.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },

    [logIn.pending](state) {
      state.error = null;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = false;
    },

    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});

const persistedReducer = persistReducer(authPersistConfig, authSlice.reducer);
export default persistedReducer;
