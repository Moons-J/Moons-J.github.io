import React from "react";
import './SmallCard.css';

import { ReactComponent as LinkIcon } from '../icons/link.svg';
import { ReactComponent as CloseIcon } from '../icons/close.svg';

// const today = new Date().toLocaleDateString();
// const endDate = new Date(today);

const SmallCard = (props) => {
  // const startDate = new Date(props.date);
  // const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  return (
    <div className='small-card basic-card'>
      <div className='small-card-header'>
        <img className="card-svg" src={props.img || require('../data/data_icons/projects/protfolio-logo.svg').default} alt={props.title + " image."} />
        {/* {console.log(props)} */}
        {props.link ? (
          <a href={props.link} target="_blank" rel="noreferrer"><LinkIcon /></a>
        ) : (
          <button className="locked">x</button>
        )}
      </div>
      <div className="gap">
        <h3>~ {props.title} ~</h3>
        {props.role ? (
          <h4>Role: {props.role}</h4>
        ) : null}
        {props.extra.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        {/* <p>Experience: {monthsDiff} months</p> */}
      </div>
    </div>
  );
};

// <p><u>Acquired:</u> {data.origin}</p>
// <p><u>Used:</u> {data.extra}</p>
// <p><u>From:</u> {data.date} <i>~ m/d/y ~</i></p>
// <p><u>Experience:</u> {monthsDiff} months</p>
// {/* <p><u>Last used: </u>{today}</p> */}

export default SmallCard;
