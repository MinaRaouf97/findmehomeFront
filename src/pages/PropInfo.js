
import Description from "../components/Description";
import PhotosSlider from "../components/PhotosSlider";
import PropertyInfo from "../components/PropertyInfo";
import axios from "axios";
import Map from '../components/Maps';
import React, { useState, useEffect,useContext } from 'react';
const PropInfo = ()=>{

    const [propInfo,setPropInfo] = useState([])


    const PropApi = 'http://127.0.0.1:8000/api/propinfo/2'

    const reqPropApi= axios.get(PropApi);
    


    useEffect(()=>{

        axios.all([reqPropApi]).then(axios.spread((...responses)=>{
            console.log(responses[0].data)
           
            setPropInfo(responses[0].data)
            


        }))
        .catch((err)=>console.log(err))
     
    },[])


    console.log(propInfo['size'])


    return(
        <>
        <PhotosSlider />
        <PropertyInfo size={propInfo['size']} />
        <Description size={propInfo['size']} description={propInfo['describiton']} />
        <Map/>

        </>
        
    )
}






export default PropInfo;