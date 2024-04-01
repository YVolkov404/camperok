import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const unstyled = defineStyle({
  display: 'inline',
  m: '0',
  p: '0',

  bg: 'none',

  color: 'inherit',
  lineHeight: 'normal',

  _active: {
    color: '#e44848',
  },
});

const outline = defineStyle({
  m: '0',

  borderColor: 'rgba(71, 84, 103, 0.2)',
  borderRadius: '200px',

  color: '#101828',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 'medium',
  letterSpacing: '-0.08px',

  _hover: {
    bg: 'none',
    borderColor: '#e44848',
  },
});

const variants = {
  unstyled,
  outline,
};

const sizes = {
  xs: defineStyle({
    h: '6',
    minW: '6',
  }),
  xl: defineStyle({
    h: '14',
    px: '8',
  }),
};

export const Button = defineStyleConfig({
  variants,
  sizes,
});
