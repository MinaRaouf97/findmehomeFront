import React from 'react'
import { Carousel } from 'react-carousel-minimal'

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
            image: "https://d2yht872mhrlra.cloudfront.net/property/117896/property_yKzKB57HMh6uiezgSnpvbI98kY2SCo_e.png",
            // caption: "Dressing Room"
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

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '15px',
        fontWeight: 'bold',
    }
    return (
        <div className="Container PhotosSlider">
            <div style={{ textAlign: "center"  }}>
                {/* <h2>Title</h2> */}
                <div style={{ padding: "0 20px" }}>
                    <Carousel
                        data={data}
                        // time={2000}
                        width="1500px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="15px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        interval={false}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="white"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "1000px",
                            maxHeight: "500px",
                            margin: "30px auto",
                        }}
                    />
                </div>
            </div>
            <br/><br/><br/>
        </div>
        
    );
}

