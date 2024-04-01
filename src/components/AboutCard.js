import React from "react";
import './AboutCard.css';


const AboutCard = (props) => {
  const today = new Date().toLocaleDateString();
  const startDate = new Date(props.date);
  const endDate = new Date(today);
  const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

  return (
    <div className='about-card basic-card'>
      <img className="card-img" src={props.img || require('../data/data_icons/big-logo.svg').default} alt={props.title + " image."} />
      <div key={props.index}>
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

  const CreateCard = (props) => {
    return (
      <React.Fragment>
        {props.data.map((data, index) => (
          <AboutCard
            key={index}
            img={data.img}
            title={data.title}
            origin={data.origin}
            extra={data.extra}
            date={data.date}
          />
        ))}
      </React.Fragment>
    );
  };

export { CreateCard };
