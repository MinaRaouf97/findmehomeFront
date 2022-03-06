import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import axios from "axios";
import { FcBusinessman, FcCellPhone, FcFeedback } from "react-icons/fc";

import "./userPosts.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Profile from './UserPosts'


const UserPosts = () => {
  const cachedHits = localStorage.getItem("user-info");
  const newcache = JSON.parse(cachedHits, null, -1);
  const jwtoken = newcache.jwt;
  console.log(newcache.user.name);
  const headers = {
    Authorization: `Bearer ${jwtoken}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    image: "",
    email: "",
  });

  const [flats, setFlats] = useState([]);

  const removeFlat = (id) => {
    const newFlat = flats.filter((flat) => flat.id !== id);
    setFlats(newFlat);
  };

  useEffect(() => {
    console.log(headers);
    axios
      .get(`http://localhost:8000/api/allproperty?user=${newcache.user.name}`, {
        headers: headers,
      })
      .then((res) => {
        setFlats(res.data);
        console.log(res.data);
        axios
          .get(`http://127.0.0.1:8000/api/finduser?name=${newcache.user.name}`)
          .then((res) => {
            console.log(res.data);
            setUserData({
              name: res.data["name"],
              phone: res.data["phonenum"],
              image: `http://127.0.0.1:8000${res.data["profileimg"]}`,
              email: res.data["email"],
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    

    
    <main className="maaain">
    {/* <PageHero title={'User posts'} /> */}
      
        <Row className="d-flex justify-content-center">
          <Col lg={6} md={12} sm={12}>
            <div className="title mt-5">
              <h2>My Profile</h2>
              <div className="underline"></div>
            </div>


            <div className="reviews bg-light">
              
                <Row>
                  <Col lg={6} md={6} sm={6}  xs={5} className="pdb mt-2">
                    <div className="img-container">
                      <img
                        src={userData["image"]}
                        alt={newcache.user.name}
                        className="person-img"
                      />
                      
                    </div>
                  </Col>

                 <Col lg={6} md={6} sm={6} xs={7} className='indx'>

                 
                    <div >
                      <Row>
                        <Col lg={3} md={3} sm={3}>
                          <span>
                            <FcBusinessman size={45} />
                          </span>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <span>{newcache.user.name}</span>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <Row>
                        <Col lg={3} md={3} sm={3}>
                          <span>
                            <FcCellPhone size={45} />
                          </span>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <span> {userData["phone"]}</span>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <Row>
                        <Col lg={3} md={3} sm={3}>
                          <span>
                            <FcFeedback size={45} />
                          </span>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <span>{userData["email"]}</span>
                        </Col>
                      </Row>
                    </div>
                    
                    </Col>
                 
                </Row>
                <Row>
                  <Col>
                  <div>
                        <Link
                          to="/updateProfile"
                          className="btn btn-block btn-dark"
                        >
                          Update Info
                        </Link>
                      </div>
                  </Col>
                </Row>
              
            </div>
          </Col>
          
        </Row>
       
          

            <Posts flats={flats} removeFlat={removeFlat} />
          
    </main>
   
  );
};

export default UserPosts;
