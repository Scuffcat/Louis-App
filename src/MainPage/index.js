import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const Container=styled.div`
    height: 100vh;
    background-color: #28bec6;
    display: center;
`

const Hello = styled.h1`
    font-size: 100px;
    color: white;
    text-align: center
`

const Desc = styled.h1`
    font-size: 30px;
    color: white;
    text-align: center
`

const Imgwrapper=styled.div`
    display: flex;
    justify-content: center;
`

const Youtube=styled.img`
    width: 100px;
    height: 100px;
`

const Twitter=styled.img`
    width: 100px;
    height: 100px;
`

const Profile=styled.img`
    width: 300px;
    height: 300px;
`

const Learnmore=styled.button`
    width: 80px;
    height: 50px;
    margin-left: 50px;
    color: blue;
`


function MainPage() {
    const history=useHistory()
    const ToLearnMore = () => {
        history.push("/more")
    }
    
    return (
    <Container>
        <Hello>Hello, I am Louis</Hello>
        <Desc>Competitive Fortnite Player | VFX</Desc>
        <Imgwrapper>
        <a href="https://www.youtube.com">
        <Youtube src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/300px-YouTube_social_white_square_%282017%29.svg.png"></Youtube>
        </a>
        <a href="https://twitter.com">
        <Twitter src="https://authy.com/wp-content/uploads/Twitter-Logo.png"></Twitter>
        </a>
        </Imgwrapper>
        <Imgwrapper>
        <Profile src="https://yt3.ggpht.com/TI7wuXQFIUOXPgdT9-rGi5hkj29wpx9kgGnA9RprFONcmojnCL5rqmwyqFJWsgRFGbt5DqvA=s176-c-k-c0x00ffffff-no-rj"></Profile>
        </Imgwrapper>
        <Learnmore onClick={ToLearnMore}>Learn more</Learnmore>
    </Container>
    )
}

export default MainPage;