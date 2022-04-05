import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import {ProgressBar, Button} from "react-bootstrap"

const Container=styled.div`
    height: 100%;
    background-color: #28bec6;
    display: center;
    flex-direction: column;
`

const Aboutmecontainer=styled.div`
    background-color: #28bec6;
`

const Educationcontainer=styled.div`
    background-color: teal;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 80px;
`

const Educationrowcontainer=styled.div`
    display: flex;
    margin-bottom: 10px;
    color: white;
    font-size: 25px;
`

const About = styled.h1`
    font-size: 70px;
    color: white;
    text-align: center;
`

const OtherDesc = styled.h1`
    font-size: 30px;
    color: white;
`

const Desc = styled.h1`
    font-size: 20px;
    color: white;
`

const Image=styled.img`
    width: 300px;
    height: 300px;
`

const Education = styled.h1`
    font-size: 50px;
    color: white;
    text-align: center;
`

function LearnMore() {
    return (
        <Container>
            <Aboutmecontainer>
            <About>About Me</About>
            <OtherDesc>Hello, I am Louis You. I am a competitive Fortnite player and video editor from South Korea.</OtherDesc>
            <Desc>I am 13 years old and was born and raised in Korea. My hobbies are playing video games and sports and editing videos.</Desc>
            <Desc>Name: Louis You</Desc>
            <Desc>Email: louis@gmail.com</Desc>
            <Desc>Phone: 010-1111-1111</Desc>
            <Desc>Date of Birth: Oct 22, 2008</Desc>
            <Image src="https://yt3.ggpht.com/TI7wuXQFIUOXPgdT9-rGi5hkj29wpx9kgGnA9RprFONcmojnCL5rqmwyqFJWsgRFGbt5DqvA=s176-c-k-c0x00ffffff-no-rj"></Image>
            </Aboutmecontainer>
            <Educationcontainer>
                <Education>Education</Education>
                <Educationrowcontainer>GPA</Educationrowcontainer>
            </Educationcontainer>
        </Container>
    )
}


export default LearnMore