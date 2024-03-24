// theme/index.js
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import theme from '../theme/styles';
import { BasicCard } from './components/Card';

// Foundational style overrides
// import borders from '../theme/foundations/borders';

// Component style overrides
// import Button from '../theme/components/button';

const overrides = {
  theme,
  // borders,
  // Other foundational style overrides go here
  components: {
    Card: BasicCard,
    // Button,
    // Other components go here
  },
};

export default extendTheme(overrides);
