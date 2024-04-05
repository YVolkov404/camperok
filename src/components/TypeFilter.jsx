import {
  Divider,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  chakra,
  useRadio,
  useRadioGroup,
  // useToast,
} from '@chakra-ui/react';
import { radioBtn1, radioBtn2, radioBtn3 } from './Icons';

const data = [
  { id: 1, text: 'Van', value: 'van', icon: radioBtn1 },
  {
    id: 2,
    text: 'Fully integrated',
    value: 'fullyIntegrated',
    icon: radioBtn2,
  },
  { id: 3, text: 'Alcove', value: 'alcove', icon: radioBtn3 },
];

export const TypeFilter = ({ form, handleChangeForm }) => {
  function CustomRadio(props) {
    const { src, text, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, getLabelProps, htmlProps } =
      useRadio(radioProps);

    return (
      <chakra.label
        {...htmlProps}
        value={form}
        onChange={handleChangeForm}
        cursor="pointer"
      >
        <input {...getInputProps({})} hidden />
        <VStack
          {...getRadioProps()}
          spacing={2}
          border="1px solid"
          borderRadius={10}
          borderColor={state.isChecked ? '#e44848' : 'rgba(16, 24, 40, 0.2)'}
          px={6}
          py={4}
        >
          <Icon {...getLabelProps()} as={src} boxSize={12} height="100%" />
          <Text textAlign="center" lineHeight="1.25" textTransform="capitalize">
            {text}
          </Text>
        </VStack>
      </chakra.label>
    );
  }

  // const toast = useToast();

  // const handleChange = value => {
  //   toast({
  //     position: 'top-left',
  //     title: `The vehicle type got changed to ${value}`,
  //     status: 'info',
  //     duration: 1500,
  //   });
  // };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    name: 'form',
    type: 'radio',
    // onChange: handleChange,
  });

  console.log(value);

  return (
    <Stack {...getRootProps()} spacing={6}>
      <Heading size="xl">Vehicle type</Heading>
      <Divider color="rgba(16, 24, 40, 0.1)" />
      <HStack spacing={2}>
        {data.map(({ id, text, value, icon }) => {
          return (
            <CustomRadio
              key={id}
              src={icon}
              text={text}
              {...getRadioProps({ value: value })}
            />
          );
        })}
      </HStack>
    </Stack>
  );
};
