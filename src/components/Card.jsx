import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  // Tag,
  // TagLabel,
  // TagLeftIcon,
  HStack,
  VStack,
  Text,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useData } from '../redux/selectors';
import { Icon } from '@iconify/react';

export const BasicCard = () => {
  const { offercart } = useData();

  console.log(offercart);

  return (
    <VStack spacing={8}>
      {offercart.map(
        ({
          _id,
          gallery,
          name,
          price,
          rating,
          location,
          description,
          reviews,
        }) => {
          return (
            <Card key={_id}>
              <HStack spacing={6}>
                <Image
                  w={290}
                  h={310}
                  objectFit="cover"
                  srcSet={gallery[0]}
                  rounded={10}
                />
                <VStack w="full" spacing={6}>
                  <CardHeader>
                    <VStack spacing={2}>
                      <HStack w="100%" justify="space-between">
                        <Heading>{name}</Heading>
                        <HStack spacing={3}>
                          <Text size="lg">
                            {new Intl.NumberFormat('en-GB', {
                              style: 'currency',
                              currency: 'EUR',
                              maximumFractionDigits: '2',
                            }).format(price)}
                          </Text>
                          <Button
                            leftIcon={
                              <Icon icon="mdi:heart-outline" fontSize={24} />
                            }
                            iconSpacing="0"
                            size="xs"
                            variant="unstyled"
                          />
                        </HStack>
                      </HStack>
                      <HStack w="100%" align="left" spacing={4}>
                        <HStack spacing={1}>
                          <Icon
                            icon="basil:star-solid"
                            height={16}
                            color="#ffc531"
                          />
                          <Text textDecor="underline">
                            {rating}({reviews.length}&nbsp;Reviews)
                          </Text>
                        </HStack>
                        <HStack spacing={1}>
                          <Icon icon="ph:map-pin" height={16} color="#101828" />
                          <Text>{location}</Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </CardHeader>
                  <CardBody>
                    <Text variant="selected">{description}</Text>
                  </CardBody>
                  <CardFooter></CardFooter>
                </VStack>
              </HStack>
            </Card>
          );
        }
      )}
    </VStack>
  );
};

// {
//   data.map(({ id, details }) => {
//     return (
//       <Tag key={id} size="md" variant="subtle">
//         <TagLeftIcon boxSize="12px" set=<Icon scr="" /> />
//         <TagLabel>{details}</TagLabel>
//       </Tag>
//     );
//   });
// }
