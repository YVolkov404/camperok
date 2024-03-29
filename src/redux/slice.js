import { createSlice } from '@reduxjs/toolkit';
import { getOffersResponse } from 'services/api';

const initialState = {
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
      .addCase(getOffersResponse.pending, handlePending)
      .addCase(getOffersResponse.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isError = null;
      })
      .addCase(getOffersResponse.rejected, handleRejected);

    // .addCase(getOffersByDetails.pending, handlePending)
    // .addCase(getOffersByDetails.fulfilled, (state, action) => {
    //   state.offer = action.payload;
    //   state.isError = null;
    // })
    // .addCase(getOffersByDetails.rejected, handleRejected);
  },
});

export const catalog = catalogSlice.reducer;
