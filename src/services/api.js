import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://659f38755023b02bfe895970.mockapi.io`;

export const getOffers = createAsyncThunk(
  'offers/getOffersResponse',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`);
      if (response.ok) {
        axios.url.searchParams.append('page', 1);
        axios.url.searchParams.append('limit', 4);

        console.log(response);
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOffersByDetails = createAsyncThunk(
  '/offers/getOffersByDetails',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/details/${query}`, {
        queryData: JSON.stringify(query),
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
