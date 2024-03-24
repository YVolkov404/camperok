import { createSlice } from '@reduxjs/toolkit';
import { useOfferCart } from './selectors';

let vehicles = {
  equipment: useOfferCart.details,
  type: useOfferCart.details,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: vehicles,
  reducers: {
    getQuery(state, action) {
      state.vehicles.filter(
        vehicle => vehicle.details === action.payload.details
      );
    },
  },
});

//-------------------------------------------------------
export const { getQuery } = filterSlice.actions;
export const filteredQuery = filterSlice.reducer;
export const selectedFilter = state => state.filter.vehicles;
