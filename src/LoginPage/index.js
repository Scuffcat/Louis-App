import styled from "styled-components"

const Container=styled.div`
    height:100vh;
    background-color: #28bec6;
    display:flex;
    flex-direction:row;
`

const LeftSide=styled.h1`
    height: 100%;
    width: 50%;`

const WelcomeTitle = styled.h1`
    font-size: 100px;
    color: white;
    font-weight: 800;
    margin-left: 120px;
`

const Label=styled.label`
    font-size: 40px;
    color: purple;
`

const Input=styled.input`
    width: 200px;
    height: 20px;
`

const RightSide=styled.h1`
height: 580px;
width: 50% ;
background-image: url("https://i0.wp.com/gcoconline.com/word/wp-content/uploads/2018/10/Growing-Plant.jpg?fit=940%2C580&ssl=1")
`

const Login=styled.button`
width: 150px;
height: 70px;
margin-left: 270px;
color: green;
`

function LoginPage() {
    return (
        <Container>
        <LeftSide>
            <WelcomeTitle>Welcome!</WelcomeTitle>
            <Label>ID: </Label>
            <Input></Input>
            <br></br>
            <Label>Password: </Label>
            <Input></Input>
            <br></br>
            <br></br>
            <Login>Login</Login>
        </LeftSide>
        <RightSide></RightSide>
        </Container>
    )
}

export default LoginPage