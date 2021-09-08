import {
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

const VideoCard = ({ image, title, length, href, children, ...rest }) => (
  <Link
    href={href}
    isExternal
    borderRadius={8}
    {...rest}
    _hover={{
      textDecoration: 'none',
      transform: 'scale(1.02)'
    }}
  >
    <Flex direction={['column', 'column', 'row']}>
      <Box
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.2)"
        borderRadius={8}
        w="250px"
        h="150px"
        mr={8}
        as="img"
        objectFit="cover"
        src={image}
      />
      <Stack>
        <Heading
          letterSpacing="tight"
          as="h3"
          size="md"
          fontWeight="medium"
          mb={0}
          mt={[4, 4, 0]}
        >
          {title}
        </Heading>
        <Text color="gray.600" mb={2} fontSize="xs">
          {length}
        </Text>
        <Text color="gray.700" mb={2} fontSize="sm" maxW="300px">
          {children}
        </Text>
      </Stack>
    </Flex>
  </Link>
);

export default function Index({ posts }) {
  console.log(posts.data);
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
                <>
                  <Text color="gray.400">Blog {post.id.toString()}</Text>
                  <Heading
                    key={post.id.toString()}
                    letterSpacing="tight"
                    mt={2}
                    as="h2"
                    size="lg"
                    fontWeight="bold"
                  >
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                  </Heading>
                  <Text key={`${post.id}`} color="gray.700" mt={4}>
                    {post.short_content} &nbsp;
                    <Text color="gray.400">
                      {post.published_on.toLocaleString()}
                    </Text>
                  </Text>
                  <Divider borderColor="gray.200" my={16} w="100%" />
                </>
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
