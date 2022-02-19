import React from "react";


export default function SearchHome() {
  return (
    <>


      <section className="HomeSearch" id="HomeSearch">
        <form action="">
          <div className="inputBox" >


            <select className="form-select" >
              <option value="" disabled hidden selected>Maximum price</option>
              <option value="5000">5000 LE</option>
              <option value="10000">10000 LE</option>
              <option value="20000">20000 LE</option>
              <option value="45000">45000 LE</option>
            </select>

            <select name="" id="" >
              <option value="" disabled hidden selected>Property Type</option>
              <option value="room">Room</option>
              <option value="flat">Flat</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>

            <select name="" id="" className="form-select">
              <option value="" disabled hidden selected>Bathrooms</option>
              <option value="1 bathroom">1 bathroom</option>
              <option value="2 bathroom">2 bathroom</option>
            </select>

            <select name="" id="" className="form-select">
              <option value="" disabled hidden selected>Bedrooms</option>
              <option value="1 bedroom">1 bedroom</option>
              <option value="2 bedroom">2 bedroom</option>
              <option value="3 bedroom">3 bedroom</option>
              <option value="4 bedroom">4 bedroom</option>
            </select>

            <select name="" id="" className="form-select">
              <option value="" disabled hidden selected>Features</option>
              <option value="parking space">parking space</option>
              <option value="playground">playground</option>
              <option value="security">security</option>
            </select>
          </div>
          <input type="submit" value="search property" className="btn" />
        </form>
      </section>





    </>
  );
}







