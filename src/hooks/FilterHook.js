import { createSelector } from '@reduxjs/toolkit';
import { selectOffer, selectFilter } from '../redux/selectors';

export const filteredOffers = createSelector(
  [selectOffer, selectFilter],
  (offercart, filter) =>
    offercart.filter(offer =>
      offer.location.toLowerCase().includes(filter.toLowerCase())
    )
);
