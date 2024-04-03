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

const solid = defineStyle({
  w: '173px',
  h: '56px',
  mt: '32px',

  bg: '#e44848',
  borderRadius: '200px',
  borderColor: 'transparent',

  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 'medium',
  letterSpacing: '-0.08px',

  _hover: {
    bg: '#d84343',
  },
});

const variants = {
  unstyled,
  outline,
  solid,
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
