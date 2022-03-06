import React from "react";
import Title from "./Title";
// import Loading from "./Loading";
// import PropertyHomeCard from "./PropertyHomeCard";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FiMapPin } from 'react-icons/fi';



export default function FeaturedRooms() {

  const HomeData = [
    {
      img: 'https://i.imgur.com/wVS41x3.jpg',
      titlee: 'Sweet Family Home',
      address: '22 Abas Elakad, Masr elgdeeda, Cairo',
      details: '140 M sq, 2 Beds, 1 Baths, 1 Balcony',
      price: '2500'
    },
    {
      img: 'https://i.imgur.com/omcYQ8A.jpeg',
      titlee: 'Large Room',
      address: '5 Salah Salem st, Zamalek, Cairo',
      details: '220 M sq, 3 Beds, Wfii, 1 Baths, 1 Balcony',
      price: '1800'
    }, {
      img: 'https://i.imgur.com/LBVupqi.jpeg',
      titlee: 'Luxury Apartment',
      address: '12 Zohor st, Maddi, Cairo',
      details: '280 M sq, 4 Beds, TV, 2 Baths, 2 Balcony',
      price: '1500'
    },
  ]

  return (

    <div className=" mt-5 " style={{ textAlign: 'center' }}>

      <Title title="featured rooms " />
      <Row className="ml-1 d-flex justify-content-center ">


        {HomeData.map((i) => {
          return (
            <Col xs={12} sm={6} md={3} className="m-1 ">
              <Card className="apartment">
                <Card.Img className="propcardimg " variant="top" src={i.img} />
                <Card.Title>{i.titlee}</Card.Title>
                <Card.Body style={{ height: '8rem' }}>
                  <p> <FiMapPin />  <strong> {i.address} </strong> </p>
                  <Card.Text> {i.details} </Card.Text>
                </Card.Body>
                <div className="apartment-footer" >

                  <h4 className="price"><strong>{i.price}</strong> <small>LE /month</small></h4>
                  <Button className="Cardbtn" variant="primary">View Details</Button>
                </div>
              </Card>
            </Col>


          )
        })}

      </Row>

    </div>
  );

}


// <Col xs={12} sm={6} md={3} className="m-1">
// <Card className="apartment">
//   <Card.Img className="propcardimg" variant="top" src='https://i.imgur.com/LBVupqi.jpeg' />
//   <Card.Title>Sweet Family Home</Card.Title>
//   <Card.Body>
//     <p> <FiMapPin />  <strong> 12 Zohor st, Maddi, Cairo </strong> </p>
//     <Card.Text> 250 M sq, 3 Beds, TV, 2 Baths, 2 Balcony </Card.Text>
//   </Card.Body>
//   <div className="apartment-footer">
//     <h4 className="price"><strong>2500</strong> <small>LE /month</small></h4>
//     <Button className="Cardbtn" variant="primary">View Details</Button>
//   </div>
// </Card>
// </Col>



// <Col xs={12} sm={6} md={3} className="m-1">
// <Card className="apartment">
//   <Card.Img className="propcardimg" variant="top" src='https://i.imgur.com/omcYQ8A.jpeg' />
//   <Card.Title>Sweet Family Home</Card.Title>
//   <Card.Body>
//     <p> <FiMapPin />  <strong> 12 Zohor st, Maddi, Cairo </strong> </p>
//     <Card.Text> 250 M sq, 3 Beds, TV, 2 Baths, 2 Balcony </Card.Text>
//   </Card.Body>
//   <div className="apartment-footer">
//     <h4 className="price"><strong>2500</strong> <small>LE /month</small></h4>
//     <Button className="Cardbtn" variant="primary">View Details</Button>
//   </div>
// </Card>
// </Col>


// <Col xs={12} sm={6} md={3} className="m-1">
// <Card className="apartment">
//   <Card.Img className="propcardimg" variant="top" src="https://i.imgur.com/wVS41x3.jpg" />
//   <Card.Title>Sweet Family Home</Card.Title>
//   <Card.Body>
//     <p> <FiMapPin />  <strong> 12 Zohor st, Maddi, Cairo </strong> </p>
//     <Card.Text> 250 M sq, 3 Beds, TV, 2 Baths, 2 Balcony </Card.Text>
//   </Card.Body>
//   <div className="apartment-footer">
//     <h4 className="price"><strong>2500</strong> <small>LE /month</small></h4>
//     <Button className="Cardbtn" variant="primary">View Details</Button>
//   </div>
// </Card>
// </Col>