import React, { useState, useEffect } from 'react'
import Posts from './Posts'
import {Link} from "react-router-dom";
import axios from "axios";
import './userPosts.css'
import { Card } from 'react-bootstrap';


const UserPosts = () => {

//   const [flats, setFlats] = useState([]);
  const cachedHits = localStorage.getItem('user-info');
  const newcache = JSON.parse(cachedHits, null, -1);
  const jwtoken = newcache.jwt;
  console.log(newcache.user.name)
    const headers = {
      //'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtoken}`,
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }

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
        })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <main>
    <Card className='review bg-light'>
      <div className='img-container'>
        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yrd8qyMAeTKfxPH00Az2BqE561qnoB5Ulw&usqp=CAU`} alt={newcache.user.name} className='person-img' />
        
      </div>
      <h3 className='author'><h4>author:</h4>{newcache.user.name}</h3>
      
    </Card>
    <Posts flats={flats} removeFlat={removeFlat} />
    </main>
  )
}

export default UserPosts
