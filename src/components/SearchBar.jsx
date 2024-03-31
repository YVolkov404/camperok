import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { getFilter } from '../redux/filter';
import { useData } from '../redux/selectors';

export const SearchBar = () => {
  const { filter } = useData;
  const dispatch = useDispatch();
  const handleChange = e => dispatch(getFilter(e.target.value));

  return (
    <FormControl as="form">
      <FormLabel>Location</FormLabel>
      <InputGroup>
        <InputLeftElement h="100%" pointerEvents="none">
          <Icon icon="ph:map-pin" height={20} color="rgba(16, 24, 40, 0.6)" />
        </InputLeftElement>
        <Input
          name="location"
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
