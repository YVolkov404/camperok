import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://659f38755023b02bfe895970.mockapi.io/',
  headers: { 'content-type': 'application/json' },
});

const url = new URL('https://659f38755023b02bfe895970.mockapi.io/');
url.searchParams.append('page', 1);
url.searchParams.append('limit', 4);

export const getOffers = createAsyncThunk(
  'adverts/getOffers',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(url, 'adverts/');
      if (response.ok) {
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOffersByDetails = createAsyncThunk(
  'adverts/getOffersByDetails',
  async (vehicle, thunkAPI) => {
    try {
      const response = await instance.get(
        `adverts/details/${vehicle}`,
        vehicle
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
