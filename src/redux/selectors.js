import { useSelector } from 'react-redux';

export const selectOffer = state => state.offer.offer;
export const selectFilter = state => state.filter.filter;

const selectIsLoading = state => state.isLoading;
const selectIsErrors = state => state.isError;

export const useData = () => {
  const offercart = useSelector(selectOffer);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsErrors);
  // const filter = useSelector(selectFilter);

  return {
    offercart,
    loading,
    error,
    // filter,
  };
};
