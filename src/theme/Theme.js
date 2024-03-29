// theme/index.js
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './Styles';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Button } from '@chakra-ui/react';

// Foundational style overrides
// import borders from '../theme/foundations/borders';

// Component style overrides
// import Button from '../theme/components/button';

const theme = extendTheme({
  styles,
  // borders,
  // Other foundational style overrides go here
  components: {
    Container,
    Card,
    Heading,
    Text,
    Button,
    // Other components go here
  },
});

export default theme;
