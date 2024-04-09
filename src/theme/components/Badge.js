import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizes = {
  md: defineStyle({
    fontSize: 'md',
    borderRadius: '3px',
    lineHeight: '1.45',
  }),
};

const variants = {
  brand: defineStyle({
    color: '#fff',
    fontFamily: 'Inter, sans- serif',
    fontStyle: 'normal',
    fontWeight: 'extrabold',
    bgGradient: 'linear(to-r, #e44848, #ffc531)',
  }),
};

export const Badge = defineStyleConfig({
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'brand',
  },
});
