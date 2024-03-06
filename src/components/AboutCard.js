import React from "react"
import './AboutCard.css'

const AboutCard = (props) => {
  return (
    <div className='about-card basic-card'>
      <div>
        <img className="card-img" src={props.img} alt={props.title + " image."} />
        <div>
          <h3>{props.title}</h3>
          <p>{props.origin}</p>
          <p>{props.extra}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  )
};

export default AboutCard;
