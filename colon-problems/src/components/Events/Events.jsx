import React from 'react';
import Carousel from './Carousel';
import Eventcontainer from './EventContainer';
import Navbar from '../Navbar/Navbar';
import { Flex } from '@chakra-ui/react';
import './events.css'


export default function Events() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <div className="tagline">
          Lorem Ipsum!
        </div>
      <Flex className='mainpage'>
      <div className="flexcontainer">
        <Eventcontainer/>
      </div>
      </Flex>
    </div>
  )
}
