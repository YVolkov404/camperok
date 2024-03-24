import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@chakra-ui/react';
import { useOfferCart } from 'redux/selectors';

export const BasicCard = () => {
  const { gallery } = useOfferCart;

  return (
    <Card>
      <Image objectFit="cover" src={gallery} />
      <CardHeader></CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
