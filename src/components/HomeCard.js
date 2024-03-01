import React from "react"
import './HomeCard.css'

const HomeCard = (props) => {
  return (
    <div className='home-card basic-card'>
      <h3>Welcome to the Portfolio of Jonas Moons.</h3>
      <button>about me</button>
      <button>my work</button>
    </div>
  )
};

export default HomeCard;
