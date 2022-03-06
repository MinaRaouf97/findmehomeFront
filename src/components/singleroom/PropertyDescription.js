import React, { useState, useEffect } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col } from 'react-bootstrap';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';





export default function PropertyDescription() {


    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        image: "",
        id: ""
    })

    const params = useParams()

    const [propInfo, setPropInfo] = useState([])
    console.log(params)
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const PropApi = `http://127.0.0.1:8000/api/propinfo/${params.singleroom}`

    const reqPropApi = axios.get(PropApi, { headers: headers });




    useEffect(() => {

        axios.all([reqPropApi]).then(axios.spread((...responses) => {
            console.log(responses[0].data)

            setPropInfo(responses[0].data)
            axios.get(`http://127.0.0.1:8000/api/finduser?name=${responses[0].data['seller']}`)
                .then((res) => {
                    // console.log(res.data)
                    // console.log(propInfo.seller)
                    setUserData({
                        name: res.data['name'],
                        phone: res.data['phonenum'],
                        image: `http://127.0.0.1:8000${res.data['profileimg']}`,
                        id: res.data['id']
                    })
                })
                .catch((err) => {
                    console.log(err)
                })



        }))
            .catch((err) => console.log(err))

    }, [])

    useEffect(() => {

    }, [propInfo])


    console.log(propInfo['size'])

    return (
        <>

            <Row className=" border-top justify-content-center m-3 p-3">

                <Col sm={12} xs={12} md={8}>

                    <Row className='roomicons'>
                        <Col sm={3} xs={3} md={3} className='pl-5'>
                            <span >   <img src="https://img.icons8.com/plasticine/100/000000/money.png" height={'50px'} />   <h5 className='roomiconsmoney'><strong>{propInfo.price} </strong>LE/month</h5>     </span>
                        </Col>

                        <Col sm={3} xs={3} md={2} className='pl-5'>
                            <span>    <img src="https://img.icons8.com/color/48/000000/bed.png" height={'50px'} />  <h3 className='roomicons2'>{propInfo.bedrooms} </h3>    </span>
                        </Col>

                        <Col sm={3} xs={3} md={2} className='pl-5'>
                            <span>    <img src="https://img.icons8.com/plasticine/100/000000/crowd.png" height={'52px'} />  <h3 className='roomicons2'>{propInfo.sharedWith}</h3>     </span>
                        </Col>
                    </Row>


                    <Row>
                        <div id='Description' >
                            <h3 style={{ fontWeight: 'bolder' }}>Home Description</h3>
                            <Tabs defaultActiveKey="warning" >
                                <Tab eventKey="first" title="Home Overview" className='p-2 tab-pane active descriptionsingleroom ' style={{ backgroundColor: '#f8f8ff', 'lineHeight': '1.6' }}>
                                    <dl>
                                        <dt>Description:</dt>
                                        <dd> {propInfo.describiton}   </dd>

                                        <dt>Type:</dt>
                                        <span> <li>{propInfo.type}</li>  </span>


                                        <dt>Features:</dt>
                                        <span> <li >{propInfo.size} meter</li>  </span>
                                        <span> <li>Shared with : {propInfo.sharedWith} persons</li>  </span>
                                    </dl>
                                </Tab>

                                <Tab eventKey="second" title="Location" className='p-2 descriptionsingleroom' style={{ backgroundColor: '#f8f8ff', 'lineHeight': '1.8' }}>
                                    <dl >
                                        <dt>Location:</dt>
                                        <span >  <li>City: {propInfo.governorate}</li>  </span>
                                        <span >  <li>Area: {propInfo.area}</li>  </span>
                                        <span >  <li>Street: {propInfo.street}</li>  </span>
                                        <span >  <li>Building number:  {propInfo.building_number}</li>  </span>
                                        <span >  <li>Property number: {propInfo.propert_number}</li>  </span>
                                    </dl>
                                </Tab>

                            </Tabs>
                        </div>



                    </Row>
                </Col>


                <Col sm={6} xs={6} md={4}>

                    <div className="descriptionCard border" style={{ textAlign: 'center' }} >
                        <img className="card-img-top" src={userData['image']} alt="" />
                        <div className="card-body">
                            <h3 className="card-title mb-4">Contact The Seller</h3>
                            {/* <Link to={`/user/${userData['name']}`} className="btn btn-info"  >Message</Link> */}
                            <br />
                            <h5 className="card-title mb-4">Phone number: {userData['phone']}</h5>

                            {/* <a href="#" className="btn btn-outline-su m-2" >Message</a> */}
                        </div>
                    </div>

                </Col>

            </Row>

        </>
    );
}






