import { extendTheme } from '@chakra-ui/react';

const styles = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      'html, body': {
        fontFamily: 'Inter, sans-serif',
        fontOpticalSizing: 'auto',
        fontSize: '16px',
        fontStyle: 'normal',
      },
      // styles for nested tags
      'div, h1, h2, p, label, link': {
        p: '0',
        m: '0',
      },
      a: {
        display: 'inline-flex',
        alignSelf: 'center',
        color: '#475467',
      },
      colors: {
        brand: {
          font1: '#101828',
          font2: '#475467',
          forms: '#f7f7f7',
          tags: '#f2f4f7',
          reactions: '#e44848',
          icons: '#ffc531',
        },
      },
    },
  },
});

export default styles;
