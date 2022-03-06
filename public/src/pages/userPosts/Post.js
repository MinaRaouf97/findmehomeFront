import React, { useState ,useEffect} from 'react';
import axios from 'axios';

// import img from "../../media/properties/8cd00221-5d96-4552-8543-633e6d317635.jpg"
const Post = ({ id, describiton, area, price, governorate ,removeFlat }) => {

  const [readMore, setReadMore] = useState(false);
  const [retrivedImgs,setRetrivedImgs] = useState([])

console.log(id)

  const image = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  
  // const i = require(img)

  // const fetchImage = async () => {
  //   const res = await fetch(imageUrl);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
  // };
  useEffect(()=>{
    const imagepath = "";
    const headers = {    
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
    axios.get(`http://127.0.0.1:8000/api/getimages/${id}`,{headers: headers})

    .then((res)=>{

      const firstImage = res.data[0]
      const imagepath = firstImage['img']
      setRetrivedImgs(imagepath)
  //     fetch(`http://localhost:3000${imagepath}`)
  // //                         vvvv
  //     .then(response => response.blob())
  //     .then(imageBlob => {
  //           // Then create a local URL for that image and print it 
  //           const imageObjectURL = URL.createObjectURL(imageBlob);
  //           console.log(imageObjectURL);
  //          
  //       });
      
    })
        
        
  },[])
  // useEffect(()=>{
    
  // },[retrivedImgs])
  console.log(retrivedImgs)
  return (
    <div className="single-flat">
      
   {/* <img src={`${assets}${img}`} />   */}
   {/* <img src={require(`${img}`)} /> */}

   {/* <img src={retrivedImgs} />   */}

      {/* <img src={`http://127.0.0.1:8000/${img}`} /> */}

     { retrivedImgs !== null ?  
      <img src={`http://127.0.0.1:8000${retrivedImgs}`}  alt={area} />
         :<img src={image} alt={area} />
      } 
     
      <footer>
        <div className="flat-info">
          <h3>{area}</h3>
         
              <h4>
                  {governorate}
              </h4>
          
          <h4 className="flat-price">${price}</h4>
        </div>
        <p>
          {readMore ? describiton : `${describiton.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeFlat(id)}>
          Delete Post
        </button>
      </footer>
    </div>
  );
};

export default Post;