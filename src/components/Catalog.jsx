import { Stack, VStack } from '@chakra-ui/react';
import { ModalLayout } from './Modal/ModalLayout';
import { CardStack } from './Card';
import { SearchBar } from './SearchBar';

export const Catalog = () => {
  return (
    <>
      <Stack flexDir="row" spacing={16}>
        <VStack>
          <SearchBar />
        </VStack>

        <CardStack />
      </Stack>
      <ModalLayout />
    </>
  );
};
