import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    p: '12px 18px',
    bg: '#f2f4f7',

    color: '#10828',
    fontSize: '16px',
    fontWeight: 'medium',
    lineHeight: '1.25',
  },
});

export const Tag = defineMultiStyleConfig({ baseStyle });
