// npm install @formspree/react 
// npm install --save styled-components

import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mrgjqonz");
    if (state.succeeded) {
        return (
            <div className='d-flex justify-content-center'>
            <h3>Thanks for joining!</h3>
            </div>
        )
        
    }
  return (

  <Wrapper>
          <div className='section-center'>
              <h2>Join our newsletter and get 25% off</h2>
              <div className='content'>
                  <p>
                  Do you love real estate? Want to constantly stay inspired and be surrounded by millions of like-minded investors? Then Subscribe today and get rewarded for your love of real estate and invest your money with us.
                  </p>
                  <form onSubmit={handleSubmit} className='contact-form'>
                  
                      <input type='email' id='email' className='form-input' name='email' placeholder='Enter your Email' required/>
                            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
                      
                      <button type='submit' className='submit-btn' disabled={state.submitting} >
                        Subscribe
                      </button>
                  </form>
              </div>
          </div>
      </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1rem 0;
  margin: 3.5rem ;

  h3 {
    text-transform: none;
  }
  p {
    /* line-height: 2; */
    max-width: 45em;
    color: hsl(210, 22%, 49%);
  }
  .contact-form {
    width: 50vw;
    padding-left: 5%;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #222;
  }
  .form-input {
    border-right: none;
    color: hsl(209, 34%, 30%);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .submit-btn {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .form-input::placeholder {
    color: #222;
    text-transform: capitalize;
  }
  .submit-btn {
    background: #823afe;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    color: #fff;
  }
  .submit-btn:hover {
    color: #222;
    background: #B667F1;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
