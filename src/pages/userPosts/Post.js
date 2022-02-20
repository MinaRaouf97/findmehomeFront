import React, { useState } from 'react';

const Post = ({ id,  describiton, area, price, governorate ,removeFlat }) => {
  const [readMore, setReadMore] = useState(false);
  const image = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

  return (
    <div className="single-flat">
      <img src={image} alt={area} />
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