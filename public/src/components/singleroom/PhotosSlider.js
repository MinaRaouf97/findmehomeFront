import React, { useState, useEffect } from "react";
// import { Carousel } from 'react-carousel-minimal'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'




export default function PhotosSlider() {
    const data = [
        {
            image: "https://d2yht872mhrlra.cloudfront.net/property/117896/property_xUvh_1DAZc_JayKOwpD-tmhRzg1bpfVd.png",
            // caption: "Living Room"
        },
        {
            image: "https://d2yht872mhrlra.cloudfront.net/property/117896/property_obCJ3yfclDioE6F63yr_wtoW7BPcRA6C.png",
            // caption: "Kitchen"
        },
        {
            image: "https://d2yht872mhrlra.cloudfront.net/property/117896/property_xXR1co_N6phJt9ezMkv5q7HkpWjeYwmu.png",
            // caption: "Bedroom"
        },
        {
            image: "https://d2yht872mhrlra.cloudfront.net/property/117896/property_iemtADVSYmLeDtFkoREY2RK6yNFn2ISO.png",
            // caption: "Bathroom"
        },

    ];


    const params = useParams()
    const [retrivedImgs, setRetrivedImgs] = useState(data)

    console.log(params.singleroom)


    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '15px',
        fontWeight: 'bold',
    }

    useEffect(() => {
        const imagepath = "";
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(`http://127.0.0.1:8000/api/getimages/${params.singleroom}`, { headers: headers })

            .then((res) => {
                let arr = []
                let curr = ""
                for (let i = 0; i < res.data.length; i++) {
                    curr = res.data[i]
                    // console.log(curr['img'])
                    arr.push({ image: `http://127.0.0.1:8000${curr['img']}` })



                }
                setRetrivedImgs(arr)
                console.log(arr)

                //   const imagepath = firstImage['img']
                //   setRetrivedImgs(imagepath)


            })
            .catch((err) => console.log(err))



    }, [])
    console.log(data)
    console.log(retrivedImgs)

    return (
        <div className="Container PhotosSlider">
            <div style={{ textAlign: "center" }}>
                {/* <h2>Title</h2> */}
                <div style={{ padding: "0 20px" }}>

                    <Carousel variant="dark" className="my-5">
                        {retrivedImgs.map((image,index) => {


                            return (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={image['image']}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })}

                    </Carousel>
                    {/* <Carousel
                      
                        data={retrivedImgs}
                        
                   
                        automatic={false}
                        width="1500px"
                        height="500px"
                        radius="15px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            display: "center",
                            textAlign: "center",
                            maxWidth: "1000px",
                            maxHeight: "500px",
                            margin: "30px auto",

                        }}
                    /> */}
                </div>
            </div>
            <br /><br /><br />
        </div>

    );
}

