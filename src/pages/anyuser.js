import React, { Component,useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Anyprofile = () => {
  const params = useParams();
  
  const cachedHits = localStorage.getItem('user-info');
  const newcache = JSON.parse(cachedHits, null, -1);
  const jwt = newcache.jwt;
  console.log(newcache.user.name)
  console.log(params.userprofile)
    const [flats, setFlats] = useState([]);
    const headers = {
      Authorization: `Bearer ${jwt}`,
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
    useEffect(() => {
      axios
        .get(
          `http://localhost:8000/api/allproperty?user=${params.userprofile}`,
          {headers: headers}
        )
        .then((res) => setFlats(res.data))
        .catch((err) => console.log(err));
    }, []);
    console.log(flats)
    return (
        
      <>
      <center>
      <section className="container-banner">

<a href="#home"><img id="profilepic" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yrd8qyMAeTKfxPH00Az2BqE561qnoB5Ulw&usqp=CAU`}  width="170" height="170" alt="profilepic"/></a>
<h1> User:  {params.userprofile}</h1>

</section>
</center>
        {flats.map((flat) => {
          return (
            <div class="container">
            <center>
    <div class="row">
            <Card className="col" border="primary" bg="light" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>  <Link to={`/flat/${flat.id}`} key={flat.id}> <h3 >{flat.describiton}</h3></Link>  </Card.Title>
           
            <h5>Owner: <Link to={`/${flat.seller}`} key={flat.seller}> {flat.seller}</Link></h5>
            </Card.Body>
            </Card></div></center></div>);
        })}
      </>
    );
  };
  
  export default Anyprofile;