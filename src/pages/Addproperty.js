import React from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
// import "./Login.css";
import bg from "../resources/addpropimages/new.svg";

import axios from 'axios';

function Addprop() {

  return (



    <>
      <Container>
        <Row className="mt-5">
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <h1 style={{ color: "purple" }}>Add property </h1>
            <Form>



              <div classname="form-row">
                <div classname="form-group col-md-6">
                  <label >Seller name </label>
                  <input type="text" classname="form-control" placeholder="Enter Your Name " />
                </div>
                <div classname="form-group col-md-6">
                  <label >Area</label>
                  <input type="text" classname="form-control" placeholder="Area of The Property" />
                </div>
              </div>
              <div classname="form-group">
                <label for="inputAddress">Street</label>
                <input type="text" classname="form-control" placeholder="1234 Main St" />
              </div>
              <div classname="form-group">
                <label >Price</label>
                <input type="text" classname="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div classname="form-row">
                <div classname="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" classname="form-control" id="inputCity" />
                </div>
                <div classname="form-group col-md-4">
                  <label for="inputState">Governorate</label>
                  <select id="inputState" classname="form-control">
                    <option value="Cairo">Cairo</option>
                    <option value="Behaira">Behaira</option>
                    <option value="Giza">Giza</option>
                    <option value="Minia">Minia</option>
                    <option value="Aswan">Aswan</option>
                  </select>
                </div>

              </div>
              <div classname="form-group">
                <div classname="form-check">
                  <label  >
                    Description
                  </label>
                  <textarea id='desc' placeholder='write decription   ' cols='48' rows='5' required ></textarea>

                </div>
              </div>



              <Button variant="success" onClick={()=> {window.location.href = 'https://google.com/';} }>
                Add Property
              </Button>


            </Form>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <img className="w-100 " src={bg} alt="background"></img>


          </Col>
        </Row >
      </Container>

    </>
  )




}


export default Addprop