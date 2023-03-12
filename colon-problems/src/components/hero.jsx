import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}         backgroundColor='purple.100' >
      <svg style={{zIndex:2}} width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>

      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}>
              WELCOME
            </Text>
            <br />{' '}
            <Text color={'purple.400'} as={'span'}>
              TO PIKONE
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum debitis suscipit minima reprehenderit laboriosam, molestias nulla dignissimos? Sapiente non ipsum exercitationem itaque quidem voluptatem, iure ullam nisi asperiores hic officiis!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              href={'./stockimages'}
              rounded={'full'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.500',
              }}>
              Search
            </Button>
            <Button rounded={'full'}>Explore Events</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Spline scene="https://prod.spline.design/ENWapOdF16uKVuSe/scene.splinecode" />
      </Flex>
    </Stack>
  );
}
