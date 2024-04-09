import React from 'react';
import Slider from 'react-slick';
import { Center, Heading, Stack, Image, Box, Text } from '@chakra-ui/react';

//------------------------------------------
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import { useData } from '../redux/selectors';

export const SlickSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '300px',
    variableWidth: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    adaptiveHeight: true,
  };

  const { offercart } = useData();

  return (
    <Stack w="1440px">
      <Center flexDir="column">
        <Heading as="h1" size="5xl" variant="selected">
          Hit the road by rent campervan
        </Heading>
        <Text size="lg" variant="main" mt={3}>
          Makes your life an ongoing adventure
        </Text>
      </Center>
      <Box py={10}>
        <Slider as={Box} {...settings}>
          {offercart.map(({ _id, gallery }) => {
            return (
              <Box key={_id}>
                <Image
                  w="1060px"
                  px={5}
                  objectFit="cover"
                  srcSet={gallery[0]}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Stack>
  );
};
