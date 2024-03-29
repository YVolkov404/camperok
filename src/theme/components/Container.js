import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  w: '1440px',
  maxW: '1440px',
  px: '64px',
  py: '100px',
});

export const Container = defineStyleConfig({ baseStyle });
