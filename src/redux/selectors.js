import { useSelector } from '@reduxjs/toolkit';

const selectDetails = state => state.offer.adverts.details;
const selectIsLoading = state => state.offer.adverts.isLoading;
const selectIsErrors = state => state.offer.adverts.isError;

export const useOfferData = () => {
  const details = useSelector(selectDetails);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsErrors);

  return {
    details,
    loading,
    error,
  };
};
