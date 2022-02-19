import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from 'react-bootstrap'
import './update.css'
import axios from "axios";


function UpdateUser() {


    const [userData, setUserData] = useState({})

    const cachedHits = localStorage.getItem('user-info');
    const newcache = JSON.parse(cachedHits, null, -1);
    const jwtoken = newcache.jwt;
    // console.log(newcache.user.name)
    const headers = {
        //'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtoken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jwt': `${jwtoken}`
    }


    useEffect(() => {
        // console.log(headers)
        axios
            .get(
                `http://127.0.0.1:8000/api/user`,
                { headers: headers }
            )
            .then((res) => {
                setUserData(res.data)
                console.log(userData['name'])
                console.log(userData['email'])


            })
            .catch((err) => console.log(err));
    }, []);

    const handleEvent = (e) => {
        e.preventDefault()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (

        <div className='outer'>
            <div className='inner bg-light'>

                <Container>
                    <Row>
                        <Col lg={12} md={6} sm={12}>


                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <h3>Edit Profile</h3>



                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" id='name' value={userData['name']} name="name" className="form-control" placeholder="Username" required onChange={(e) => handleEvent(e)} />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required
                                        placeholder='name@domain.com'
                                        pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' value={userData['email']} className="form-control" onChange={(e) => handleEvent(e)} />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" name='password1'
                                        id='password1'
                                        minLength='6'
                                        maxLength='20' className="form-control" placeholder="Enter password" onChange={(e) => handleEvent(e)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" name='password2'
                                        id='password2' minLength='6'
                                        maxLength='20' placeholder="Confirm password" onChange={(e) => handleEvent(e)} />
                                </div>
                                <div class="d-flex justify-content-center">


                                    <button type="submit" className="btn d-block btn-dark btn-lg btnupdate  ">Update</button>
                                </div>


                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default UpdateUser