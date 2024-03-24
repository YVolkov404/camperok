import { createSelector, createSlice } from '@reduxjs/toolkit';
import { offer, details } from '../redux/selectors';

let vehicles = {
  equipment: offer,
  type: details,
};

console.log(vehicles);

const filterSlice = createSlice({
  name: 'filter',
  initialState: vehicles,
  reducers: {
    getQuery(state, action) {
      state.vehicles.filter(vehicle => `${vehicle.id}` === action.payload.id);
    },
  },
});

export const filteredOffer = createSelector([filterSlice], filter =>
  filteredOffer.filter(prop => prop.iD.includes(filter.toLowerCase()))
);

//-------------------------------------------------------
export const { getQuery } = filterSlice.actions;
export const filteredQuery = filterSlice.reducer;
export const selectedFilter = state => state.filter.vehicles;
