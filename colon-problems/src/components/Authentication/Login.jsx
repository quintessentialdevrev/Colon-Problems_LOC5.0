import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  //import bg from './images/img3.png'

  import { useNavigate } from 'react-router-dom'
  import{signInWithEmailAndPassword} from 'firebase/auth'
  import {useRef, useState} from 'react'
  import {auth} from '../firebase'

  
  export default function Login() {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errorMsg, setErrorMsg]= useState('')
    const handleSubmission = () => {

      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(()=>{
          navigate('/home')
      }).catch((err)=> {
          setErrorMsg(err.message)
          console.log("Error - ", err.message)
  })
  }
    return (
      <Flex
    //   backgroundImage={
    //     'url(https://images.unsplash.com/photo-1676675356577-ccdb5bec1f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60)'
    //   }
    // backgroundImage={
    //   bg
    // }
        backgroundSize={'cover'}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={emailRef}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={passwordRef}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmission}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }