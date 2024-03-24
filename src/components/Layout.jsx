import { Container, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container as="section" centerContent>
      <Suspense fallback={<Spinner variant="bold" size="xl" color="" />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
