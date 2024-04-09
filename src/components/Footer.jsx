import { Stack, Center, Link, Badge } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Stack as="footer" pos="sticky" bottom="0">
      <Center alignItems="baseline" gap={3} py={3}>
        <Link
          href="https://github.com/YVolkov404?tab=stars"
          size="md"
          variant="portfolio"
          isExternal
        >
          fantom_ass
        </Link>
        <Badge>2024</Badge>
      </Center>
    </Stack>
  );
};
