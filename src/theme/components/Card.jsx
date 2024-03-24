import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@chakra-ui/react';
import { useOfferData } from 'redux/selectors';

export const BasicCard = () => {
  const { offer } = useOfferData;

  return (
    <Card>
      <Image objectFit="cover" src={`${offer.gallery}`} />
      <CardHeader></CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
