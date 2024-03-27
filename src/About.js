import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext'


const About = () => {

  const {myName} = useProductContext();

  const data = {
    name:"Rohit Store",
  }

  return (
    <div>
    {myName}
      <HeroSection myData={data}/>
    </div>
  )
}

export default About