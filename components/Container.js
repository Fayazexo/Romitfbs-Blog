import { Box, Flex } from '@chakra-ui/core';
import React from 'react';

const Container = ({ children }) => (
  <>
    <Box bg="#FBFBFB">
      <Box
        background="linear-gradient(270deg, #0AF5F4 25.28%, #09DB1F 59.7%, #F7F322 97.75%)"
        w="full"
        h="15px"
      />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 0, 8]}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box
          as="p"
          fontWeight="medium"
          color="gray.700"
        >
         Powered by Nodecandy
        </Box>
        <Box
          as="a"
          href="https://nodecandy.com"
          fontWeight="medium"
          color="gray.700"
          textDecoration="underline"
        >
          @NodecandyHQ
        </Box>
      </Flex>
    </Box>
    {children}
  </>
);

export default Container;
