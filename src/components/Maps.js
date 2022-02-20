import React from "react";

function Map() {
  const address = "Ramsis station, Ramses, Al Fagalah, Al Azbakeya, Egypt";
  const search = `https://maps.google.com/maps?q=${address}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="maps">

      <div className="gmap_canvas">
      <h3  style={{fontWeight:'bold'}}>Location</h3>

        <iframe 
        className="mapiframe"
          title={address}
          src={search}
          width="75%"
          height="500"
          id="gmap_canvas"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  );
}

export default Map;