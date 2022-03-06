import React from 'react';
import Post from './Post';


const Posts = ({ flats, removeFlat }) => {

  return (
    <section>
      <div className="title">
        <h2>My Posts</h2>
        <div className="underline"></div>
      </div>
      <div>
        
        
        {flats.map((flat) => {
         
              return <Post key={flat.id} {...flat} removeFlat={removeFlat} />;

        })}
      </div>
    </section>
  );
};

export default Posts;