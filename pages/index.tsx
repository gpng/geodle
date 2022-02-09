import { Container, Heading, Link, VStack } from '@chakra-ui/react';
import Header from 'components/Geodle/Header';
import NextLink from 'next/link';
import React, { FC } from 'react';

const Index: FC = () => {
  return (
    <Container>
      <Header />
      <VStack mt={8} alignItems="flex-start">
        <Heading as="h2" size="md">
          Available Puzzles
        </Heading>
        <NextLink href="/sg-mrt-lrt" passHref>
          <Link>Singapore MRT &amp; LRT Stations</Link>
        </NextLink>
        <NextLink href="/sg-mrt" passHref>
          <Link>Singapore MRT Stations</Link>
        </NextLink>
        <NextLink href="/sg-shopping-malls" passHref>
          <Link>Singapore Shopping Malls</Link>
        </NextLink>
      </VStack>
    </Container>
  );
};

export default Index;
