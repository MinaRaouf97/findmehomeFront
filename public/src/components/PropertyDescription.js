import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function Description() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={3}>
                <Grid item xs={6}>


                    <div id='Description' style={{ display: 'block', width: '900px', padding: 25 }}>
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

                </Grid>
                {/* <Grid item xs={3}>
                    <div> </div>
                </Grid> */}
                <Grid item xs={3}>


                    <div className='MessageForm'>

                        <MDBCard  >
                            <MDBCardImage
                                src='https://eclatsuperior.com/wp-content/uploads/2021/04/man3.jpg' position='top' className='rounded' alt='...' />
                            <MDBCardBody>

                                <MDBCardTitle>John Smith</MDBCardTitle>
                                <MDBCardText>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                                </MDBCardText>
                                <MDBBtn href='#'>Send Message</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                </Grid>


            </Grid>
        </Box>
    );
}