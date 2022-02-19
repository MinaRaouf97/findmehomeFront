import React from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import profile from "../resources/loginimage/user.svg";
import bg from "../resources/loginimage/login.svg";

import { useState } from 'react';

import "./login/Login.css"


const Register = () => {



    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [registerFormErrors, setRegisterFormErrors] = useState({
        nameErr: null,
        emailErr: null,
        usernameErr: null,
        passwordErr: null,
        confirmPasswordErr: null,


    });


    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };




    const handleEvent = (e) => {

        if (e.target.name === "regEmail") {
            setRegisterForm({
                ...registerForm,
                email: e.target.value,
            });

            console.log(emailValidation(e.target.value))

            setRegisterFormErrors({

                ...registerFormErrors,
                emailErr:
                    e.target.value.length === 0 ? "email must be entered" :
                        emailValidation(e.target.value) === true ? null : "email must be name@address.com"


            });






        }
        else if (e.target.name === "regPassword") {
            setRegisterForm({
                ...registerForm,
                password: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                passwordErr:
                    passwordValidation(e.target.value) === true ? null : "password must be over 8 charcters"

            });
        }
        else if (e.target.name === "regName") {
            setRegisterForm({
                ...registerForm,
                name: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                nameErr:
                    e.target.value.length === 0 ? "This Field is required "
                        : e.target.value.length < 3 ? "Length must not be less than 5"
                            : null,

            });
        }
        else if (e.target.name === "regUserName") {
            setRegisterForm({
                ...registerForm,
                username: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                usernameErr:
                    e.target.value.length === 0 ? "This Field is required  "
                        : e.target.value.length < 3 ? "Length must not be less than 5"
                            : null,

            });
        }
        else if (e.target.name === "confPassword") {
            setRegisterForm({
                ...registerForm,
                confirmPassword: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                confirmPasswordErr:
                    e.target.value === registerForm.password ? null : "confirm password dosn't match"

            });
        }
    }



    const emailValidation = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regex.test(email) === true) {

            return true
        }
        else if (regex.test(email) === false) {
            return false
        }
    }

    const passwordValidation = (password) => {


        const regex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
        if (regex.test(password) === true) {
            console.log(regex.test(password))
            return true
        }
        else if (regex.test(password) === false) {
            console.log(regex.test(password))

            return false
        }
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(registerForm);



    }




    
    async function register() {

        console.log(registerForm['username'],registerForm['email'],registerForm['password'])
    
      let result = await fetch(" http://127.0.0.1:8000/api/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify({
            'name':registerForm['username'],
            'email':registerForm['email'],
            'password':registerForm['password']
        })
      });
      result = await result.json();
    //   localStorage.setItem("user-info", JSON.stringify(result))
    //   localStorage.setItem("islogedIn", true)
  
  
    }
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={profile} alt="icon" />
                        <Form onSubmit={(e) => handleSubmit(e)} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="text" name="regName" placeholder="Please Enter Your Name" onChange={(e) => handleEvent(e)}
                                    value={registerForm.name} />
                                <div>
                                    <small className="text-danger">{registerFormErrors.nameErr}</small>
                                </div>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" name="regEmail" placeholder="Enter email" onChange={(e) => handleEvent(e)}
                                    value={registerForm.email} />
                                <div>
                                    <small className="text-danger">{registerFormErrors.nameErr}</small>
                                </div>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="text" placeholder="please Enter your Username" name="regUserName" onChange={(e) => handleEvent(e)}
                                    value={registerForm.username} />
                            </Form.Group>
                            <div>
                                <small className="text-danger">{registerFormErrors.nameErr}</small>
                            </div>


                            <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control type={passwordShown ? "text" : "password"} placeholder="please Enter your password"
                                    name="regPassword"
                                    onChange={(e) => handleEvent(e)}
                                    value={registerForm.password} />
                            </Form.Group>
                            <div>
                                <small className="text-danger">{registerFormErrors.passwordErr}</small>
                            </div>
                            <div className="mb-3 form-check">
                                <Form.Control
                                    type="checkbox"
                                    className="form-check-input"
                                    id="regCheckbox"
                                    name="passwordChecbox"
                                    onClick={() => togglePassword()}
                                />
                                <label class="form-check-label text-muted text-left"  for="passwordChecbox">Show password ?</label>
                                
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type={passwordShown ? "text" : "password"} placeholder="please confirm your password"
                                    name="confPassword"
                                    onChange={(e) => handleEvent(e)}
                                    value={registerForm.confirmPassword} />
                            </Form.Group>
                            <div>
                                <small className="text-danger">{registerFormErrors.confirmPasswordErr}</small>
                            </div>
                            <Button variant="primary"  className="loginBtn" onClick={register}>
                                Sign up
                            </Button>


                        </Form>


                    </Col>
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={bg} alt="background"></img>

                    </Col>

                </Row>
            </Container>

        </>
    );

};

export default Register