import {
  AspectRatioBox,
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/core';
import React from 'react';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

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

const Index = () => {
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
                Fahad Bin Saad
                <Box>
                  DevRel @{' '}
                  <Box display="inline" backgroundColor="#0af5f4">
                    Nodecandy
                  </Box>
                </Box>
              </Heading>
              <Text color="gray.700" mb={4} fontSize="lg">
                Born with ambition, Living with dedication <br />
                Grew up with the 90's
              </Text>
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                maxWidth="600px"
              >
                <Button
                  as="a"
                  href="https://www.instagram.com/romitfbs"
                  fontWeight="bold"
                  h="2.5rem"
                  mr={1}
                  size="md"
                  bg="pink.400"
                  color="white"
                  _hover={{ bg: 'pink.600', cursor: 'pointer' }}
                >
                  Instagram →
                </Button>
                <Button
                  as="a"
                  href="/blogs"
                  fontWeight="bold"
                  h="2.5rem"
                  mr={1}
                  size="md"
                  bg="gray.600"
                  color="white"
                  _hover={{ bg: 'gray.800', cursor: 'pointer' }}
                >
                  Blogs →
                </Button>
              </Flex>
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
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h2"
              size="lg"
              fontWeight="bold"
            >
              “I am Fahad Bin Saad, a web marketing + branding specialist”
            </Heading>
            <Text color="gray.700" mb={4}>
              With 5 years of experience in creating and managing online
              marketing strategy for brands big and small. I’m a specialist in
              brand development, website design, online community management,
              education, and ongoing web marketing strategy and project
              management.
            </Text>
            <Text color="gray.700" mb={4}>
              My philosophy is to use creativity to solve problems; to find new
              ways to make things happen. To me this means approaching every
              challenge as an opportunity for innovation – not just doing what
              works but always looking for better solutions that work better.
              And it means focusing on excellence in everything we do: our
              products are designed with care from conception through
              implementation; our service is delivered by people who take pride
              in their work.
            </Text>
            <Text color="gray.700" mb={4}>
              <b>School</b> taught me relationships mean more than degrees and
              titles
            </Text>
            <Text color="gray.700" mb={4}>
              <b>College</b> taught me self motivation, teamwork, resolving
              conflicts
            </Text>
            <Text color="gray.700" mb={4}>
              <b>University</b> taught me critical thinking, independence, and
              communication skill
            </Text>
            <Heading
              letterSpacing="tight"
              mb={4}
              mt={20}
              as="h2"
              size="lg"
              fontWeight="bold"
            >
              Why should you ̶h̶i̶r̶e̶ <br />
              work with me?
            </Heading>
            <Text color="gray.700" mb={4}>
              I have an innovative spirit that meshes well with the
              ever-changing world of technology; this is reflected in my work as
              well as in the business strategies that I develop for businesses
              looking to expand their reach through digital marketing.
            </Text>
            <Text color="gray.700" mb={4}>
              Over the years, I’ve helped a wide variety of clients with their
              online presence – from artists to small businesses to nonprofits.
              Whether you need a few hours of consultation or ongoing help with
              your website, my service options are flexible enough for any
              budget or schedule! Plus, I take pride in my work and enjoy
              watching my clients get excited about marketing because it’s so
              rewarding to see them grow.
            </Text>
            <Text color="gray.700" mb={4} mt={8}>
              Places I'm currently working <b>at</b>
            </Text>
            <List spacing={2} mt={4}>
              <ListItem
                fontWeight="medium"
                fontSize="lg"
                alignItems="center"
                display="flex"
              >
                <ListIcon icon="check" color="green.400" />
                2021 - Present - <b>DevRel @NodecandyHQ</b>
              </ListItem>
              <ListItem
                fontWeight="medium"
                fontSize="lg"
                alignItems="center"
                display="flex"
              >
                <ListIcon icon="check" color="green.400" />
                2017 - Present - <b>Business Analyst @GearsBD</b>
              </ListItem>
              <Text color="gray.700" mb={4} mt={8}>
                and places that I spent really good times <b>at</b>
              </Text>
              <ListItem
                fontWeight="medium"
                fontSize="lg"
                alignItems="center"
                display="flex"
              >
                <ListIcon icon="x" color="red.500" />
                2019 - 2020 - <b>Former Co-Founder @Capawcino Cat Cafe</b>
              </ListItem>
              <ListItem
                fontWeight="medium"
                fontSize="lg"
                alignItems="center"
                display="flex"
              >
                <ListIcon icon="x" color="red.500" />
                2013 - 2016 - <b>Project Manager @Icebreakers Studio</b>
              </ListItem>
            </List>
            <Divider borderColor="gray.200" my={16} w="100%" />
            <Heading
              letterSpacing="tight"
              mt={4}
              as="h2"
              size="lg"
              fontWeight="bold"
            >
              একটি ভ্রমন গল্প | Gazipur Basecamp
            </Heading>
            <Text color="gray.700" mt={4}>
              ভ্রমনের সময় দুঃখ কষ্ট রাগ ইগো ঘরে রেখে ঘুরতে যাওয়া উচিত , আপনার
              অনুভুতি অন্যের উপর প্রভাব ফেলে । &nbsp;
              <Link
                isExternal
                fontWeight="bold"
                href="https://youtu.be/uiQSDwbskBo"
                textDecoration="none"
                borderBottom="2px solid #0af5f4"
                transition="all 0.1s ease-in"
                _hover={{
                  textDecoration: 'none',
                  borderBottom: '2px solid #09DB1F'
                }}
              >
                view full resolution
              </Link>
            </Text>
            <AspectRatioBox mt={8} w="100%" ratio={16 / 9}>
              <Box
                as="iframe"
                title="একটি ভ্রমন গল্প | Gazipur Basecamp"
                src="https://www.youtube.com/embed/uiQSDwbskBo"
                allowFullScreen
                h="300px"
                w="100%"
              />
            </AspectRatioBox>
            <Divider borderColor="gray.200" my={16} w="100%" />
            {/* <Heading
            letterSpacing="tight"
            mt={4}
            as="h2"
            size="lg"
            fontWeight="bold"
          >
            What people are saying.
          </Heading>
          <Box
            borderRadius={8}
            border="1px solid"
            borderColor="gray.200"
            p={6}
            mt={8}
            mb={4}
          >
            <Text color="gray.800" fontStyle="italic" fontSize="lg">
              "<b>Seriously incredible work.</b> Your live streams have really
              helped my impostor syndrome. Watching you work is both educational
              and gratifying. Keep it up!"
            </Text>
            <Flex
              color="gray.900"
              mt={2}
              fontWeight="medium"
              pr={8}
              align="center"
              w="full"
            >
              <Link isExternal href="https://twitter.com/michaelschultz">
                <Avatar
                  w="24px"
                  h="24px"
                  name="Michael Schultz"
                  src="https://pbs.twimg.com/profile_images/1161783519099535360/nn7vzYFP_400x400.jpg"
                  mr={2}
                />
              </Link>
              Michael Schultz
            </Flex>
          </Box>
          <Box
            borderRadius={8}
            border="1px solid"
            borderColor="gray.200"
            p={6}
            my={4}
          >
            <Text color="gray.800" fontStyle="italic" fontSize="lg">
              "<b>His teaching style helped me level up</b> and gave me a new
              skill to flex."
            </Text>
            <Flex
              color="gray.900"
              mt={2}
              fontWeight="medium"
              pr={8}
              align="center"
              w="full"
            >
              <Link isExternal href="https://twitter.com/Codebrother1">
                <Avatar
                  w="24px"
                  h="24px"
                  name="TC"
                  src="https://pbs.twimg.com/profile_images/1333576118658469889/Aw2suLWx_400x400.png"
                  mr={2}
                />
              </Link>
              TC
            </Flex>
          </Box>
          <Box
            borderRadius={8}
            border="1px solid"
            borderColor="gray.200"
            p={6}
            mt={4}
          >
            <Text color="gray.800" fontStyle="italic" fontSize="lg">
              "Exceptional teaching material and a very qualified teacher.{' '}
              <b>I never expected so much quality.</b> Lee is a clear and
              precise instructor; his general overview combined with practical
              examples is amazing."
            </Text>
            <Flex
              color="gray.900"
              mt={2}
              fontWeight="medium"
              pr={8}
              align="center"
              w="full"
            >
              <Link isExternal href="https://twitter.com/aboutraffaele">
                <Avatar
                  w="24px"
                  h="24px"
                  name="Raffaele Vitale"
                  src="https://cdn-images-1.medium.com/fit/c/200/200/2*Hr-D00TXI75fkkc3FP8dug.jpeg"
                  mr={2}
                />
              </Link>
              Raffaele Vitale
            </Flex>
          </Box> */}
            {/* <Divider borderColor="gray.200" my={16} w="100%" /> */}
            <Heading
              letterSpacing="tight"
              as="h2"
              size="lg"
              fontWeight="bold"
              id="course-overview"
            >
              Find me on YouTube
            </Heading>
            <Text color="gray.700" mt={4} mb={4}>
              I have been following CaseyNeistat, Logan Paul, Irfan junejo, and
              Hamza Ibrahim for a long time. I always wished to document my life
              through vlogs/videos. But before the camera is not comfortable for
              me too much because it makes me feel uneasy in front of everyone
              watching videos on YouTube but now trying to face my fear by
              posting more often than anything else
            </Text>
            <Text color="gray.700" mt={4} mb={8}>
              I’m going to get over that fear right quick with your help! So if
              you wanna see me fail miserably or be successful on video just hit
              subscribe&nbsp;
              <Link
                isExternal
                fontWeight="bold"
                href="https://www.youtube.com/channel/UCTtDQlNcHr50WYNsCUEY7hw"
                textDecoration="none"
                borderBottom="2px solid #0af5f4"
                transition="all 0.1s ease-in"
                _hover={{
                  textDecoration: 'none',
                  borderBottom: '2px solid #09DB1F'
                }}
              >
                @YouTube
              </Link>
            </Text>
            <Stack mt={8} spacing={8}>
              <VideoCard
                title="Five BEST Long Term Investment things | Future investment"
                length="6:24"
                href="https://www.youtube.com/watch?v=ko_qrEzK-QQ&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/ko_qrEzK-QQ/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="Top 5 Millionaire Habits | ধনী হবার ৫ টি অভ্যাস"
                length="7:51"
                href="https://www.youtube.com/watch?v=QwcqBCinSzU&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/QwcqBCinSzU/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="HOW TO DO MORE WORK IN LESS TIME | PARKINSON'S LAW"
                length="5:55"
                href="https://www.youtube.com/watch?v=_Mw9bluYBi4&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/_Mw9bluYBi4/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="Brahmanbaria Vlog | Ep #06 | ব্রাহ্মানবাড়িয়া"
                length="5:47"
                href="https://www.youtube.com/watch?v=LXBIO88rgX4&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/LXBIO88rgX4/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="24 hours in CHITTAGONG -2021 | CINEMATIC Travel Vlog #05"
                length="4:16"
                href="https://www.youtube.com/watch?v=IrqrsfL6Y2s&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/IrqrsfL6Y2s/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="Trailer | Chattogram Vlog | Episode 05"
                length="0:22"
                href="https://www.youtube.com/watch?v=YwU80F06mQ4&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/YwU80F06mQ4/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="The DIP - Seth Godin | Know when to Quit| বাংলা বই রিভিউ | Vlog #03"
                length="9:00"
                href="https://www.youtube.com/watch?v=4EWVBce2Zj8&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/4EWVBce2Zj8/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="My First Authentic Beef Steak try | Woodhouse Grill | Vlog #02"
                length="5:15"
                href="https://www.youtube.com/watch?v=sPkdNvw9M6M&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/sPkdNvw9M6M/maxresdefault.jpg'
                }
              ></VideoCard>
              <VideoCard
                title="First youtube video in this Channel | My First Vlog | Romitfbs"
                length="6:13"
                href="https://www.youtube.com/watch?v=w1WOqtg-4_E&ab_channel=Romitfbs"
                image={
                  'http://img.youtube.com/vi/w1WOqtg-4_E/maxresdefault.jpg'
                }
              ></VideoCard>
            </Stack>
            <Divider borderColor="gray.200" my={8} w="100%" />
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
};

export default Index;
