import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: '1.5',
  color: '#101828',
});

const sizes = {
  md: defineStyle({
    fontSize: 'md',
    lineHeight: '1.5',
  }),
  lg: defineStyle({
    fontSize: '2xl',
    fontWeight: 'semibold',
    lineHeight: '1.25',
  }),
};

const variants = {
  selected: defineStyle({
    color: '#475467',
    noOfLines: '1',
  }),
};

export const Text = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
  },
});
