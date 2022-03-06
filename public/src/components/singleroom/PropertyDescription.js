import React, { useState ,useEffect} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col} from 'react-bootstrap';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBed } from 'react-icons/fa'
import { FcMoneyTransfer } from "react-icons/fc";
import axios from "axios";
import { useParams,Link } from 'react-router-dom';





export default function PropertyDescription() {


    const[userData,setUserData]=useState({
        name:"",
        phone:"",
        image:"",
        id:""
      })
    
const params = useParams()

const [propInfo,setPropInfo] = useState([])
console.log(params)
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
const PropApi = `http://127.0.0.1:8000/api/propinfo/${params.singleroom}`

const reqPropApi= axios.get(PropApi,{headers:headers});

    


useEffect(()=>{

    axios.all([reqPropApi]).then(axios.spread((...responses)=>{
        console.log(responses[0].data)
       
        setPropInfo(responses[0].data)
        axios.get(`http://127.0.0.1:8000/api/finduser?name=${responses[0].data['seller']}`)
          .then((res)=>{
            // console.log(res.data)
            // console.log(propInfo.seller)
            setUserData({
              name:res.data['name'],
              phone:res.data['phonenum'],
              image:`http://127.0.0.1:8000${res.data['profileimg']}`,
              id:res.data['id']
            })
          })
          .catch((err)=>{
            console.log(err)
          })
        


    }))
    .catch((err)=>console.log(err))
 
},[])

useEffect(()=>{

},[propInfo])


console.log(propInfo['size'])

    return (
        <>



            <Row className=" border-top justify-content-center mt-4 p-4 ">

                <Col sm={3} xs={3} md={3} style={{ marginLeft: '-5%' }}>
                    <span >    <FcMoneyTransfer size={90} />     <h5><strong>{propInfo.price} </strong>/month</h5>     </span>
                </Col>


                <Col sm={3} xs={3} md={2}>
                    <span>     <FaBed size={50} style={{ fill: 'MidnightBlue' }} />   <h2>{propInfo.bedrooms}</h2>        </span>
                </Col>


                <Col sm={3} xs={3} md={2}>
                    <span>     <BsFillPeopleFill size={40} style={{ fill: 'MidnightBlue' }} />   <h2>{propInfo.sharedWith}</h2>        </span>
                </Col>

            </Row>




<br/>




            <Row className="  justify-content-center  p-5 ">

                <Col sm={12} xs={12} md={8} >


                    <div id='Description' >
                        <h3 style={{fontWeight:'bolder'}}>Home Description</h3>
                        <Tabs defaultActiveKey="warning" >
                            <Tab eventKey="first" title="Home Overview" className='p-2' style={{ backgroundColor: '#f8f8ff' }}>
                                <dl>
                                    <dt>Description:</dt>
                                    <dd> {propInfo.describiton}
                                    </dd>
                                    <dt>Type:</dt>
                                    <li>{propInfo.type}</li>
                                    <dt>Features:</dt>
                                    <li>{propInfo.size} meter</li>
                                    <li>Shared with : {propInfo.sharedWith} persons</li>
                                    
                                </dl>
                            </Tab>
                            <Tab eventKey="second" title="Location" className='p-2' style={{ backgroundColor: '#f8f8ff' }}>
                                <dl>
                                    <dt>Location:</dt>
                                    <li>Street: {propInfo.street}</li>
                                    <li>Area: {propInfo.area}</li>
                                    <li>Building number:  {propInfo.building_number}</li>
                                    <li>Property number: {propInfo.propert_number}</li>
                                    <li>City: {propInfo.governorate}</li>
                                </dl>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>


                <Col sm={6} xs={6} md={4}>

                    <div className="descriptionCard border" style={{textAlign:'center'}} >
                        <img className="card-img-top" src={userData['image']} alt="" />
                        <div className="card-body">
                            <h3 className="card-title mb-4">Contact The Seller</h3>
                            <Link to={`/user/${userData['name']}`} className="btn btn-dark"  >Request Tour</Link>
                            <br/>
                            <h5 className="card-title mb-4">Phone number: {userData['phone']}</h5>

                            <a href="#" className="btn btn-outline-dark m-2" >Message</a>
                        </div>
                    </div>

                </Col>

            </Row>







        </>
    );
}


// <p className="card-text"><FormControl as="textarea" /></p>





