import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {ProgressBar, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

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

const Achievementscontainer=styled.div`
    background-color: purple;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 80px;
`

const Achievements=styled.h1`
    font-size: 25px;
    color: white;
`

const Achievementstitle=styled.h1`
    font-size: 50px;
    color: white;
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

const Interestscontainer=styled.div`
    background-color: red;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 80px;
`

const Interests=styled.h1`
    font-size: 25px;
    color: white;
`

const Intereststitle=styled.h1`
    font-size: 50px;
    color: white;
`

function LearnMore() {
    const barstyle={
        width: "300px",
        height: "30px",
    };
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
                <ProgressBar style={barstyle} label={`4.8/5.0`} max={5.0} min={0.0} now={4.8}/>
                
                <Educationrowcontainer>SAT</Educationrowcontainer>
                <ProgressBar style={barstyle} label={`1500/1600`} max={1600.0} min={0.0} now={1500.0}/>
            </Educationcontainer>

            <Achievementscontainer>
                <Achievementstitle>Achievements</Achievementstitle>
                <Achievements>$100 earned from video games</Achievements>
                <Achievements>High GPA</Achievements>
            </Achievementscontainer>

            <Interestscontainer>
                <Intereststitle>Interests</Intereststitle>
                <Interests>Gaming</Interests>
                <Interests>Video editing</Interests>
                <Interests>Sports</Interests>
                <Interests>Science</Interests>
                <Interests></Interests>
            </Interestscontainer>

        </Container>
    )
}


export default LearnMore