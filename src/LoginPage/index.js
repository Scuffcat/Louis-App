import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

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

const LabelWrapper=styled.div`
    display: flex
    flex-direction: row
    margin-top: 100px
    justify-content: center
`


function LoginPage() {
    const history=useHistory()
    const [user, setUser] = useState({
        id :"",
        password : ""
    });
    const {id, password}=user;

    const ToMainPage = () => {
        if (id === "" || password === "") {
            alert("Empty ID or Password")
        }

        if (id, password === 1234) {
            alert("You may log in")
            history.push("/main")
        }
    }

const putUserInfo=(e)=>{
    const {name,value}=e.target
    setUser ({
        ...user,
        [name]:value,
    })
    console.log(user)
}

    return (
        <Container>
        <LeftSide>
            <WelcomeTitle>Welcome!</WelcomeTitle>
            <LabelWrapper>
            <Label>ID: </Label>
            <Input type="text" value={id} name="id" onChange={putUserInfo}></Input>
            </LabelWrapper>
            <br></br>
            <LabelWrapper>
            <Label>Password: </Label>
            <Input type="password" value={password} name="password" onChange={putUserInfo}></Input>
            </LabelWrapper>
            <br></br>
            <br></br>
            <Login onClick={ToMainPage}>Login</Login>
        </LeftSide>
        <RightSide></RightSide>
        </Container>
    )
}

export default LoginPage