import React from "react";
import { Container ,Button,Col,Form,Row } from "react-bootstrap"; 
import "./Login.css";
import bg from "../../images/bg.jpeg";


function Addprop(){

    return(


<div style={{ backgroundImage: `url(${bg})` }}>
      <Container >
        <div></div>
      <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">Add Property</h1>
      <Row className="mt-5" >
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" style={{backgroundColor:"white",opacity:0.85}}>
              <Form>
                  <Form.Group >
                      <Form.Label>Street</Form.Label>
                      <Form.Control type="text" placeholder="Enter Street Name " />
                  </Form.Group>
                  <br/>
                  
                  <Form.Group >
                      <Form.Label>Governorate</Form.Label>
                      <br/>
                          <select id="inputState" classname="form-control">
                            <option value="Cairo">Cairo</option>
                <option value="Behaira">Behaira</option>
                <option value="Giza">Giza</option>
                <option value="Minia">Minia</option>
                <option value="Aswan">Aswan</option>
</select>
                  </Form.Group>
                  <br/>
                  <Form.Group >
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="number" placeholder="Property Price " />
                  </Form.Group>
                  
                  <br/>
                  <Form.Group >
                      <Form.Label>Size</Form.Label>
                      <Form.Control type="text" placeholder="Property Size " />
                  </Form.Group>
                  <br/>
                  <Form.Group >
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3}  placeholder='write a description '/>
                  </Form.Group>
                  <br/>
                  <Button variant="primary btn-block" type="submit">
                      Add New Property
                  </Button>
              </Form>
          </Col>
      </Row>
      
  </Container>
</div>
    )




}


export default Addprop