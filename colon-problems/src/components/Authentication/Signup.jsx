import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const [errorMsg, setErrorMsg]= useState('')
    const handleSubmission = () => {
      // console.log(emailRef.current.value)

      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(async(res)=>{
          const user = res.user
          await updateProfile(user, {
              displayName: nameRef.current.value,
          });
          console.log(user)
          navigate('/home')
      }).catch((err)=> {
          setErrorMsg(err.message)
          console.log("Error - ", err.message)
  
  })
  }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" ref={nameRef}/>
                  </FormControl>
                </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={emailRef}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} ref={passwordRef}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} href = "\login">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }