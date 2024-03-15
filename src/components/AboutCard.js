import React from "react"
import './AboutCard.css'
import { skills } from "../data/About"


const AboutCard = (props) => {
  const date = new Date();
  const today = date.toLocaleDateString();
  const startDate = new Date(props.date);
  const endDate = new Date(today);
  const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

  return (
    <div className='about-card basic-card'>
      <img className="card-img" src={props.img} alt={props.title + " image."} />
      <div>
        <h3>{props.title}</h3>
        <p><u>Acquired:</u> {props.origin}</p>
        <p><u>Used:</u> {props.extra}</p>
        <p><u>From:</u> {props.date} <i>~ m/d/y ~</i></p>
        <p><u>Experience:</u> {monthsDiff} months</p>
        {/* <p><u>Last used: </u>{today}</p> */}
      </div>
    </div>
  )
};
function createCard(props) {
  return (
    <AboutCard
      key={props.id}
      img={props.img}
      title={props.title}
      origin={props.origin}
      extra={props.extra}
      date={props.date}
    />
  );
}

function cardGenerator(props) {
  return (
    <div className="card-container">
      {skills.map(createCard)}
    </div>
  );
}


export default cardGenerator;

// "../data/data_icons/standard.svg"
