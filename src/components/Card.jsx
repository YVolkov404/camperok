import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
  VStack,
  Text,
  Heading,
  IconButton,
} from '@chakra-ui/react';

import { Icon } from '@iconify/react';
import {
  adults,
  tv,
  beds,
  shower,
  kitchen,
  automatic,
  petrol,
  ac,
  route,
  freezer,
} from './Icons';

// import { filteredOffers } from 'hooks/FilterHook';
// import { useSelector } from 'react-redux';

import { useData } from '../redux/selectors';

const data = [
  { id: 1, text: 'adults', icon: adults },
  { id: 2, text: 'Automatic', icon: automatic },
  { id: 3, text: 'Petrol', icon: petrol },
  { id: 4, text: 'Kitchen', icon: kitchen },
  { id: 5, text: 'beds', icon: beds },
  { id: 6, text: 'AC', icon: ac },
  { id: 7, text: 'Shower/WS', icon: shower },
  { id: 8, text: 'TV', icon: tv },
  { id: 9, text: 'Route', icon: route },
  { id: 10, text: 'Freezer', icon: freezer },
];

export const CardStack = () => {
  const { offercart } = useData();

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
          adults,
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
                          <IconButton
                            icon={
                              <Icon
                                icon="mdi:heart-outline"
                                fontSize={24}
                                color="#101828"
                              />
                            }
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
                    <VStack spacing={6}>
                      <Text variant="selected">{description}</Text>
                      <Flex gap={2} wrap="wrap">
                        {data.map(({ id, text, icon }) => (
                          <Tag key={id} variant="subtle" rounded="full">
                            <TagLeftIcon boxSize={5} as={icon} />
                            <TagLabel>
                              {console.log(Object.hasOwn(offercart, adults)) ===
                              text
                                ? adults + text
                                : text}
                            </TagLabel>
                          </Tag>
                        ))}
                      </Flex>
                    </VStack>
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
