import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    getFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { getFilter } = filterSlice.actions;
export const filteredQuery = filterSlice.reducer;
