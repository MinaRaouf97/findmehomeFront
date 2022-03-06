import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #F2C9E1;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: #5902EC;
  a {
    color: #fff;
    padding: 0.5rem;
    transition: all 0.3s linear;
  }
  a:hover {
    color: #5902EC;
  }
`

export default PageHero