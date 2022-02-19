import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FiMapPin } from 'react-icons/fi';
import propImage from '../resources/images/property1.jpg'
import { Container } from 'react-bootstrap';

function PropertyHomeCard() {

    return (
        <>
            <div >
                <Container>
                    <div className="section-heading">
                    </div>



                    <Col xs={12} sm={12} md={4}>
                        <Card className="apartment">
                            <Card.Img variant="top" src={propImage} />
                            <Card.Title>Sweet Family Home</Card.Title>
                            <Card.Body>
                                <p> <FiMapPin />  <strong> 12 Zohor st, Maddi, Cairo </strong> </p>
                                <Card.Text> 250 M sq, 3 Beds, TV, 2 Baths, 2 Balcony </Card.Text>
                            </Card.Body>
                            <div className="apartment-footer">
                                <h4 className="price"><strong>2500</strong> <small>LE /month</small></h4>
                                <Button className="apt-btn " variant="primary">View Details</Button>
                            </div>
                        </Card>
                    </Col>




                </Container>
            </div>
        </>
    );
};

export default PropertyHomeCard;