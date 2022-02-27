import React, { useState, useEffect } from 'react';
import { Text, HStack, Button, Image, IconButton, Center } from '@chakra-ui/react';
import { MdPhone } from "react-icons/md";

import axios from 'axios';
import env from "react-dotenv";
import Hamburger from 'hamburger-react'
import '../../App.css'

function Navbar() {
    console.log("Link: ", env.REACT_APP_WEATHER_LINK)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [weatherData, setWeatherData] = useState({})
    const [weatherIconLink, setWeatherIconLink] = useState('')
    useEffect(() => {
        axios({
            method: 'GET',
            url: env.REACT_APP_WEATHER_LINK,
        })
        .then((res) => {
            console.log(res.data)
            setWeatherData(res.data)
            setWeatherIconLink(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
        })
        .catch(err => console.error(err))
    }, [])
    const kelvinToCelsius = (temp) => {
        return Math.floor(temp - 273.15);
    }
    console.log("Weather: ", weatherData)
    console.log("weatherIconLink: ", weatherIconLink)
    return (
        <HStack spacing={5} justifyContent="flex-end" p={10} height="15vh">
            <Center  marginRight="auto" boxSize="9vw" backgroundColor="white">
                <Image
                    boxSize="8vw"
                    objectFit="contain"
                    src="/images/makadi_logo.png"
                    alt="makadi-logo"
                />
            </Center>
            {
                weatherData
                ? null
                :
                <>
                    <Image 
                        src={weatherIconLink} 
                        alt={weatherData.weather[0].description}
                        boxSize='50px'
                        objectFit='cover' 
                    />
                    <Text> {weatherData === {} ? null : kelvinToCelsius(weatherData.main.temp) + "°"} </Text>
                </>
            }
            <IconButton
                variant='outline'
                colorScheme='white'
                aria-label='Call Sage'
                fontSize='20px'
                borderRadius="50%"
                icon={<MdPhone />}
            />
            <Button className='transparent-btn'>BOOK NOW</Button>
            <Text>MENU</Text>
            <Hamburger size={30} toggled={isMenuOpen} toggle={setIsMenuOpen} /> 
        </HStack>
    );
}

export default Navbar;
