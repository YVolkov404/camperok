import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import URLSearchParams from 'url-search-params';

axios.defaults.baseURL = `https://659f38755023b02bfe895970.mockapi.io`;
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 4);

const params = {
  headers: { 'content-type': 'application/json' },
  params: {
    page: 1,
    limit: 4,
  },
};

export const getOffersResponse = createAsyncThunk(
  'offer/getOffersResponse',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`, params);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOffersByDetails = createAsyncThunk(
  'offer/getOffersByDetails',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/favorites/${query}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
