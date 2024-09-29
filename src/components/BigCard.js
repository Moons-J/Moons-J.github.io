import React from "react"
import './BigCard.css'
import Slider from "./Slider";

const BigCard = (props) => {
  return (
    <div className='big-card basic-card'>
      <div className='title-box'>
        <h2>{props.title.toLowerCase()}</h2>
        <div className='img-box'>
          {props.img.length === 1 ? (
            <img className="big-card-image" src={props.img[0]} alt={props.title} />
          ) : (
            <Slider images={props.img} />
          )}
        </div>
      </div>
      <div className='fav-display'>
        <h3>Top 3 favorite parts:</h3>
        {props.top.map((item, index) => (
          <h5 key={index}>{item}</h5>
        ))}
      </div>
      {/* <div className='desc-box'>
        <h5>Info here.</h5>
        <p>{props.description}</p>
      </div> */}
    </div>
  )
};

export default BigCard;
