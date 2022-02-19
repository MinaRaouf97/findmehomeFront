import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import FeaturedRooms from "../components/FeaturedRooms";


const home = () => {
  return (
    <>
      <Hero>
        <Banner title="FindMe Home" subtitle="prices Start From 800 LE" >
          <Link to="/rooms" className="btn-primary" >
            Search For Your Future Home Now
          </Link>
        </Banner>
      </Hero>

      {/* <FeaturedRooms /> */}



    </>
  );
};

export default home;





