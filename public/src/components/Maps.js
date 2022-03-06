import React, { useState ,useEffect } from "react";
import { useParams} from 'react-router-dom';
import axios from "axios";

function Map() {

  const[location,setLocation]=useState({
    city:"",
    area:"",
    street:""
  })
  const params = useParams()
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
const PropApi = `http://127.0.0.1:8000/api/propinfo/${params.singleroom}`

const reqPropApi= axios.get(PropApi,{headers:headers});

useEffect(()=>{

  axios.all([reqPropApi]).then(axios.spread((...responses)=>{
      console.log(responses[0].data)
     
      setLocation({
        city:responses[0].data['governorate'],
        area:responses[0].data['area'],
        street:responses[0].data['street']
      })
  


  }))
  .catch((err)=>console.log(err))

},[])

  const address = `${location['area']},${location['city']}, Egypt`;
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