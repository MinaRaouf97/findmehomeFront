import React from 'react';
import { Col } from 'react-bootstrap';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBed } from 'react-icons/fa'
import { FcMoneyTransfer } from "react-icons/fc"

export default function PropertyInfoIcons() {

    return (

        <div id='PropertyInfo'>

            <div className="container center border-top">
                <div className="row justify-content-center mt-4 ">


                    <Col sm={3} xs={3} md={3}  style={{ marginLeft: '-5%' }}>
                        <span >    <FcMoneyTransfer size={90} />     <h5><strong>500 LE </strong>/month</h5>     </span>
                    </Col>




                    <Col sm={3} xs={3} md={2}>
                        <span>     <FaBed size={50} style={{ fill: 'MidnightBlue' }} />   <h2>5</h2>        </span>
                    </Col>

                    <Col sm={3} xs={3} md={2}>
                        <span>     <BsFillPeopleFill size={40} style={{ fill: 'MidnightBlue' }} />   <h2>4</h2>        </span>
                    </Col>

                </div>
            </div>


        </div>


    )

}




