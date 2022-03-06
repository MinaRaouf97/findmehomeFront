import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";

import bg from "../resources/images/defaultBcg.jpeg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from "react-router-dom";


toast.configure()
function Addprop() {

    const history = useHistory()

    const [govList, setGovList] = useState([])
    const [propImgList, setPropImgList] = useState([])
    const inputRef = useRef()
    const AllGovApi = ' http://127.0.0.1:8000/api/allgovernorate'
    useEffect(() => {

        axios.get(AllGovApi)
            .then((res) => {
                setGovList(res.data)
            })



            .catch((err) => console.log(err))

    }, [])



    const [addPropForm, setAddPropForm] = useState({
        builidngNum: "",
        streetName: "",
        governorate: "",
        type: "",
        price: "",
        size: "",
        description: "",
        bedrooms: "",
        propNum: "",
        areaName: "",
        title:"",
        sharedWith:"",

    });

    const [addPropFormErrors, serAddPropErrors] = useState({
        builidngNumErr: "",
        streetNameErr: "",
        governorateErr: "",
        typeErr: "",
        priceErr: "",
        sizeErr: "",
        descriptionErr: null,
        bedroomsErr: "",
        propNumErr: "",
        titleErr:"",
        sharedWithErr:"",
        areaNameErr: "",

    });

    const handleEvent = (e) => {

        if (e.target.name === "buildNum") {
            setAddPropForm({
                ...addPropForm,
                builidngNum: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                builidngNumErr: e.target.value.length === 0 ? "This Field is required "
                    : e.target.value == 0 ? "building number must be not 0"
                        : null,


            });

        }
        else if (e.target.name === "title"){
            setAddPropForm({
                ...addPropForm,
                title: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                titleErr: e.target.value.length === 0 ? "title is required "
                    : null,


            });

        }
        else if (e.target.name === "sharedWith"){
            setAddPropForm({
                ...addPropForm,
                sharedWith: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                sharedWithErr: e.target.value.length === 0 ? "property number is required "
                    : null,


            });

        }
        else if (e.target.name === "propNum") {
            setAddPropForm({
                ...addPropForm,
                propNum: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                propNumErr: e.target.value.length === 0 ? "property number is required "
                    : null,


            });

        }
        else if (e.target.name === "streetName") {
            setAddPropForm({
                ...addPropForm,
                streetName: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                streetNameErr: e.target.value.length === 0 ? "This Field is required "

                    : null,


            });
        }
        else if (e.target.name === "area") {
            setAddPropForm({
                ...addPropForm,
                areaName: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                areaNameErr: e.target.value.length === 0 ? "Area name is required "

                    : null,


            });
        }
        else if (e.target.name === "governorate") {
            console.log(e.target.value)
            setAddPropForm({
                ...addPropForm,
                governorate: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                governorateErr: e.target.value.length === 0 ? "City of your property is required "

                    : null,


            });
        }
        else if (e.target.name === "type") {
            console.log(e.target.value)
            setAddPropForm({
                ...addPropForm,
                type: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                typeErr: e.target.value.length === 0 ? "type is required "

                    : null,


            });
        }
        else if (e.target.name === "price") {
            setAddPropForm({
                ...addPropForm,
                price: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                priceErr: e.target.value.length === 0 ? "This Field is required "
                    : e.target.value == 0 ? "price number must be not 0"
                        : null,


            });
        }
        else if (e.target.name === "size") {
            console.log(e.target.value)
            setAddPropForm({
                ...addPropForm,
                size: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                sizeErr: e.target.value.length === 0 ? "size of your property is required "

                    : null,


            });
        }
        else if (e.target.name === "bedrooms") {
            setAddPropForm({
                ...addPropForm,
                bedrooms: e.target.value,
            });



            serAddPropErrors({

                ...addPropFormErrors,
                bedroomsErr: e.target.value.length === 0 ? "This Field is required "
                    : null,


            });
        }
        else if (e.target.name === "description") {
            setAddPropForm({
                ...addPropForm,
                description: e.target.value,
            });

        }



    }

    const handleImageChange = (e) => {
        const tempArr = [];
       
        [...e.target.files].forEach(file => {
            console.log("file >>> ", file);
            tempArr.push({
                image: file
            });


        });
        console.log(e.target.files[0])

        console.log(e.target.files[1])
        console.log(tempArr)
        setPropImgList(tempArr)

    };

    const onSubmit = (e) => {
        const cachedHits = localStorage.getItem('user-info');
        const newcache = JSON.parse(cachedHits, null, -1);
        const jwtoken = newcache.jwt;
        const headers = {
            Authorization: `Bearer ${jwtoken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const data = {

            "seller": newcache.user.id,
            "governorate": addPropForm.governorate,
            "area": addPropForm.areaName,
            "street": addPropForm.streetName,
            "building_number": addPropForm.builidngNum,
            "propert_number": addPropForm.propNum,
            "price": addPropForm.price,
            "describiton": addPropForm.description,
            "size": addPropForm.size,
            "type":addPropForm.type,
            "sharedWith":addPropForm.sharedWith,
            "bedrooms":addPropForm.bedrooms,
            "title":addPropForm.title,
        }
        e.preventDefault()
        if (addPropFormErrors.builidngNumErr != null || addPropFormErrors.streetNameErr != null || addPropFormErrors.governorateErr != null || addPropFormErrors.typeErr != null || addPropFormErrors.priceErr != null || addPropFormErrors.sizeErr != null || addPropFormErrors.bedroomsErr != null) {
            console.log("there is somthing wron with your data ")
            toast.error('You entered Wrong data Try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        else {

            let form_data = new FormData();


            axios.post("http://127.0.0.1:8000/api/property", data, { headers: headers })
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        console.log(res.data.id)
                        console.log(form_data)


                        form_data.append('property', res.data.id)
                        for (let i = 0; i < propImgList.length; i++) {
                            form_data.append('img', propImgList[i].image, propImgList[i].image.name);
                            axios.post("http://127.0.0.1:8000/api/addimages", form_data, { headers: headers })
                                .then((res) => {
                                    console.log(res)
                                    if (res.status === 200 || res.status === 201) {
                                        toast.success('🦄 Wow so easy!', {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });


                                    }
                                })
                                .then((err) => console.log(err))

                        }

                        history.push('/')


                    }

                    else {
                        toast.error('You entered Wrong data Try again', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })

                    }

                })
                .catch(function (error) {
                    toast.error('You entered Wrong data Try again', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                });
        }

    }


    return (

        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div style={{ backgroundImage: `url(${bg})` }}>
                <Container  >

                    <h1 className="shadow-sm text-primary p-3 text-center rounded">Add Property</h1>
                    <Row >
                        <Col lg={6} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" style={{ backgroundColor: "white", opacity: 0.85 }}>
                            <Form.Group >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" maxLength="30" name="title" placeholder="Enter a conclusion title for your property " value={addPropForm.title} onChange={(e) => handleEvent(e)} />

                                <div>
                                    <small className="text-danger">{addPropFormErrors.titleErr}</small>
                                </div>
                                <br />
                            </Form.Group>
                            <Row>
                                <div className="col-5 col-md-6 col-sm-12">
                                    <Form.Group >
                                        <Form.Label>Building Number</Form.Label>
                                        <Form.Control type="number" name="buildNum" min={0} placeholder="Enter Building Number " value={addPropForm.builidngNum} onChange={(e) => handleEvent(e)} />

                                    </Form.Group>
                                    <div>
                                        <small className="text-danger">{addPropFormErrors.builidngNumErr}</small>
                                    </div>
                                    <br />
                                </div>

                                <div className="col-5 col-md-6 col-sm-12">
                                    <Form.Group >
                                        <Form.Label>Property Number</Form.Label>
                                        <Form.Control type="number" name="propNum" min={0} placeholder="Enter property Number " value={addPropForm.propNum} onChange={(e) => handleEvent(e)} />

                                    </Form.Group>
                                    <div>
                                        <small className="text-danger">{addPropFormErrors.propNumErr}</small>
                                    </div>
                                    <br />
                                </div>

                            </Row>

                            <Form.Group >
                                <Form.Label>Street</Form.Label>
                                <Form.Control type="text" name="streetName" placeholder="Enter Street Name " value={addPropForm.streetName} onChange={(e) => handleEvent(e)} />
                            </Form.Group>
                            <div>
                                <small className="text-danger">{addPropFormErrors.streetNameErr}</small>
                            </div>
                            <br />
                            <Form.Group >
                                <Form.Label>Area name</Form.Label>
                                <Form.Control type="text" name="area" placeholder="Enter Area Name " value={addPropForm.areaName} onChange={(e) => handleEvent(e)} />
                            </Form.Group>
                            <div>
                                <small className="text-danger">{addPropFormErrors.areaNameErr}</small>
                            </div>
                            <br />

                            <Row>

                                <Form.Group controlId="formBasicSelect" className="col-5 col-md-6 col-sm-12">
                                    <Form.Label>Governorate</Form.Label>
                                    <Form.Control className="text-muted" as="select" name="governorate" value={addPropForm.governorate} onChange={(e) => handleEvent(e)} >
                                        <option value="" disabled hidden selected>Select the Governorate</option>

                                        {govList.map((gov) => {
                                            return (
                                                <option key={gov.id} value={gov.id}>{gov.name}</option>
                                            )
                                        }
                                        )
                                        }

                                    </Form.Control>
                                    <div>
                                        <small className="text-danger">{addPropFormErrors.governorateErr}</small>
                                    </div>

                                </Form.Group>
                                <br />
                                <Form.Group controlId="formBasicSelect" className="col-5 col-md-6 col-sm-12">
                                    <Form.Label>Property Type</Form.Label>
                                    <Form.Control className="text-muted" as="select" name="type" value={addPropForm.type} onChange={(e) => handleEvent(e)} >

                                        <option value="" disabled hidden selected>Select Property Type</option>
                                        <option value="room">Room</option>
                                        <option value="flat">Flat</option>
                                        <option value="house">House</option>
                                        <option value="villa">Villa</option>

                                    </Form.Control>

                                </Form.Group>

                            </Row>
                            <div>
                                <small className="text-danger">{addPropFormErrors.typeErr}</small>
                            </div>


                            <br />
                            <Row>
                                <div className="col-5 col-md-6 col-sm-12">
                                    <Form.Group >
                                        <Form.Label>Size</Form.Label>
                                        <Form.Control type="text" name="size" placeholder="Property Size " value={addPropForm.size} onChange={(e) => handleEvent(e)} />
                                    </Form.Group>
                                    <div>
                                        <small className="text-danger">{addPropFormErrors.sizeErr}</small>
                                    </div>
                                </div>


                                <div className="col-5 col-md-6 col-sm-12">
                                    <Form.Group >
                                        <Form.Label>Bedrooms</Form.Label>
                                        <Form.Control type="number" name="bedrooms" min={0} placeholder="Number of Bedrooms" value={addPropForm.bedrooms} onChange={(e) => handleEvent(e)} />
                                    </Form.Group>
                                    <div>
                                        <small className="text-danger">{addPropFormErrors.bedroomsErr}</small>
                                    </div>

                                </div>
                            </Row>
                            <br />

                            <Row>
                                <div className="col-5 col-md-6 col-sm-12" >
                                    <Form.Group >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number" name="price" min={0} placeholder="Property Price " value={addPropForm.price} onChange={(e) => handleEvent(e)} />
                                    </Form.Group>
                                    <div>
                                        <small className="text-danger">{addPropFormErrors.priceErr}</small>
                                    </div>
                                </div>
                                <div className="col-5 col-md-6 col-sm-12" >
                                    <Form.Group >
                                        <Form.Label>Shared with </Form.Label>
                                        <Form.Control type="number" name="sharedWith" min={0} placeholder="Shared With how many persons ? " value={addPropForm.sharedWith} onChange={(e) => handleEvent(e)} />
                                    </Form.Group>
                                    <div>
                                        <small className="text-danger">{addPropFormErrors.sharedWithErr}</small>
                                    </div>
                                </div>
                            </Row>
                            <br />


                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" name="description" rows={3} placeholder='write a description ' value={addPropForm.description} onChange={(e) => handleEvent(e)} />
                            </Form.Group>
                            <div>
                                <small className="text-danger">{addPropFormErrors.descriptionErr}</small>
                            </div>
                            <br />

                            <input type="file" name="propImages" id="image"
                                accept="image/png, image/jpeg" multiple className="inputfile primary btn-primary" onChange={(e) => handleImageChange(e)} />
                            <br />
                            <br />
                            <Button variant="primary btn-block" onClick={onSubmit}>
                                Add New Property
                            </Button>

                        </Col>
                    </Row>

                </Container>
            </div>

        </>
    )




}


export default Addprop;
