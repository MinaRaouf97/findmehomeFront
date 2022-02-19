import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, FormControl } from 'react-bootstrap';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBed } from 'react-icons/fa'
import { FcMoneyTransfer } from "react-icons/fc"


export default function PropertyDescription() {
    return (
        <>



            <Row className=" border-top justify-content-center mt-4 p-4 ">

                <Col sm={3} xs={3} md={3} style={{ marginLeft: '-5%' }}>
                    <span >    <FcMoneyTransfer size={90} />     <h5><strong>1500 LE </strong>/month</h5>     </span>
                </Col>


                <Col sm={3} xs={3} md={2}>
                    <span>     <FaBed size={50} style={{ fill: 'MidnightBlue' }} />   <h2>5</h2>        </span>
                </Col>


                <Col sm={3} xs={3} md={2}>
                    <span>     <BsFillPeopleFill size={40} style={{ fill: 'MidnightBlue' }} />   <h2>4</h2>        </span>
                </Col>

            </Row>




<br/>




            <Row className="  justify-content-center  p-5 ">

                <Col sm={12} xs={12} md={8} >


                    <div id='Description' >
                        <h3 style={{fontWeight:'bolder'}}>Home Description</h3>
                        <Tabs defaultActiveKey="warning" >
                            <Tab eventKey="first" title="Home Overview" className='p-2' style={{ backgroundColor: '#f8f8ff' }}>
                                <dl>
                                    <dt>Description:</dt>
                                    <dd>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati iure quibusdam tempora libero repellendus sequi doloribus exercitationem ex ipsam.
                                    </dd>
                                    <dt>Features:</dt>
                                    <li>Clothes washer</li>
                                    <li>TV Avilable</li>
                                    <dt>Bills</dt>
                                    <li>Included</li>
                                </dl>
                            </Tab>
                            <Tab eventKey="second" title="Avilable Bedrooms" className='p-2' style={{ backgroundColor: '#f8f8ff' }}>
                                <dl>
                                    <dt>Room 1:</dt>
                                    <li>Private Room With 1 Bed</li>
                                    <li>Air conditioning </li>
                                    <br/>
                                    <dt>Room 2:</dt>
                                    <li>Shared With 1 Person</li>
                                    <li>1 Bed Avilable</li>
                                    <li>Garden View</li>
                                </dl>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>


                <Col sm={6} xs={6} md={4}>

                    <div className="descriptionCard " >
                        <img className="card-img-top" src="https://eclatsuperior.com/wp-content/uploads/2021/04/man3.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Contact With Seller</h5>
                            <p className="card-text"><FormControl as="textarea" /></p>
                            <a href="#" className="btn btn-primary  " >Submit</a>
                        </div>
                    </div>

                </Col>

            </Row>







        </>
    );
}






