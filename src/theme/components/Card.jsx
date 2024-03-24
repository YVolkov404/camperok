import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { id, offercart, details, gallery } from '../../redux/selectors';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const BasicCard = ({ id }) => {
  const [{ hasId, sameProps }, setProps] = useState();

  return (
    <Card>
      <Image objectFit="cover" UseImageProps={gallery} />
      <HStack>
        <CardHeader>
          <VStack>
            <Text as="h2"></Text>
            <link></link>
            <Textarea></Textarea>
          </VStack>
          <HStack>
            <Text as="p"></Text>
            <Icon></Icon>
          </HStack>
        </CardHeader>
        <CardBody>
          {offercart.map(
            ({
              id,
              adults,
              transmission,
              engine,
              details: { kitchen, beds, AC },
            }) => {
              return (
                <Tag key={id} size="md" variant="subtle">
                  <TagLeftIcon boxSize="12px" set=<IconiFy scr="" /> />
                  <TagLabel>
                    {!id
                      ? adults || transmission || engine
                      : kitchen || beds || AC}
                  </TagLabel>
                </Tag>
              );
            }
          )}
        </CardBody>
        <CardFooter>
          <Button />
        </CardFooter>
      </HStack>
    </Card>
  );
};
