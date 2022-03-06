import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";
// import FeaturedRooms from "../components/FeaturedRooms";
import ClientFeedback from "../components/ClientFeedback";
// import SearchHome from "../components/SearchHome";
// import SearchHomeCheckBox from '../components/SearchHomeCheckBox'
import { FiMapPin } from 'react-icons/fi';
import propImage from '../resources/images/property1.jpg'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-scroll";
import PropertyHomeCard from "../components/PropertyHomeCard"


let imagepath = ""
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const Home = () => {
  const [propList, setPropList] = useState([])




  const [govList, setGovList] = useState([])
  const [searchProp, setSearchProp] = useState({
    searchText: ""
  });

  const [selected, setSelected] = useState([]);

  const AllPropApi = 'http://127.0.0.1:8000/api/allproperty'
  const AllGovApi = ' http://127.0.0.1:8000/api/allgovernorate'
  const searchPropAPi = ' http://127.0.0.1:8000/api/search/'
  const filterByGovAPI = ' http://127.0.0.1:8000/api/filter/'


  const reqOneAllProp = axios.get(AllPropApi);
  const reqTwoAllGov = axios.get(AllGovApi);
  const handleEvent = (e) => {

    if (e.target.name === "searchBar") {
      setSearchProp({
        ...searchProp,
        searchText: e.target.value
      });

    }
    if (e.target.name === "checkbox") {

      const checked = e.target.checked;

      console.log(checked)
      if (checked) {
        setSelected(selected => [...selected, e.target.value])


      }
      else if (checked === false) {
        const id = e.target.value
        setSelected(selected.filter(item => item !== id))

      }
      console.log(selected)


    }

  }


  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      // console.log(searchProp.searchText)
      .get(`${searchPropAPi}${searchProp.searchText}`)
      .then((res) => {
        console.log(res.data)
        setPropList(res.data)
      })
      .catch((err) => console.log(err))




  }



  useEffect(() => {

    axios.all([reqOneAllProp, reqTwoAllGov]).then(axios.spread((...responses) => {
      console.log(responses[0].data)
      console.log(responses[1].data)
      setPropList(responses[0].data)
      setGovList(responses[1].data)


    }))
      .catch((err) => console.log(err))

  }, [])

  useEffect(() => {


  }, [propList])

  useEffect(() => {
    if (selected === undefined || selected.length == 0) {
      axios
        .get(`${AllPropApi}`)
        .then((res) => { setPropList(res.data) })
        .catch((err) => console.log(err))
    }
    else {
      axios
        .get(`${filterByGovAPI}${selected}`)
        .then((res) => { setPropList(res.data) })
        .catch((err) => console.log(err))
    }


  }, [selected])






  return (
    <>
      <Hero>
        <Row className="justify-content-center   ">
          <Col sm={6} xs={12} md={6} className="mt-5 mb-4" style={{ textAlign: 'center' }}>
            <Banner title="FindMe Home" subtitle="prices Start From 1000 LE" >
            </Banner>
          </Col>
          <Col sm={6} xs={12} md={6} className="p-1" >
            {/* \\\\\\\\\\ Start OF SearchHome ////////// */}

            <section className="HomeSearch" id="HomeSearch">
              <div className='mt-5'>
                <div className="inputBox" >
                  <h4 className="container-fluid" > Advanced Search</h4>
                  <input name="searchBar" type="text" placeholder="Search by description" onChange={(e) => handleEvent(e)}
                    value={searchProp.searchText} />
                  {/* 
                  <select className="form-select" >
                    <option value="" disabled hidden selected >Maximum price</option>
                    <option value="5000">5000 LE</option>
                    <option value="10000">10000 LE</option>
                    <option value="20000">20000 LE</option>
                    <option value="45000">45000 LE</option>
                  </select>

                  <select name="" id="" >
                    <option value="" disabled hidden selected>Property Type</option>
                    <option value="room">Room</option>
                    <option value="flat">Flat</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                  </select>

                  <select name="" id="" className="form-select">
                    <option value="" disabled hidden selected>Bathrooms</option>
                    <option value="1 bathroom">1 bathroom</option>
                    <option value="2 bathroom">2 bathroom</option>
                  </select>

                  <select name="" id="" className="form-select">
                    <option value="" disabled hidden selected>Bedrooms</option>
                    <option value="1 bedroom">1 bedroom</option>
                    <option value="2 bedroom">2 bedroom</option>
                    <option value="3 bedroom">3 bedroom</option>
                    <option value="4 bedroom">4 bedroom</option>
                  </select>

                  <select name="" id="" className="form-select">
                    <option value="" disabled hidden selected>Amenities</option>
                    <option value="parking space">parking space</option>
                    <option value="playground">playground</option>
                    <option value="security">security</option>
                  </select>
 */}
                </div>
                <Link to='ourHomesSearch' duration={1000}>
                  <input value="search" className="btn" onClick={(e) => handelSubmit(e)} />
                </Link>
              </div>
            </section>

            {/* \\\\\\\\\\ End OF SearchHome ////////// */}
          </Col>
        </Row>
      </Hero>



      {/* \\\\\\\\\\\\\\\\\\ Start OF FeaturedRooms ///////////////// */}

      <div className=" mt-5">

        <Title title="Featured Rooms" />

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
      </div>

      {/* \\\\\\\\\\\\\\\\\\ End OF FeaturedRooms ///////////////// */}

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ Start OF OurHomes ///////////////////////// */}
      <Title title="Our Apartments" />


      <Row id={'ourHomesSearch'} >
        <Col xs={6} sm={6} md={3} >



          {/* \\\\\\\\\\ Start OF SearchHomeCheckBox ////////// */}

          <div className="SearchHomeCheckBoxparent">
            <div className="SearchHomeCheckBox" >
              <h4>Search</h4>
              <h5>City: </h5>
              {govList.map((gov) => {
                
                return (
                  <>
                    <input type="checkbox" key={gov.id} id={gov.id} name="checkbox" value={gov.id} onChange={(e) => handleEvent(e)} />
                    <label htmlFor="cairo"> {gov.name} </label>
                  </>

                )
              })}

              {/* <input type="checkbox" id="cairo" name="cairo" value="cairo" />
              <label htmlFor="cairo"> Cairo </label>
              <input type="checkbox" id="Giza" name="Giza" value="Giza" />
              <label htmlFor="Giza">Giza</label>
              <input type="checkbox" id="Fayoum" name="Fayoum" value="Fayoum" />
              <label htmlFor="Fayoum"> Fayoum</label> */}
              <hr />
              <h5>Type: </h5>
              <input type="checkbox" id="Room" name="Room" value="Room" />
              <label htmlFor="Room"> Room </label>
              <input type="checkbox" id="Apartment" name="Apartment" value="Apartment" />
              <label htmlFor="Apartment">Apartment</label>
              <input type="checkbox" id="Villa" name="Villa" value="Villa" />
              <label htmlFor="Villa"> Villa</label>
              <hr />

              <h5>Bedrooms: </h5>
              <input type="checkbox" id="1" name="1" value="1" />
              <label htmlFor="1"> 1 </label>
              <input type="checkbox" id="2" name="2" value="2" />
              <label htmlFor="2"> 2 </label>
              <input type="checkbox" id="3" name="3" value="3" />
              <label htmlFor="3"> 3 </label>
              <input type="checkbox" id="4" name="4" value="4" />
              <label htmlFor="4"> 4 </label>

              <hr />

              <h5>Amenities: </h5>
              <input type="checkbox" id="Tv Cable" name="Tv Cable" value="Tv Cable" />
              <label htmlFor="Tv Cable"> Tv Cable </label>
              <input type="checkbox" id="Wifi" name="Wifi" value="Wifi" />
              <label htmlFor="Wifi">Wifi</label>
              <input type="checkbox" id="Parking" name="Parking" value="Parking" />
              <label htmlFor="Parking"> Parking</label>





            </div>
          </div>

          {/* \\\\\\\\\\ End OF SearchHomeCheckBox ////////// */}



        </Col>
        <Col xs={12} sm={12} md={9}>


          <div className=" mt-5">

            <div >
              <Container>
                <div className="section-heading">
                </div>

                <Row>
                  {/* \\\\\\ First Apartment Card /////// */}
                  {propList.map((prop) => {
                

                    return (
                      <PropertyHomeCard key={prop.id} props={prop}/>
                    )
                  })}


                </Row>

              </Container>
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ End OF OurHomes ///////////////////////// */}

        </Col>

      </Row>






      <ClientFeedback />
    </>
  );
};

export default Home;









// <Hero>
// <Banner title="FindMe Home" subtitle="prices Start From 800 LE" >
//   <Link to="/rooms" className="btn-primary" >
//     Find Your Future Home
//   </Link>
// </Banner>
// </Hero>