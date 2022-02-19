import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

const About = () => {
  return (
    <div className="about">
      <Hero>
        <Banner title="FindMe Home" subtitle="prices Start From 800 LE" >
        </Banner>
      </Hero>

      <Services />

    </div>
  );
};

export default About;



