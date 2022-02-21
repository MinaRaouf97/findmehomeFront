import React, { Component } from "react";
import Title from "./Title";
// import Loading from "./Loading";
import PropertyHomeCard from "./PropertyHomeCard";


export default function FeaturedRooms () {


    return (
      <div className=" mt-5">
      
        <Title title="Explore Our Apartments" />
        <PropertyHomeCard/>
        
      </div>
    );
 
}
