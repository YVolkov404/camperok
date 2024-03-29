import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  fontFamily: 'Inter, sans-serif',
  fontWeight: 'semibold',
});

const sizes = {
  lg: defineStyle({
    fontSize: '2xl',
    lineHeight: '1.25',
  }),
};

export const Heading = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'lg',
  },
});
