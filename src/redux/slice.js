import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getOffers, getOffersByDetails } from 'services/api';
import { selectedFilter } from './filter';

const initialState = {
  id: '',
  name: '',
  price: Number(),
  rating: Number(),
  reviews: [Number()],
  location: '',
  description: '',
  details: {},
  gallery: [],
  isLoading: true,
  isError: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const catalogSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOffers.pending, handlePending)
      .addCase(getOffers.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isError = null;
      })
      .addCase(getOffers.rejected, handleRejected)

      .addCase(getOffersByDetails.pending, state => {
        state.queryData = useSelector(selectedFilter);
      })
      .addCase(getOffersByDetails.fulfilled, (state, action) => {
        state.filter = action.payload;
        state.isError = null;
      })
      .addCase(getOffersByDetails.rejected, handleRejected);
  },
});

export const catalog = catalogSlice.reducer;
