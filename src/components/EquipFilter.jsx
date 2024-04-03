import {
  useCheckbox,
  chakra,
  Icon,
  Text,
  VStack,
  Flex,
  useCheckboxGroup,
  Heading,
  Divider,
  Stack,
} from '@chakra-ui/react';
import { tv, route, shower, kitchen, automatic, freezer } from './Icons';

const data = [
  { id: 1, text: 'TV', icon: tv },
  { id: 2, text: 'Route', icon: route },
  { id: 3, text: 'Shower/WS', icon: shower },
  { id: 4, text: 'Kitchen', icon: kitchen },
  { id: 5, text: 'Automatic', icon: automatic },
  { id: 6, text: 'Freezer', icon: freezer },
];

export const EquipFilter = () => {
  function CustomCheckbox(props) {
    const { src, text, ...radioProps } = props;
    const { state, getInputProps, getCheckboxProps, getLabelProps, htmlProps } =
      useCheckbox(radioProps);

    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps()} hidden />
        <VStack
          {...getCheckboxProps()}
          spacing={2}
          border="1px solid"
          borderRadius={10}
          borderColor={state.isChecked ? '#e44848' : 'rgba(16, 24, 40, 0.2)'}
          py={4}
        >
          <Icon {...getLabelProps()} as={src} boxSize={8} height="100%" />
          <Text textAlign="center" lineHeight="1.25">
            {text}
          </Text>
        </VStack>
      </chakra.label>
    );
  }

  const { getCheckboxProps } = useCheckboxGroup({});

  return (
    <Stack spacing={6}>
      <Heading size="xl">Equipment type</Heading>
      <Divider color="rgba(16, 24, 40, 0.1)" />
      <Flex display="flex" flexDir="row" wrap="wrap" gap={2}>
        {data.map(({ id, text, icon }) => {
          return (
            <CustomCheckbox
              key={id}
              src={icon}
              text={text}
              {...getCheckboxProps({ value: text })}
              w={114}
              h={95}
            />
          );
        })}
      </Flex>
    </Stack>
  );
};
