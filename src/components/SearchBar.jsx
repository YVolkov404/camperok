import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export const SearchBar = ({ filter, handleChange }) => {
  return (
    <FormControl as="form">
      <FormLabel>Location</FormLabel>
      <InputGroup>
        <InputLeftElement h="100%" pointerEvents="none">
          <Icon icon="ph:map-pin" height={20} color="rgba(16, 24, 40, 0.6)" />
        </InputLeftElement>
        <Input
          name="filter"
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="City"
          variant="custom"
        />
      </InputGroup>
    </FormControl>
  );
};
