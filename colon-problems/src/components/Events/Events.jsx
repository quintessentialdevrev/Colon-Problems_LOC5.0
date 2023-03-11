import React from 'react';
import Carousel from './Carousel';
import Card from '../Card';
import Navbar from '../Navbar/Navbar';
import { Flex } from '@chakra-ui/react';


export default function Events() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Flex style={{justifyContent:'center'}}>
      <Card/>
      <Card/>
      <Card/>
      </Flex>
   
    </div>
  )
}
