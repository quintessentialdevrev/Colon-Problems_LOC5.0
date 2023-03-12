import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Link,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Store from '../store';



export default function Courses() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Navbar/>
      <div>
        <h1 style={{textAlign:'center'}}>COURSES</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio possimus aliquam, molestias quam deserunt esse ullam animi. Doloremque, illum sequi? Ad repellendus ipsa nemo voluptatibus inventore magni. Incidunt, fugiat.
      </div>

      

      <Center py={6}>
        <Box
          w="xs"
          rounded={'sm'}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={useColorModeValue('6px 6px 0 purple', '6px 6px 0 cyan')}>

          <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <iframe width="318" height="200" src="https://www.youtube.com/embed/OAcXVIK9mjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Box>
          <Box p={4}>
            <Box
              bg="black"
              display={'inline-block'}
              px={2}
              py={1}
              color="white"
              mb={2}>
              <Text fontSize={'xs'} fontWeight="medium">
                React
              </Text>
            </Box>
            <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
              React v18.0
            </Heading>
            <Text color={'gray.500'} noOfLines={2}>
              In this post, we will give an overview of what is new in React 18,
              and what it means for the future.
            </Text>
          </Box>
          <HStack borderTop={'1px'} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w="full">
                <Text fontSize={'md'} fontWeight={'semibold'}>
                  View more
                </Text>
              <BsArrowUpRight />

            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              borderLeft={'1px'}
              cursor="pointer"
              onClick={() => setLiked(!liked)}>
              {liked ? (
                <BsHeartFill fill="purple" fontSize={'24px'} />
              ) : (
                <BsHeart fontSize={'24px'} />
              )}
            </Flex>
          </HStack>
        </Box>

        <Box
          w="xs"
          rounded={'sm'}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={useColorModeValue('6px 6px 0 purple', '6px 6px 0 cyan')}>
          <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <iframe width="318" height="200" src="https://www.youtube.com/embed/scViCnEnG_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Box>
          <Box p={4}>
            <Box
              bg="black"
              display={'inline-block'}
              px={2}
              py={1}
              color="white"
              mb={2}>
              <Text fontSize={'xs'} fontWeight="medium">
                React
              </Text>
            </Box>
            <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
              React v18.0
            </Heading>
            <Text color={'gray.500'} noOfLines={2}>
              In this post, we will give an overview of what is new in React 18,
              and what it means for the future.
            </Text>
          </Box>
          <HStack borderTop={'1px'} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w="full">
              <Text fontSize={'md'} fontWeight={'semibold'}>
              <a href="/store">View more 123</a> 
=              </Text>
              <BsArrowUpRight />
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              borderLeft={'1px'}
              cursor="pointer"
              onClick={() => setLiked(!liked)}>
              {liked ? (
                <BsHeartFill fill="purple" fontSize={'24px'} />
              ) : (
                <BsHeart fontSize={'24px'} />
              )}
            </Flex>
          </HStack>
        </Box>

        <Box
          w="xs"
          rounded={'sm'}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={useColorModeValue('6px 6px 0 purple', '6px 6px 0 cyan')}>
          <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <iframe width="318" height="200" src="https://www.youtube.com/embed/bLMjr3YQMMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Box>
          <Box p={4}>
            <Box
              bg="black"
              display={'inline-block'}
              px={2}
              py={1}
              color="white"
              mb={2}>
              <Text fontSize={'xs'} fontWeight="medium">
                React
              </Text>
            </Box>
            <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
              React v18.0
            </Heading>
            <Text color={'gray.500'} noOfLines={2}>
              In this post, we will give an overview of what is new in React 18,
              and what it means for the future.
            </Text>
          </Box>
          <HStack borderTop={'1px'} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w="full">
              <Text fontSize={'md'} fontWeight={'semibold'}>
                View more
              </Text>
              <BsArrowUpRight />
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              borderLeft={'1px'}
              cursor="pointer"
              onClick={() => setLiked(!liked)}>
              {liked ? (
                <BsHeartFill fill="purple" fontSize={'24px'} />
              ) : (
                <BsHeart fontSize={'24px'} />
              )}
            </Flex>
          </HStack>
        </Box>


      </Center>
      <Footer/>
    </>

  );
}