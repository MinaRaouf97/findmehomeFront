import React, { useState, useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




toast.configure()


export default function Reviews() {
    const [comment, setComment] = useState()
    const [commentList, setCommentList] = useState([])

    const params = useParams()



    const handleEvent = (e) => {
        if (e.target.name === "newComment") {
            setComment(e.target.value);
        }
    }
    const onSubmitComment = (e) => {

        const cachedHits = localStorage.getItem('user-info');
        const newcache = JSON.parse(cachedHits, null, -1);
        const jwtoken = newcache.jwt;
        const headers = {
            Authorization: `Bearer ${jwtoken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const data = {
            "commenter": newcache.user.id,
            "content": comment,
            "propty": params.singleroom
        }
        axios.post("http://127.0.0.1:8000/api/comment", data, { headers: headers })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    toast.success('YOu added your review', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    axios.get(`http://localhost:8000/api/comment?prop=${params.singleroom}`,{headers:headers})
                        .then((res) => {
                            console.log(res.data)
                            setCommentList(res.data)
                        })
                        .catch((err) => {
                            console.log(err)

                        })

                }
                else {
                    toast.error('You must be logged in', {
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
            .catch((err) => console.log(err))


    }
    useEffect(() => {
        const cachedHits = localStorage.getItem('user-info');
        const newcache = JSON.parse(cachedHits, null, -1);
        const jwtoken = newcache.jwt;
        const headers = {
            Authorization: `Bearer ${jwtoken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        axios.get(`http://localhost:8000/api/comment?prop=${params.singleroom}`,{headers:headers})
            .then((res) => {
                console.log(res.data)
                setCommentList(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    useEffect(()=>{},[commentList])


    return (
        <div className='SingleRoomReview'>
            <h3>Reviews</h3>

            <Row >


                <div className="oneReview card m-2 ">
                    <a><img src="https://i.imgur.com/9HHCKSc.jpeg" className="rounded-circle" /> User </a>
                    <br />
                    <input placeholder='Add New Review' name="newComment" value={comment} onChange={(e) => handleEvent(e)} />
                    <button className='btn btn-outline-dark' onClick={onSubmitComment}>Submit</button>
                </div>

                {commentList.map((comment) => {
                    return (
                        <div className="oneReview card m-2 " key={comment.id}>
                            <a><img src="https://i.imgur.com/C4egmYM.jpg" className="rounded-circle" />{comment.commenter_name}</a>
                            <br />
                            <div className="comment">
                                <p >{comment.content} </p>
                            </div>

                            <br />
                            <p className="days"> 3 days ago</p>
                        </div>
                    )
                })}







            </Row>


        </div>
    )
}



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