import { useSelector } from 'react-redux';

const selectOffer = state => state.offer.props;
const selectDetails = state => state.offer.details;
const selectIsLoading = state => state.offer.isLoading;
const selectIsErrors = state => state.offer.isError;

export const useData = () => {
  const offercart = useSelector(selectOffer);
  const details = useSelector(selectDetails);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsErrors);

  return {
    offercart,
    details,
    loading,
    error,
  };
};


