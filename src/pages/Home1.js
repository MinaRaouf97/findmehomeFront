import React from "react";
import { Row, Col, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import ClientFeedback from "../components/ClientFeedback";
import SearchHome from "../components/SearchHome";
// import Contact from '../components/Contact'

const home = () => {
  return (
    <>
      <Hero>


      <Row className="justify-content-center   ">

      <Col sm={6} xs={12} md={6} className="mt-5 mb-4" style={{textAlign:'center'}}>

      <Banner title="FindMe Home" subtitle="prices Start From 1000 LE" >
      </Banner>

      </Col>
      <Col sm={6} xs={12} md={6} className="p-1" >
      <SearchHome />

      </Col>
      </Row>


      </Hero>





      <FeaturedRooms />
      <ClientFeedback />



    </>
  );
};

export default home;





// <Hero>
// <Banner title="FindMe Home" subtitle="prices Start From 800 LE" >
//   <Link to="/rooms" className="btn-primary" >
//     Find Your Future Home
//   </Link>
// </Banner>
// </Hero>