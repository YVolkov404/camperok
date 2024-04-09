import { Divider, Link, Stack, Wrap, WrapItem } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Stack as="header" w="100%" mb={8}>
      <Wrap as="nav" justify="center" align="center" spacing={8}>
        <WrapItem>
          <Link as={NavLink} to="/favorites">
            Favorites
          </Link>
        </WrapItem>
        <WrapItem>
          <Link as={NavLink} to="/" variant="logo">
            Camperok
          </Link>
        </WrapItem>
        <WrapItem>
          <Link as={NavLink} to="/catalog">
            Catalog
          </Link>
        </WrapItem>
      </Wrap>
      <Divider />
    </Stack>
  );
};
