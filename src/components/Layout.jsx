import { Container, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <Container centerContent>
      <Header />
      <Suspense fallback={<Spinner variant="bold" size="xl" color="" />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};
