import React from "react"
import './PersonalCard.css'
import image from '../JM.JPG'

const PersonalCard = (props) => {
  return (
    <div className='personal-card basic-card'>
      <div className="p-card-header">
        <img id="head-shot" src={image} alt="Head shot of Jonas Moons" />
      </div>
    </div>
  )
};

export default PersonalCard;
