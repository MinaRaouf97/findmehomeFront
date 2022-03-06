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
            <h3>Thanks for joining our newsletter !</h3>
            </div>
        )
        
    }
  return (

  <Wrapperz className='bg-light'>
          <div className='section-centerz'>
              <h2>Join our Newsletter and get 10% off</h2>
              <div className='contentz'>
                  <p>
                  Do you want to get updates about the new properties? Want to constantly stay updated with the last news in the market? Then Subscribe today and get rewarded for your love of real estate.
                  </p>
                  <form onSubmit={handleSubmit} className='contact-formz'>
                  
                      <input type='email' id='email' className='form-inputz' name='email' placeholder='Enter your Email' required/>
                            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
                      
                      <button type='submit' className='submit-btnz' disabled={state.submitting} >
                        Subscribe
                      </button>
                  </form>
              </div>
          </div>
      </Wrapperz>
  )
}

const Wrapperz = styled.section`
  padding: 2rem 0;

  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: hsl(210, 22%, 49%);
  }
  .contact-formz {
    width: 50vw;
    /* padding-left: 2rem; */
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-inputz,
  .submit-btnz {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #222;
  }
  .form-inputz {
    border-right: none;
    color: hsl(209, 34%, 30%);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .submit-btnz {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .form-inputz::placeholder {
    color: #222;
    text-transform: capitalize;
  }
  .submit-btnz {
    background: #823afe;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    color: #fff;
  }
  .submit-btnz:hover {
    color: #222;
    background: #B667F1;
  }
  @media (min-width: 992px) {
    .contentz {
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


.section-centerz {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section-centerz {
    width: 95vw;
  }
}
.text-center {
  text-align: center;
}
`

export default Contact
