import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const custom = definePartsStyle({
  field: {
    w: '360px',
    h: 'auto',
    p: '18px 18px 18px 34px',

    fontFamily: 'Inter, sans-serif',
    lineHeight: '1.25',
    border: 'none',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',

    _placeholder: {
      color: 'rgba(16, 24, 40, 0.6)',
    },
  },
});

export const Input = defineMultiStyleConfig({
  variants: { custom },
});
