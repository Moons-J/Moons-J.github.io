import React from "react"
import './DataContainer.css'
import '../index.css'
import SmallCard from "./SmallCard"
import BigCard from "./BigCard"


const DataContainer = (props) => {
  var pathTitle = window.location.href.split('/').pop().split('-').join(' ');

  function CardPicker() {
    if (pathTitle === 'my work') {
      return props.data.map((item) => (
        <SmallCard
          key={item.id}
          img={item.img}
          date={item.date}
          title={item.title}
          extra={item.extra}
        />
      ))
    } else {
      return props.data.map((item) => (
        <BigCard
          key={item.id}
          img={item.img}
          title={item.title}
          top={item.top}
          description={item.description}
        />
      ))
    }
  }

  return (
    <div className="secondary-container">
      <h2 className="data-title">{props.dataTitle.toString()}</h2>
      <div className="card-container">
        {CardPicker(props)}
      </div>
    </div>
  );
};

export default DataContainer;
