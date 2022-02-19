import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import profile from "../../resources/loginimage/user.svg";
import bg from "../../resources/loginimage/login.svg";
import "./Login.css";
import { useState } from 'react';
import {loginUser} from '../../store/actions/userActions';
import {useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const userstate = useSelector((state) => state.userLoginState.isLogedIn);
  const dispatch = useDispatch();

  const history = useHistory() 
  async function login() {
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    console.log(result)
    if(result.jwt){
      console.log("exist")
      localStorage.setItem("user-info", JSON.stringify(result))
      localStorage.setItem("islogedIn", true)
      dispatch(loginUser())
      history.push('/')
       
      }
    else{
      console.log("not ex")
    }
  


  }
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <img className="icon-img" src={profile} alt="icon" />

          
              <div className="mb-3 " id="formBasicEmail">

                <input className="form-control" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />

              </div>

              <div className="mb-3" id="formBasicPassword">

                <input className="form-control" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <Button onClick={login} variant="primary" className="loginBtn" >
                Login
              </Button>


       


          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={bg} alt="background"></img>

          </Col>

        </Row>
      </Container>

    </>
  );

};

export default Login