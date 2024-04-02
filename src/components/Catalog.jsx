import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOffersResponse } from 'services/api';
//------------------------------
import { Button, Stack, VStack } from '@chakra-ui/react';
//------------------------------
import { CardStack } from './Card';
import { SearchBar } from './SearchBar';
import { TypeFilter } from './TypeFilter';
import { ModalLayout } from './Modal/ModalLayout';

export const Catalog = () => {
  const [limit, setLimit] = useState(4);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  dispatch(getOffersResponse({ limit, filter }));

  const paginationHandler = () => {
    setLimit(prevLimit => prevLimit + 4);
  };

  const handleChange = e => setFilter(e.target.value);

  return (
    <>
      <Stack flexDir="row" spacing={16}>
        <VStack spacing={8}>
          <SearchBar filter={filter} handleChange={handleChange} />
          <TypeFilter />
        </VStack>
        <VStack spacing={50}>
          <CardStack />
          <Button onClick={paginationHandler} variant="outline" size="xl">
            Load more
          </Button>
        </VStack>
      </Stack>
      <ModalLayout />
    </>
  );
};
