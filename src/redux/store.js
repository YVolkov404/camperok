import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import { filteredQuery } from './filter';

const rootReducer = combineReducers({
  offers: catalog,
  search: filteredQuery,
});

const persistConfig = {
  key: 'offer',
  storage,
  whitelist: ['offers', 'search'],
  blacklist: ['chakra'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
