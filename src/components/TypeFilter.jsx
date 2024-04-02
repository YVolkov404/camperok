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
  useToast,
} from '@chakra-ui/react';
import { radioBtn1, radioBtn2, radioBtn3 } from './Icon';

const data = [
  { id: 1, text: 'Van', icon: radioBtn1 },
  { id: 2, text: 'Fully Integrated', icon: radioBtn2 },
  { id: 3, text: 'Alcove', icon: radioBtn3 },
];

export const TypeFilter = () => {
  function CustomRadio(props) {
    const { src, text, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, getLabelProps, htmlProps } =
      useRadio(radioProps);

    return (
      <chakra.label {...htmlProps} cursor="pointer">
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
          <Text textAlign="center" lineHeight="1.25">
            {props.value}
          </Text>
        </VStack>
      </chakra.label>
    );
  }

  const toast = useToast();

  const handleChange = value => {
    toast({
      position: 'top-left',
      title: `The vehicle type got changed to ${value}`,
      status: 'info',
      duration: 1500,
    });
  };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'Fully Integrated',
    onChange: handleChange,
  });

  return (
    <Stack {...getRootProps()} spacing={6}>
      <Heading size="xl">Vehicle type: {value}</Heading>
      <Divider color="rgba(16, 24, 40, 0.1)" />
      <HStack spacing={2}>
        {data.map(({ id, text, icon }) => {
          return (
            <CustomRadio
              key={id}
              src={icon}
              text={text}
              {...getRadioProps({ value: text })}
            />
          );
        })}
      </HStack>
    </Stack>
  );
};
