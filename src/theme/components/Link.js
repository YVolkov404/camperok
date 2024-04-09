import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: '#101828',
  fontFamily: 'inherit',
  fontOpticalSizing: 'auto',
  fontWeight: 'black',
  fontStyle: 'normal',
  fontSize: '22px',
  textTransform: 'uppercase',

  _hover: {
    textDecorationColor: '#ffc531',
    textDecorationThickness: '3px',
    textUnderlineOffset: '5px',
  },

  _activeLink: {
    textDecor: 'underline',
    textDecorationColor: '#ffc531',
    textDecorationThickness: '3px',
    textUnderlineOffset: '5px',
  },
});

const logo = defineStyle({
  color: '#475467',
  fontFamily: 'Tourney, sans-serif',
  fontWeight: 'thin',
  fontSize: '32px',
  letterSpacing: '0.1em',
  transition: '0.275s ease-in-out;',
  textDecor: 'none',

  _hover: {
    bgGradient: 'linear(to-r, #e44848, #ffc531)',
    bgClip: 'text',

    fontWeight: 'black',
    textDecor: 'none',
  },

  _activeLink: {
    bgGradient: 'linear(to-r, #e44848, #ffc531)',
    bgClip: 'text',

    fontWeight: 'black',
    textDecor: 'none',
  },
});

const portfolio = defineStyle({
  color: 'rgba(71,84,103, 35%)',
  fontSize: '22px',
  fontVariantCaps: 'all-small-caps',
  _hover: {
    textDecor: 'none',
    color: '#475467',
  },
});

export const Link = defineStyleConfig({
  baseStyle,
  variants: { logo, portfolio },
});
