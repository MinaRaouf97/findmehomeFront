import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Contact from '../components/Contact'


const About = () => {
  return (
    <div className="about">
      <Hero>
        <Banner title="FindMe Home" subtitle="prices Start From 1000 LE" >
        </Banner>
      </Hero>

      <Services />
      <Contact />


    </div>
  );
};

export default About;



