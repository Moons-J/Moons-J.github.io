import React from "react"
import './DataContainer.css'
import '../index.css'
import SmallCard from "./SmallCard"

const DataContainer = (props) => {
 console.log(props.data)
  return (
    <div className="secondary-container">
      <h2 className="center-position">{props.dataTitle.toString()}</h2>
        <div className="card-container">
          {props.data.map((item) => (
            <SmallCard
              key={item.id}
              img={item.img}
              date={item.date}
              title={item.title}
              extra={item.extra}
            />
          ))}
        </div>
    </div>
  );
};

export default DataContainer;
