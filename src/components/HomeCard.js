import React from "react"
import './HomeCard.css'

const HomeCard = (props) => {
  return (

    <div className='home-card basic-card flex-center align-column'>
      <h2>welcome</h2>
      <h3>to the Portfolio of Jonas Moons.</h3>
      <p>Feel free to browse around and learn more about me and my work.</p>
      <a href="/aboutme">about me</a>
      <a href="/mywork">my work</a>
    </div>
  )
};

export default HomeCard;
