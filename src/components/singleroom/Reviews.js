import React from 'react';
import { Col, Row } from 'react-bootstrap';


export default function Reviews() {

    return (
        <div className='SingleRoomReview'>
            <h3>Reviews</h3>

            <Row >


                <div className="oneReview card m-2 ">


                    <a><img src="https://i.imgur.com/C4egmYM.jpg" className="rounded-circle" /> Ahmed Ali</a>
                    <br />
                    <div className="comment">
                        <p > Luxury apartments with Great Parteners! </p>
                    </div>

                    <br />
                    <p className="days"> 3 days ago</p>


                </div>


                <div className="oneReview card m-2 ">

                    <a><img src="https://i.imgur.com/9HHCKSc.jpeg" className="rounded-circle" /> User </a>
                    <br />
                        <input placeholder='Add New Review' />
                        <button className='btn btn-outline-dark'>Submit</button>



                </div>





            </Row>


        </div>
    )
}

// className="d-flex justify-content-between align-items-center"











// <div className="card p-3">
// <div className="d-flex justify-content-between align-items-center">
//     <div className="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2" /> <span><small className="font-weight-bold text-primary">james_olesenn</small>
//         <br />
//         <small className="font-weight-bold">Hmm, This poster looks cool</small></span> </div> <small>2 days ago</small>

// </div>
// <div className="action d-flex justify-content-between mt-2 align-items-center">
//     <div className="icons align-items-center"> <i className="fa fa-star text-warning"></i> <i className="fa fa-check-circle-o check-icon"></i> </div>
// </div>
// </div>