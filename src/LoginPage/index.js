import styled from "styled-components"

const Container=styled.div`
    height:100vh;
    background-color: #28bec6;
    display:flex;
    flex-direction:row;
`

const WelcomeTitle = styled.h1`
    font-size: 100px;
    color:blue;
    text-align:center;
    margin-top: 20px;
    width:50%;
    background-color:beige
`
const RightSide=styled.h1`
font-size: 30px;
color:teal;
width:50%;
background-color:brown;
`

function LoginPage() {
    return (
        <Container>
        <WelcomeTitle>Left half page</WelcomeTitle>
        <RightSide>Right half page</RightSide>
        </Container>
    )
}

export default LoginPage