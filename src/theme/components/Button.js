import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const unstyled = defineStyle({
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'normal',
  m: '0',
  p: '0',

  _active: {
    color: '#e44848',
  },
});

const variants = {
  unstyled,
};

const sizes = {
  xs: defineStyle({
    h: '6',
    minW: '6',
  }),
};

export const Button = defineStyleConfig({
  variants,
  sizes,
});
