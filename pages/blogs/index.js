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
import { Directus } from '@directus/sdk';
import React from 'react';
import Container from '../../components/Container';
import Subscribe from '../../components/Subscribe';

export default function Index({ posts }) {
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
                The Blog Corner
                <Box>
                  by{' '}
                  <Box display="inline" backgroundColor="#0af5f4">
                    Romitfbs
                  </Box>
                </Box>
              </Heading>
              <Text color="gray.700" mb={4} fontSize="lg">
                I write about Business, Marketing and Finance.
                <br /> I also love writing about Fitness and Lifestyle. <br />{' '}
                Follow me on this epic journey.
              </Text>
              <Button
                as="a"
                href="/"
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
            {posts
              .slice(0)
              .reverse()
              .map((post) => (
                <section key={post.id}>
                  <Heading
                    letterSpacing="tight"
                    mt={2}
                    as="h2"
                    size="lg"
                    fontWeight="bold"
                  >
                    <Link href={`blogs/${post.id}`}>{post.title}</Link>
                  </Heading>
                  <Text key={`${post.id}`} color="gray.700" mt={4}>
                    {post.preview_content} &nbsp;
                    <Text color="gray.400">{post.published_on}</Text>
                  </Text>
                  <AspectRatioBox mt={8} w="100%" ratio={16 / 9}>
                    <Link href={`/blogs/${post.id}`}>
                      <Box
                        as="img"
                        _hover={{ cursor: 'pointer' }}
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_ASSETS_FOLDER}/${post.image}/${process.env.NEXT_PUBLIC_IMAGE_SETTINGS}`}
                      />
                    </Link>
                  </AspectRatioBox>
                  <Divider borderColor="gray.200" my={16} w="100%" />
                </section>
              ))}

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

export async function getServerSideProps() {
  const directus = new Directus(process.env.NEXT_PUBLIC_API_URL);
  const posts = await directus.items('posts').readMany();

  return {
    props: {
      posts: posts.data
    }
  };
}
