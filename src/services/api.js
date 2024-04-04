import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import URLSearchParams from 'url-search-params';

axios.defaults.baseURL = `https://659f38755023b02bfe895970.mockapi.io`;
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 4);

export const getOffersResponse = createAsyncThunk(
  'offer/getOffersResponse',
  async ({ limit, filter, form }, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`, {
        headers: { 'content-type': 'application/json' },
        params: {
          page: 1,
          limit: `${limit}`,
          filter: `${filter}`,
          form: `${form}`,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOffersByLocation = createAsyncThunk(
  'offer/getOffersByLocation',
  async (location, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${location}`, location);
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
