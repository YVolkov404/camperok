import { useSelector } from 'react-redux';

const selectOffer = state => state.offer.offer;
const selectIsLoading = state => state.isLoading;
const selectIsErrors = state => state.isError;

export const useData = () => {
  const offercart = useSelector(selectOffer);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsErrors);

  return {
    offercart,
    loading,
    error,
  };
};
