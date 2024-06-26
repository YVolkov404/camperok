import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOffersResponse } from 'services/api';
//------------------------------
import { Button, Stack, Text, VStack } from '@chakra-ui/react';
//------------------------------
import { CardStack } from './Card';
import { SearchBar } from './SearchBar';
import { EquipFilter } from './EquipFilter';
import { TypeFilter } from './TypeFilter';
import { ModalLayout } from './Modal/ModalLayout';

export const Catalog = () => {
  const [limit, setLimit] = useState(4);
  const [location, setLocation] = useState('');
  const [form, setForm] = useState('');

  const dispatch = useDispatch();

  dispatch(getOffersResponse({ limit, location, form }));

  const paginationHandler = () => {
    setLimit(prevLimit => prevLimit + 4);
  };

  const handleChangeLocation = e => setLocation(e.target.value);

  const handleChangeForm = e => setForm(e.target.value);

  return (
    <>
      <Stack flexDir="row" spacing={16}>
        <VStack align="flex-start" spacing={8}>
          <SearchBar
            location={location}
            handleChangeLocation={handleChangeLocation}
          />
          <Stack spacing={3}>
            <Text color="#476467">Filters</Text>
            <Stack spacing={8}>
              <EquipFilter />
              <TypeFilter form={form} handleChangeForm={handleChangeForm} />
            </Stack>
          </Stack>
          <Button type="submit" variant="solid">
            Search
          </Button>
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
