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

import data from '../assets/checkboxes-set/checkboxes-set.json';

export const TypeFilter = () => {
  function CustomCheckbox(props) {
    const { src, text, ...radioProps } = props;
    const { state, getInputProps, getCheckboxProps, getLabelProps, htmlProps } =
      useCheckbox(radioProps);

    return (
      <chakra.label {...htmlProps}>
        <input {...getInputProps()} hidden />
        <VStack
          {...getCheckboxProps()}
          spacing={2}
          border="1px solid"
          borderRadius={10}
          borderColor={state.isChecked ? '#e44848' : 'rgba(16, 24, 40, 0.2)'}
          px={6}
          py={4}
        >
          <Icon {...getLabelProps()} as={src} boxSize={8} height="100%" />
          <Text textAlign="center" lineHeight="1.25">
            {props.value}
          </Text>
        </VStack>
      </chakra.label>
    );
  }

  const { getCheckboxProps, getRootProps } = useCheckboxGroup({});

  return (
    <Stack {...getRootProps()} spacing={6}>
      <Heading size="xl">Equipment type</Heading>
      <Divider color="rgba(16, 24, 40, 0.1)" />
      <Flex display="flex" flexDir="row" wrap="wrap" spacing={2}>
        {data.map(({ id, name, paths }) => {
          return (
            <CustomCheckbox
              key={id}
              src={paths}
              text={name}
              {...getCheckboxProps({ value: id })}
            />
          );
        })}
      </Flex>
    </Stack>
  );
};
