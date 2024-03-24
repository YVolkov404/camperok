import { Container } from '@chakra-ui/react';
import { ModalLayout } from '../components/Modal/ModalLayout.jsx';
import { Catalog } from '../components/Catalog.jsx';

function CatalogPage() {
  return (
    <Container>
      <Catalog />
      <ModalLayout />
    </Container>
  );
}

export default CatalogPage;
