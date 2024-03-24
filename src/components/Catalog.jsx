import { Container } from '@chakra-ui/react';
import { ModalLayout } from './Modal/ModalLayout';
import { BasicCard } from 'theme/components/Card';

export const Catalog = () => {
  return (
    <Container>
      <BasicCard />
      <ModalLayout />
    </Container>
  );
};
