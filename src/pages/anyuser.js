import React, {useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FcBusinessman, FcCellPhone, FcFeedback } from "react-icons/fc";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './userPosts/UserPosts'


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
     
      <section className="container-banner">

      <Row className="d-flex justify-content-center">
          <Col lg={6} md={12} sm={12}>
            <div className="title mt-5">
              <h2>Profile</h2>
              <div className="underline"></div>
            </div>


            <div className="reviews bg-light">
              
                <Row>
                  <Col lg={6} md={6} sm={6}  xs={5} className="pdb mt-2">
                    <div className="img-container">
                      <img
                        src={'userData["image"]'}
                        alt={newcache.user.name}
                        className="person-img"
                      />
                      
                    </div>
                  </Col>

                 <Col lg={6} md={6} sm={6} xs={7} className='indx'>    
                    <div >
                      <Row>
                        <Col lg={3} md={3} sm={3}>
                          <span>
                            <FcBusinessman size={45} />
                          </span>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <span>{newcache.user.name}</span>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <Row>
                        <Col lg={3} md={3} sm={3}>
                          <span>
                            <FcCellPhone size={45} />
                          </span>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          {/* <span> {userData["phone"]}</span> */}
                        </Col>
                      </Row>
                    </div>

                   
                    </Col>
                 
                </Row>
                
              
            </div>
          </Col>
          
        </Row>
      
{/* <a href="#home">

<img id="profilepic" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yrd8qyMAeTKfxPH00Az2BqE561qnoB5Ulw&usqp=CAU`}  width="170" height="170" alt="profilepic"/>
</a>
<h1> User:  {params.userprofile}</h1> */}

</section>

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
            </Card></div></center></div> 


            
            );
        })}
      </>
    );
  };
  
  export default Anyprofile;