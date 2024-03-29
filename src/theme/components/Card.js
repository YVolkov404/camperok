import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    fontFamily: 'Inter, sans-serif',
    color: '#101828',
    p: '24px',
  },
  header: {
    w: '100%',
    p: '0',
  },
  body: {
    p: '0',
  },
  footer: {
    p: '0',
  },
});

const sizes = {
  lg: definePartsStyle({
    container: {
      w: '888px',
      h: '358px',
      borderRadius: '20px',
    },
  }),
};

const variants = {
  outline: definePartsStyle({
    container: {
      borderColor: 'rgba(16,24,40,0.20)',
    },
  }),
};

export const Card = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'lg',
    variant: 'outline',
  },
});
