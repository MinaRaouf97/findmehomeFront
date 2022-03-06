import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from 'react-bootstrap'
import './update.css'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from "react-router-dom";


toast.configure()


function UpdateUser() {

    
    const [propImgList, setPropImgList] = useState([])


    const [userData, setUserData] = useState({
        name: "",
        phone: "",

    });

    const [userDataErr, setUserDataErr] = useState({
        nameErr: null,
        phoneErr: null,

    });

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
                console.log(res.data)
                setUserData({
                    name:res.data['name'],
                    phone:res.data['phonenum']
                })
           

            })
            .catch((err) => console.log(err));
    }, []);


    
    const numberValidation = (phone) => {
        const regex = /^01[0-2]{1}[0-9]{8}/g;
        if (regex.test(phone) === true) {

            console.log("sa7")
            return true
        }
        else if (regex.test(phone) === false) {
            console.log("8lt")

            return false
        }
    }
    const handleEvent = (e) => {
        e.preventDefault()
        if (e.target.name === "name") {
            setUserData({
                ...userData,
                name: e.target.value,
            });


            setUserDataErr({

                ...userDataErr,
                nameErr:
                    e.target.value.length === 0 ? "username must entered" 
                    : null,



            });




        }
        else if (e.target.name === "phone") {
            console.log(e.target.value)
            setUserData({
                ...userData,
                phone: e.target.value,
            });


            setUserDataErr({

                ...userDataErr,
                phoneErr:
                e.target.value.length === 0  ? "username must entered" :
                numberValidation(e.target.value) !== true ? "wrong number format":
                null
                
            



            });




        }
    }
    const handleImageChange = (e) => {
        const tempArr = [];
       
        [...e.target.files].forEach(file => {
            console.log("file >>> ", file);
            tempArr.push({
                image: e.target.files[0]
            });


        });
        setPropImgList(tempArr)

        console.log(tempArr)

      

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userDataErr.nameErr != null || userDataErr.phoneErr != null ) {
            console.log("there is somthing wron with your data ")
            toast.error('You entered Wrong data Try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
       
        else {
        const cachedHits = localStorage.getItem('user-info');
        const newcache = JSON.parse(cachedHits, null, -1);
        const jwtoken = newcache.jwt;
        const headers = {
            Authorization: `Bearer ${jwtoken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        let form_data = new FormData();

      
        form_data.append('phonenum', userData.phone)
        if (propImgList.length !== 0){
            form_data.append('profileimg', propImgList[0].image, propImgList[0].image.name);
        }
        axios.put(`http://127.0.0.1:8000/api/update/${newcache.user.id}`, form_data, { headers: headers })
        .then((res)=>{
            if (res.status === 200 || res.status === 201) {
                toast.success('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });


            }

            
        })


        


    }
        
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
                                <div>
                                <small className="text-danger">{userDataErr.nameErr}</small>
                            </div>
                                
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input type="text" id='name' pattern='^01[0-2]{1}[0-9]{8}' value={userData['phone']} name="phone" className="form-control" placeholder="Phone Number" required onChange={(e) => handleEvent(e)} />
                                </div>
                                <div>
                                <small className="text-danger">{userDataErr.phoneErr}</small>
                            </div>
                            <br/>
                            <br/>

                                
                                <input type="file" name="propImages" id="image"
                                accept="image/png, image/jpeg"  className="inputfile primary btn-primary" onChange={(e) => handleImageChange(e)} />
                                
                                <br/>
                                <br/>

                                {/* <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required
                                        placeholder='name@domain.com'
                                        pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' value={userData['email']} className="form-control" onChange={(e) => handleEvent(e)} />
                                </div> */}

                                {/* <div className="form-group mb-3">
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
                                </div> */}
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