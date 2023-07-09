import React from 'react'
import about from '../../assets/about.svg'
import Header from "../Header/Header"
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
    <Header/>
    <div className='aboutimg'>
      <img src={about} />
    </div>
    <Footer/>
    </>
  )
}

export default About