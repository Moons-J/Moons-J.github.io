import React from "react";
import './SmallCard.css';

const today = new Date().toLocaleDateString();
const endDate = new Date(today);

  const SmallCard = (props) => {
    const startDate = new Date(props.date);
    const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    return (
      <div className='small-card basic-card'>
        <img className="card-img" src={props.img || require('../data/data_icons/big-logo.svg').default} alt={props.title + " image."} />
        <div key={props.index}>
          <h3>~ {props.title} ~</h3>
          {props.extra.map((item, index) => (
            <p>{item}</p>
          ))}
          <p>Experience: {monthsDiff} months</p>
        </div>
      </div>
    );
  };

  const SmallCards = (data) => {
    return (
      <React.Fragment>
        {data.data.map((item) => (
          <SmallCard
            key={item.id}
            img={item.img}
            date={item.date}
            title={item.title}
            extra={item.extra}
          />
        ))}
      </React.Fragment>
    );
  };

  // <p><u>Acquired:</u> {data.origin}</p>
  // <p><u>Used:</u> {data.extra}</p>
  // <p><u>From:</u> {data.date} <i>~ m/d/y ~</i></p>
  // <p><u>Experience:</u> {monthsDiff} months</p>
  // {/* <p><u>Last used: </u>{today}</p> */}

export { SmallCards };
