import React from "react";
import styled from 'styled-components'
import  PageHero  from '../components/PageHero'
import  Contact  from '../components/Contact'
import aboutImg from '../resources/images/abouthome.jpg'

const About = () => {
  return (
    <main>
    {/* <PageHero title='about' /> */}
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt='nice home' />
      <article>
        <div className='title'>
          <h2>Our Story</h2>
          <div className='underline'></div>
        </div>
        <p>
        Renting a home is one of the challanges that most people will ever make,at FINDME HOME®  you will find a different experience that will help you get into your dream home. the market expert and the negotiating tiger all wrapped up into one place. Here you will stay updated with the rapidly changing market dynamics and get all of the new apartments in the market.
        </p>
      </article>
    </Wrapper>
    <Contact />
  
    </main>
  
  );
};

const Wrapper = styled.section`
  margin-bottom:2rem;
  display: grid;
  margin-top:2rem;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: hsl(210, 22%, 49%);
  }
  .title {
    text-align: left;
    font-weight: bold;
  }
  .underline {
    margin-left: 0;
    background:#5902EC;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default About;



