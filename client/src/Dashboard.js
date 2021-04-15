import React from 'react'
import HeaderImage from './Assets/header.png';
import TitleImage from './Assets/title.png'
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <div>
        <img src={HeaderImage} alt='Clip art rendering of a modern office' className="header" />
  </div>
      <div className="text-center"><img src={TitleImage} alt='BootNetwork' /></div>
      
      <h2>There's strength in alumni.</h2>
    </Container>
  )
}

export default Dashboard
