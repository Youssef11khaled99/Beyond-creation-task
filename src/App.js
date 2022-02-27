import React, { useRef, useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  HStack,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Heading,
  Button, IconButton,
} from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import { BiSwim } from "react-icons/bi";
import { AiFillShop, AiOutlineArrowDown } from "react-icons/ai";
import { GiHighGrass, GiThrowingBall } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";


function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const slideRef = useRef();
  const myRef = useRef(null)
  const goto = index => { slideRef.current.goTo(index) }
  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}); 
  // Here I was trying to automate it 
  // But it's not working because of Icon I think I need to change it to a returning function 
  // But I don't have time ^^
  const imageSliderButtons = [
    {
      index: 0,
      icon: <BiSwim size={50}/>,
      header: "SPORTS FACILITIES",
      description: "Sports Courts, Fitness Center Water Sports Activities"
    },
    {
        index: 1,
        icon: <FaStore size={50}/>,
        header: "COMMERCIAL AREAS",
        description: "Downtown Makadi Heights Mall"
    },
    {
        index: 2,
        icon: <GiThrowingBall size={50}/>,
        header: "KIDS FRIENDLY AREAS",
        description: "Kids Aqua Park Kids Areas"
    },
    {
        index: 3,
        icon: <GiHighGrass size={50}/>,
        header: "CENTRAL PARK",
        description: "Far far away, behind the word mountain"
    },
    {
        index: 4,
        icon: <AiFillShop size={50}/>,
        header: "HOTELS",
        description: "Far far away, behind the word mountains"
    },
    {
        index: 5,
        icon: <BiPlusMedical size={50}/>,
        header: "MEDICAL FACILITIES",
        description: "Far far away, behind the word mountain"
    }  
  ]
  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" 
        backgroundRepeat="no-repeat"
        backgroundSize="cover" 
        backgroundImage={`url("/images/background_image.jpg")`} w="100vw"  h="100vh">
        <Stack h="100vh" justifyContent="space-between">
          <Navbar/>
          <IconButton
            colorScheme="blackAlpha"
            onClick={executeScroll}
            icon={<AiOutlineArrowDown />}
          />
        </Stack>
        <HStack ref={myRef} justifyContent="center" minH="100vh" maxW="100vw" 
        // background="linear-gradient(to right bottom, #04eff3e6, #e2d10c);"
           background="linear-gradient(rgba(96,205,203,1),transparent)" 
        >
          <Image
            display="inline-block"
            width="50vw"
            height="100vh"
            padding="2vw"
            objectFit="contain"
            src="/images/mall.jpg"
            alt="logo-makadi"
          />
          <Stack display="inline-block" maxW="50vw" textAlign="start">
              <Heading as='h1' size='xl'>The place <Heading as='h1' size='4xl'>We call home</Heading></Heading>
            <Text>Makadi Heights is a town built over 3.4 million square meters planned for develpoment, with ans elvation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units.
            Envisioned as a comprehensive town.</Text>
            <HStack justifyContent="center" spacing={3}>
              <Button className='transparent-btn'>DOWNLOAD BROCHURE</Button>
              <Button className='transparent-btn'>SHOW MASTER PLAN</Button>
            </HStack>
          </Stack>
        </HStack>
        <HStack spacing={10} justifyContent="center" minH="100vh" maxW="100vw" backgroundColor="white">
          <Stack spacing={5}>
            <Stack color="#21436e" fontFamily="sans-serif" textAlign="start" marginTop="10vh">
              <Heading as='h1' size='xl'>Discover Lifestyle</Heading>
              <Heading as='h1' size='4xl'>Amentities</Heading>
              <Text fontSize='sm'>Occupying a land area of 33,000 square meters, <br/>Makadi Heights' stunning clubhouse</Text>
            </Stack>
            <SimpleGrid minChildWidth='10vw' spacing={10}  color="#268fb4">
              {/* This is the code incase I'm going to automate it */}
              {/* {
                imageSliderButtons.map(buttonDetails => {
                  return <ImageSliderButton buttonDetails={buttonDetails} buttonIcon={buttonDetails.icon} goto={goto} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex}/>
                })
              } */}
              <Stack 
                color={currentImageIndex === 0 && "#21436e"} 
                cursor="pointer" 
                alignItems="center" 
                onClick={() => {
                  goto(0)
                  setCurrentImageIndex(0)}}
                >
                  <BiSwim size={30}/>
                <Text fontSize='sm'>SPORTS FACILITIES</Text>
                <Text fontSize='xs' color="#b3b3b3" wordBreak="break-word">Sports Courts, Fitness Center Water Sports Activities</Text>
              </Stack>
               <Stack color={currentImageIndex === 1 && "#21436e"} cursor="pointer" alignItems="center" onClick={() => {
                  goto(1)
                  setCurrentImageIndex(1)
                 }}>
                <FaStore size={30}/>
                <Text fontSize='sm'>COMMERCIAL AREAS</Text>
                <Text fontSize='xs' color="#b3b3b3" wordBreak="break-word">Downtown Makadi Heights Mall</Text>
              </Stack>
               <Stack color={currentImageIndex === 2 && "#21436e"} cursor="pointer" alignItems="center" onClick={() => {
                  goto(2)
                  setCurrentImageIndex(2)
                 }}>
                <GiThrowingBall size={30}/>
                <Text fontSize='sm'>KIDS FRIENDLY AREAS</Text>
                <Text fontSize='xs' color="#b3b3b3" wordBreak="break-word">Kids Aqua Park Kids Areas</Text>
              </Stack>
               <Stack color={currentImageIndex === 3 && "#21436e"} cursor="pointer" alignItems="center" onClick={() => {
                  goto(3)
                  setCurrentImageIndex(3)
                 }}>
                <GiHighGrass size={30}/>
                <Text fontSize='sm'>CENTRAL PARK</Text>
                <Text fontSize='xs' color="#b3b3b3" wordBreak="break-word">Far far away, behind the word mountain</Text>
              </Stack>
               <Stack color={currentImageIndex === 4 && "#21436e"} cursor="pointer" alignItems="center" onClick={() => {
                  goto(4)
                  setCurrentImageIndex(4)
                 }}>
                <AiFillShop size={30}/>
                <Text fontSize='sm'>HOTELS</Text>
                <Text fontSize='xs' color="#b3b3b3" wordBreak="break-word">Far far away, behind the word mountains</Text>
              </Stack>
               <Stack color={currentImageIndex === 5 && "#21436e"} cursor="pointer" alignItems="center" onClick={() => {
                  goto(5)
                  setCurrentImageIndex(5)
                 }}>
                <BiPlusMedical size={30}/>
                <Text fontSize='sm'>MEDICAL FACILITIES</Text>
                <Text fontSize='xs' color="#b3b3b3" wordBreak="break-word">Far far away, behind the word mountain</Text>
              </Stack>
            </SimpleGrid>
          </Stack>
          
          <Stack justifyContent="center" w="50vw" h="50vh">
            <Slideshow slideRef={slideRef}/>
          </Stack>
        </HStack>

      </Box>
    </ChakraProvider>
  );
}

export default App;
