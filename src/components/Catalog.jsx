import { HStack, VStack } from '@chakra-ui/react';
import { ModalLayout } from './Modal/ModalLayout';
import { BasicCard } from './Card';

export const Catalog = () => {
  return (
    <>
      <HStack spacing={16} justify="space-between">
        <VStack w={360}></VStack>
        <VStack>
          <BasicCard />
        </VStack>
      </HStack>
      <ModalLayout />
    </>
  );
};
