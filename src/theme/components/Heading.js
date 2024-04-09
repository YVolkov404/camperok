import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  fontFamily: 'Inter, sans-serif',
  fontWeight: 'semibold',
  noOfLines: '1',
});

const sizes = {
  xl: defineStyle({
    fontSize: 'xl',
    lineHeight: '1.2',
  }),
  '2xl': defineStyle({
    fontSize: '2xl',
    lineHeight: '1.25',
  }),
  '5xl': defineStyle({
    fontSize: '5xl',
    lineHeight: '1.25',
  }),
};

const variants = {
  selected: defineStyle({
    color: '#475467',
    fontFamily: 'Tourney, sans-serif',
    fontVariantCaps: 'all-petite-caps',
    fontOpticalSizing: 'auto',
    fontWeight: 'thin',
    fontStyle: 'normal',
  }),
};

export const Heading = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: '2xl',
  },
});
