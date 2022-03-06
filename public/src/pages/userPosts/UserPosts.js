import React, { useState, useEffect } from 'react'
import Posts from './Posts'
import axios from "axios";
import './userPosts.css'
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";



const UserPosts = () => {

  const cachedHits = localStorage.getItem('user-info');
  const newcache = JSON.parse(cachedHits, null, -1);
  const jwtoken = newcache.jwt;
  console.log(newcache.user.name)
    const headers = {
      Authorization: `Bearer ${jwtoken}`,
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  

  const[userData,setUserData]=useState({
    name:"",
    phone:"",
    image:""
  })

  const [flats, setFlats] = useState([])

  const removeFlat = (id) => {
    const newFlat = flats.filter((flat) => flat.id !== id)
    setFlats(newFlat)
  }

  useEffect(() => {
    console.log(headers)
    axios
      .get(
        `http://localhost:8000/api/allproperty?user=${newcache.user.name}`,
        {headers: headers}
      )
      .then((res) => {
          setFlats(res.data)
          console.log(res.data);
          axios.get(`http://127.0.0.1:8000/api/finduser?name=${newcache.user.name}`)
          .then((res)=>{
            console.log(res.data)
            setUserData({
              name:res.data['name'],
              phone:res.data['phonenum'],
              image:`http://127.0.0.1:8000${res.data['profileimg']}`
            })
          })
          .catch((err)=>{
            console.log(err)
          })
        })
      .catch((err) => console.log(err));



  }, []);


  return (
    <main className='maaain'>
    <Card className='reviews bg-light'>

      <div className='img-container'>
        <img src={userData['image']} alt={newcache.user.name} className='person-img' />
        <Link to="/updateProfile" className="btn btn-block btn-dark">Update personal Info</Link>
      </div>
      <br/>
      <br/>
      <h4 className='authors'><h3>author:</h3>{newcache.user.name}</h4>
      <h4 className='phoen'><h3>phone:</h3>{userData['phone']}</h4>


    </Card>
    <Posts flats={flats} removeFlat={removeFlat} />
    </main>
  )
}

export default UserPosts
