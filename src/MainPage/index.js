import styled from "styled-components"

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

const Imgwrapper=styled.h1`
    display: flex;
    justify-content: center
`

const Youtube = styled.h1`
    width: 100px;
    height: 100px;
    background-image: url("https://i.pinimg.com/originals/7d/c9/93/7dc993c70d4adba215b87cafdc59d82d.png")
`

function MainPage() {
    return (
    <Container>
        <Hello>Hello, I am Louis</Hello>
        <Desc>Competitive Fortnite Player | VFX</Desc>
        <Imgwrapper>
        <Youtube></Youtube>
        </Imgwrapper>
    </Container>
    )
}

export default MainPage;