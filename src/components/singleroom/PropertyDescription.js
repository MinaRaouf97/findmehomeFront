import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Col,FormControl } from 'react-bootstrap';



export default function Description() {
    return (


        <div className="container">
            <div className="row">

                <Col sm={12} xs={12} md={8} >


                    <div id='Description' >
                        <h4>Home Description</h4>
                        <Tabs defaultActiveKey="warning">
                            <Tab eventKey="first" title="Home Overview" style={{ backgroundColor: '#f8f8ff' }}>
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
                            <Tab eventKey="second" title="Avilable Bedrooms" style={{ backgroundColor: '#f8f8ff' }}>
                                <dl>
                                    <dt>Room 1:</dt>
                                    <li>Private Room With 1 Bed</li>
                                    <li>Air conditioning </li>
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

                    <div className="card "  style={{ width: "15rem",height:'20rem' ,margin:'10%',textAlign:'center' }}>
                        <img className="card-img-top" src="https://eclatsuperior.com/wp-content/uploads/2021/04/man3.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Contact With Seller</h5>
                            <p className="card-text"><FormControl as="textarea"  /></p>
                            <a href="#" className="btn btn-primary  " >Submit</a>
                        </div>
                    </div>

                </Col>

            </div>







        </div >

















    );
}






