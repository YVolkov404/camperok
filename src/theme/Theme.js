// theme/index.js
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './Styles';

// Foundational style overrides
import { Container } from './components/Container';

// Component style overrides
import { Card } from './components/Card';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { FormLabel } from './components/FormLabel';
import { Link } from './components/Link';
import { Badge } from './components/Badge';
import { Tag } from './components/Tag';

const theme = extendTheme({
  styles,
  components: {
    Container,
    Card,
    Heading,
    Text,
    Button,
    Input,
    FormLabel,
    Link,
    Badge,
    Tag,
    // Other components go here
  },
});

export default theme;
