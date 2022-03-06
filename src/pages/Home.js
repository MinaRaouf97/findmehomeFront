import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";
import FeaturedRooms from "../components/FeaturedRooms2";
// import ClientFeedback from "../components/ClientFeedback";
import Review from '../components/clientsReview/Review'

// import SearchHome from "../components/SearchHome";
// import SearchHomeCheckBox from '../components/SearchHomeCheckBox'
// import { FiMapPin } from 'react-icons/fi';
// import propImage from '../resources/images/property1.jpg'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-scroll";
import PropertyHomeCard from "../components/PropertyHomeCard"
import Services from "../components/Services";
// import Contact from '../components/Contact'

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
          <Col sm={6} xs={12} md={6} className="mt-2 mb-4" style={{ textAlign: 'center' }}>
            <Banner title="FindMe Home" subtitle="prices Start From 1000 LE" >
            </Banner>
          </Col>
          <Col sm={6} xs={12} md={6} className="p-1" >
            {/* \\\\\\\\\\ Start OF SearchHome ////////// */}

            <section className="HomeSearch" id="HomeSearch">
              <div className='mt-5'>
                <div className="inputBox" >
                  <h4 className="container-fluid" > Advanced Search</h4>
                  <input className="searchBarHome" style={{ width: '10%' }} name="searchBar" type="text" placeholder="Search for any thing here" onChange={(e) => handleEvent(e)}
                    value={searchProp.searchText} />
                </div>
                <Link to='ourHomesSearch' duration={1000}>
                  <input value="search" className="btn" onClick={(e) => handelSubmit(e)} />
                </Link>
              </div>
            </section>

            {/* \\\\\\\\\\ End OF  SearchHome ////////// */}
          </Col>
        </Row>
      </Hero>



      {/* \\\\\\\\\\\\\\\\\\ Start OF FeaturedRooms ///////////////// */}

      <FeaturedRooms />

      {/* \\\\\\\\\\\\\\\\\\ End OF FeaturedRooms ///////////////// */}


      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ Start OF OurHomes ///////////////////////// */}
      <Title title="Our Apartments" />


      <Row id={'ourHomesSearch'}>
        <Col xs={6} sm={6} md={2} >


          {/* \\\\\\\\\\ Start OF SearchHomeCheckBox ////////// */}

          <div className="SearchHomeCheckBoxparent">
            <div className="SearchHomeCheckBox" >
              <h4 className='text-center'>Search</h4>
              {/* <h5>City: </h5> */}
              {govList.map((gov) => {

                return (
                  <>
                    <div className='row' key={gov.id} >
                      <input className='form-check col-1 ms-3' type="checkbox" id={gov.id} name="checkbox" value={gov.id} onChange={(e) => handleEvent(e)} />
                      <label className='col-2' htmlFor="cairo"> {gov.name} </label>


                    </div>

                  </>

                )
              })}




            </div>
          </div>

          {/* 
          <Row >
          <img src="https://i.imgur.com/KbRTwGV.jpg" style={{margin:'18%'}}  height={'25%'} alt='' />       
          </Row>
          */}


          {/* \\\\\\\\\\ End OF SearchHomeCheckBox ////////// */}

        </Col>
        <Col xs={12} sm={12} md={1}>
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
                      <PropertyHomeCard key={prop.id} props={prop} />
                    )
                  })}


                </Row>

              </Container>
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ End OF OurHomes ///////////////////////// */}

        </Col>

      </Row>




      <br />
      <Services />
      <Review />
      {/* < /> */}
      {/* <ClientFeedback /> */}
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


// Ad at line 213