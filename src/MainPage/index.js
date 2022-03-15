import styled from "styled-components"

const Container=styled.div`
    height: 100vh;
    background-color: #28bec6;
    display: center;
    flex-direction: row;
`

const Hello = styled.h1`
    font-size: 100px;
    color: white;
    margin-left: 350px;
    margin-top: 100px;
    text-align: center
`

const Desc = styled.h1`
    font-size: 30px;
    color: white;
    margin-top: 500px;
    margin-right: 700px;
    text-align: center
`

function MainPage() {
    return (
    <Container>
        <Hello>Hello, I am Louis</Hello>
        <Desc>Competitive Fortnite Player | VFX</Desc>
    </Container>
    )
}

export default MainPage;