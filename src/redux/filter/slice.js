import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return action.payload.value;
    },
  },
});

export const addFilter = filterSlice.actions.addFilter;

export const filterReducer = filterSlice.reducer;
