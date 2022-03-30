import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const Container=styled.div`
    height: 100vh;
    background-color: #28bec6;
    display: center;
`

const About = styled.h1`
    font-size: 70px;
    color: white;
    text-align: center
`

const OtherDesc = styled.h1`
    font-size: 30px;
    color: white;
    text-align: center
    margin-left:300px
`

const Desc = styled.h1`
    font-size: 20px;
    color: white;
    text-align: center
    margin-left:300px
`

const Image=styled.img`
    width: 300px;
    height: 300px;
`

function LearnMore() {
    return (
        <Container>
            <About>About Me</About>
            <OtherDesc>Hello, I am Louis You. I am a competitive Fortnite player and video editor from South Korea.</OtherDesc>
            <Desc>I am 13 years old and was born and raised in Korea. My hobbies are playing video games and sports and editing videos.</Desc>
            <Desc>Name: Louis You</Desc>
            <Desc>Email: louis@gmail.com</Desc>
            <Desc>Phone: 010-1111-1111</Desc>
            <Desc>Date of Birth: Oct 22, 2008</Desc>
            <Image src="https://yt3.ggpht.com/TI7wuXQFIUOXPgdT9-rGi5hkj29wpx9kgGnA9RprFONcmojnCL5rqmwyqFJWsgRFGbt5DqvA=s176-c-k-c0x00ffffff-no-rj"></Image>

        </Container>
    )
}


export default LearnMore