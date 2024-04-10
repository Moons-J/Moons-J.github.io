import React from "react"
import './HomeCard.css'

const HomeCard = (props) => {
  return (

    <div className='home-card basic-card flex-center align-column'>
      <h2>welcome</h2>
      <h3>to the Portfolio of Jonas Moons.</h3>
      <a href="/about-me">about me</a>
      <a href="/my-work">my work</a>
    </div>
  )
};

export default HomeCard;
