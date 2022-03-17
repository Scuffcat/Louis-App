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

const Imgwrapper=styled.div`
    display: flex;
    justify-content: center;
`

const Youtube=styled.div`
    width: 300px;
    height: 300px;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/300px-YouTube_social_white_square_%282017%29.svg.png")
`

const Twitter=styled.div`
    width: 300px;
    height: 300px;
    background-image: url("https://authy.com/wp-content/uploads/Twitter-Logo.png")
`

function MainPage() {
    return (
    <Container>
        <Hello>Hello, I am Louis</Hello>
        <Desc>Competitive Fortnite Player | VFX</Desc>
        <Imgwrapper>
        <Youtube></Youtube>
        <Twitter></Twitter>
        </Imgwrapper>
    </Container>
    )
}

export default MainPage;