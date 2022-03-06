import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillMessage } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <div className="about">
                            <div className="widget-heading">
                                <h4>About</h4>
                            </div>
                            <p>Our commitment to fast accurate matches and effortless results have made this service one that thousands of people rely on and recommend.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="quick-link">
                            <div className="widget-heading">
                                <h4>Quick Link</h4>
                            </div>
                            <div className="quick-links">
                                <ul>
                                    <li><Link to="/home">Home</Link> </li>
                                    <li><Link to="/rooms">Rooms</Link> </li>
                                    <li><Link to="/contact">Contact</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="footer-contact">
                            <div className="widget-heading">
                                <h4>Contact Us</h4>
                            </div>
                            <div className="address">
                                <ul>
                                    <li><span><AiFillMessage /></span> info@FindMeHome.com</li>
                                    <li><span><FiPhoneCall /></span> Telephone : +(20) 111222333</li>

                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;


