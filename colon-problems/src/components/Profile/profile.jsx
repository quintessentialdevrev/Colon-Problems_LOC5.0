import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text } from '@chakra-ui/react';
import './profile.css';
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import p4 from './p4.jpeg'
// import { Navbar } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'

export default function Profile(){
    return(
        <>
        <Navbar/>
        <Card className='c3'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={p1}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Jen Anderson</Heading>

      <Text py='2'>
      I am a passionate Photographer who strives to deliver the highest quality images that will get the desired message across. I take great pride in the high standards I create for my clients to ensure they are happy with their end result and their feedback is everything they need. My portfolio contains: 
- Corporate Events & Promos (Branding) - Brand Identity, Advertising Campaigns, Trade Shows, BTL Media Material
Portrait Photography / Stereoscopic Video Content Production/Editing/Photography
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='purple'>
        View Full Profile
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card className='c3'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={p2}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Ravish Jain</Heading>

      <Text py='2'>
      I started at 18 from internships to college fests to hanging out with my seniors to switching jobs too soon to to find what really makes me going.
I finally found it, literally.
I started my own production house in 2018 and since then it’s been a roller coaster ride we have done it all from day to day survival to a running an actual money making business. 
I found my too good to be true partners when everyone said don’t start a business with friends, well they even said “this won’t work out, you’re just a kid!”
In short I love what I do and I would love to help you make bombshell films for your brands and create content that touches people or gets you the eye balls you deserve.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='purple'>
      View Full Profile
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card className='c3'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={p3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Saroj Khanna</Heading>

      <Text py='2'>
      I'm highly analytical, good listener, diligent, and a team player. Extremely motivated to constantly develop my skills and grow professionally. Confident in my abilities, I strive to contribute towards the organization's success by giving my best at every step. I have currently worked as an video editor, freelancer, graphic designer, fundraiser. My strengths are public speaking and Pr.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='purple'>
      View Full Profile
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card className='c3'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={p4}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Riya Menon</Heading>

      <Text py='2'>
      As a creative personnel with over 3 years of experience, I have had the pleasure of collaborating with a wide range of clients and brands. From shooting commercials for major companies to capturing stunning visuals for firms and brands, I have a diverse portfolio that showcases my versatility and creativity.

In addition to my technical skills, I am a strong communicator and team player. I thrive in fast-paced environments and have a keen eye for detail, which allows me to bring my client's vision to life on screen.

I am always looking for new opportunities to collaborate and push the boundaries of cinematography. If you have a project that you think would benefit from my unique perspective and expertise, I'd love to hear from you! 
Cheers!
      </Text>
    </CardBody>

    <CardFooter>
      <Button className='c10' variant='solid' colorScheme='purple'>
      View Full Profile
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Footer/>
</>
    ) 
    
}
