import {
  AspectRatioBox,
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/core';
import React from 'react';
import Container from '../../components/Container';
import Subscribe from '../../components/Subscribe';

export default function Post({ post }) {
  return (
    <Box as="main">
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <Container>
          <Stack
            as="section"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m={['0 auto', null, '0 auto 4rem auto']}
            maxWidth="600px"
            p={8}
          >
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="600px"
            >
              <Heading
                letterSpacing="tight"
                mb={4}
                as="h1"
                size="2xl"
                fontWeight="bold"
              >
                {post.title}
              </Heading>
              <AspectRatioBox mt={8} w="100%" ratio={16 / 9}>
                <Link href={`/blogs/${post.id}`}>
                  <Box
                    as="img"
                    _hover={{ cursor: 'pointer' }}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ASSETS_FOLDER}/${post.image}/${process.env.NEXT_PUBLIC_IMAGE_SETTINGS}`}
                  />
                </Link>
              </AspectRatioBox>
              <Text mt={8} color="gray.400">
                {post.published_on}
              </Text>
              <Divider borderColor="gray.200" my={16} w="100%" />

              <Button
                as="a"
                href="/blogs"
                fontWeight="bold"
                h="2.5rem"
                mr={1}
                size="md"
                bg="gray.800"
                color="white"
                _hover={{ bg: 'black', cursor: 'pointer' }}
              >
                ← Go Back
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Flex>
      <Flex justifyContent="center" flexDirection="column">
        <Stack
          as="section"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="600px"
          mt={[4, 8, 16]}
          p={8}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="600px"
          >
            <section>
              <Heading
                letterSpacing="tight"
                mt={2}
                as="h2"
                size="lg"
                fontWeight="bold"
              >
                <Text>{post.title}</Text>
              </Heading>
              <Text color="gray.700" mt={4}>
                {post.content} &nbsp;
                <Text color="gray.400">{post.published_on}</Text>
              </Text>
              <Divider borderColor="gray.200" my={16} w="100%" />
            </section>

            <Subscribe />
            <Flex align="center">
              <Avatar
                size="lg"
                name="Fahad Bin Saad"
                src="https://www.instagram.com/romitfbs"
                mr={4}
              />
              <Box>
                <Text color="gray.700" mt={4} fontSize={['sm', 'lg']}>
                  <b>I'm Fahad Bin Saad</b> –– DevRel, Writer, YouTuber, and a
                  marketing nerd.
                </Text>
                <Link
                  mt={2}
                  isExternal
                  href="https://www.linkedin.com/in/romitfbs/"
                  textDecoration="none"
                  borderBottom="2px solid #0af5f4"
                  transition="all 0.1s ease-in"
                  fontStyle="italic"
                  fontSize={['sm', 'md']}
                  _hover={{
                    textDecoration: 'none',
                    borderBottom: '2px solid #09DB1F'
                  }}
                >
                  work with me &#187;
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/posts/${id}`
  );
  const post = await res.json();
  return {
    props: {
      post: post.data
    }
  };
}
