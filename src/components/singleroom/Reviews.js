import React from 'react';
import { Col } from 'react-bootstrap';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBed } from 'react-icons/fa'
import { FcMoneyTransfer } from "react-icons/fc"

export default function Reviews() {

    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-0 border" style={{backgroundColor: "#f0f2f5"}}>
                        <div className="card-body p-4">
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="addANote"
                                    className="form-control"
                                    placeholder="Type comment..."
                                />
                                <label className="form-label" for="addANote">+ Add a note</label>
                            </div>

                            <div className="card mb-4">
                                <div className="card-body">
                                    <p>Type your note, and hit enter to add it</p>

                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                                                alt="avatar"
                                                width="25"
                                                height="25"
                                            />
                                            <p className="small mb-0 ms-2">Martha</p>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <p className="small text-muted mb-0">Upvote?</p>
                                            <i
                                                className="far fa-thumbs-up mx-2 fa-xs text-black"
                                                style="margin-top: -0.16rem;"
                                            ></i>
                                            <p className="small text-muted mb-0">3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="card mb-4">
                                <div className="card-body">
                                    <p>Type your note, and hit enter to add it</p>

                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                                                alt="avatar"
                                                width="25"
                                                height="25"
                                            />
                                            <p className="small mb-0 ms-2">Mary Kate</p>
                                        </div>
                                        <div className="d-flex flex-row align-items-center text-primary">
                                            <p className="small mb-0">Upvoted</p>
                                            <i className="fas fa-thumbs-up mx-2 fa-xs" style="margin-top: -0.16rem;"></i>
                                            <p className="small mb-0">2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}