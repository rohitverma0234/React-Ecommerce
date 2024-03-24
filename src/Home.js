import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'

const Home = () => {
  const data = {
    name:"Rohit"
  }

  return (
    <Wrapper className='test'>
    <HeroSection myData={data}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`

export default Home