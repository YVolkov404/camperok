import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  position: 'relative',
  w: '1440px',
  h: '100%',
  maxW: '1440px',
  px: '64px',
  py: '20px',
});

export const Container = defineStyleConfig({ baseStyle });
