import React from "react";
import {
    ChakraProvider,
    Box,
    theme,
    HStack,
    Image,
    Stack,
    Text,
    Link,
    SimpleGrid,
    Heading,
    Button,
  } from '@chakra-ui/react';


const ImageSliderButton = ({buttonDetails, buttonIcon, goto, currentImageIndex ,setCurrentImageIndex}) => {
    return (
        <Stack color={currentImageIndex === buttonDetails.index && "#21436e"} cursor="pointer" alignItems="center" onClick={() => {
            goto(buttonDetails.index)
            setCurrentImageIndex(buttonDetails.index)
            }} >
                <buttonIcon size={50}/>
            <h3>{buttonDetails.header}</h3>
            <p>{buttonDetails.description}</p>
        </Stack>
    )
}


export default ImageSliderButton;