import React from "react"
import './BigCard.css'

const BigCard = (props) => {
  return (
    <div className='big_card basic-card'>
      <div className='title_box'>
        <div className='skill_display'>
          <h3>~ {props.title} ~</h3>
          {props.top.map((item) => (
            <h5>{item}</h5>
          ))}
        </div>
      </div>
      <div className='description_box'>
        <p>{props.description}</p>
      </div>
    </div>
  )
};

export default BigCard;
