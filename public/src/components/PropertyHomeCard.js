import React, {useState,useEffect}from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FiMapPin } from 'react-icons/fi';
import propImage from '../resources/images/property1.jpg'
import { Container } from 'react-bootstrap';
import { Link as RELINK } from "react-router-dom";
import axios from "axios";

function PropertyHomeCard(props) {

    const [retrivedImgs,setRetrivedImgs] = useState([])


    useEffect(()=>{
       
        const headers = {    
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
        axios.get(`http://127.0.0.1:8000/api/getimages/${props.props.id}`,{headers: headers})
    
        .then((res)=>{
    
          const firstImage = res.data[0]
          const imagepath = firstImage['img']
          setRetrivedImgs(imagepath)
          
        })
            
            
      },[])
    return (
        <>
                     <Col xs={12} sm={12} md={5} >
                       <Card className="apartment" >
                        <Card.Img variant="top" src={`http://127.0.0.1:8000${retrivedImgs}`} />
                            <Card.Title>{props.props.title}</Card.Title>
                        <Card.Body>
                          <p> <FiMapPin />  <strong> {props.props.street}, {props.props.area}, {props.props.governorate} </strong> </p>
                          <Card.Text>{props.props.size} M sq, {props.props.bedrooms} Beds, Shared with {props.props.sharedWith} </Card.Text>
                        </Card.Body>
                        <div className="apartment-footer">
                          <h4 className="price"><strong>{props.props.price}</strong> <small>LE /month</small></h4>
                          <RELINK to={`prop/${props.props.id}`} >
                            <Button className="apt-btn " variant="primary">View Details</Button>
                          </RELINK>
                        </div>
                      </Card>
                       

                    </Col>




        </>
    );
};

export default PropertyHomeCard;