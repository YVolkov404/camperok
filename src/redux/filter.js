import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    getQuery: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// export const filteredOffer = createSelector([filterSlice], filter =>
//   filteredOffer.filter(prop => prop.id.includes(filter.toLowerCase()))
// );

export const { getQuery } = filterSlice.actions;
export const filteredQuery = filterSlice.reducer;
