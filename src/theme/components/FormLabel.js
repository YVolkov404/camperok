import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  mx: '0',
  mb: '8px',

  fontFamily: 'Inter, sans-serif',
  fontWeight: 'medium',
  color: 'rgba(16, 24, 40, 0.6)',
});

export const FormLabel = defineStyleConfig({
  baseStyle,
});
