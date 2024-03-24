import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { catalog } from '../redux/slice';

const persistConfig = {
  key: 'offer',
  storage: storage,
  whitelist: ['_id', 'filteredOffers'],
  blacklist: ['chakra'],
};

export const store = configureStore({
  reducer: {
    offer: persistReducer(persistConfig, catalog),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
