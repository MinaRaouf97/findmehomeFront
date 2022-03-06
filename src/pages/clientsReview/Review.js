import React,{useState,useEffect} from 'react'
import './clients.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteRight , faChevronLeft , faChevronRight, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from './data'

library.add(faQuoteRight , faChevronLeft , faChevronRight);
            
     
const Review = () => {
    const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="sections">
      <div className="titles">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
         

          return (
            <section className='sect'>

            <article className={position}  key={id}>
            <div className='d-flex justify-content-center'>
              <img src={image} alt={name} className="person-img" />
            </div>
              <h4>{name}</h4>
              <p className="titles">{title}</p>
              <p className="texts">{quote}</p>
              <FontAwesomeIcon icon='fas faQuoteRight' className='icons'/>

            </article>
            </section>
          );
        })}
        <button className="prevs" onClick={() => setIndex(index - 1)}>
        <FontAwesomeIcon icon="fas fa-chevron-left" />
          {/* <FiChevronLeft /> */}
        </button>
        <button className="nexts" onClick={() => setIndex(index + 1)}>
        <FontAwesomeIcon icon="fas fa-chevron-right"  />
          {/* <FiChevronRight /> */}
        </button>
      </div>
    </section>
  );
  };
  
  export default Review;