import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import PhotosSlider from "../components/singleroom/PhotosSlider";
import Map from "../components/Maps";
import PropertyDescription from "../components/singleroom/PropertyDescription";
// import Reviews from "../components/Reviews";


const SingleRoom = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <PhotosSlider />
      <PropertyDescription/>

      <Map />

    </>
  );
};

export default SingleRoom;


