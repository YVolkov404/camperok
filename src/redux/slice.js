import { createSlice } from '@reduxjs/toolkit';
import { getOffers, getOffersByDetails } from 'services/api';

const initialState = {
  _id: '',
  name: '',
  price: Number(),
  rating: Number(),
  reviews: [Number()],
  location: '',
  description: '',
  details: {},
  gallery: [],
  isLoading: true,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOffers.pending, handlePending)
      .addCase(getOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getOffers = action.payload;
        state.error = null;
      })
      .addCase(getOffers.rejected, handleRejected)

      .addCase(getOffersByDetails, handlePending)
      .addCase(getOffersByDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getOffersByDetails = state.offer.details.filter(
          vehicle => vehicle === action.payload.description.vehicle
        );
        state.error = null;
      });
  },
});

export const catalog = catalogSlice.reducer;
