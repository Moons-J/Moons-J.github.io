import React, { useState } from "react";
import PersonalCard from "../components/PersonalCard";
import { SmallCards } from "../components/SmallCard";
import aboutMeData from "../data/AboutMeData";

import "./AboutMe.css";

export default function AboutMe() {
  const [data, setData] = useState(Object.values(aboutMeData)[0]);


  function buttonFunction(event) {
    const buttons = document.querySelectorAll('.about-button');

    buttons.forEach(button => {
      button.disabled = false;
    });
    event.target.disabled = true;
    console.log(event.target.className.slice(-1));
    setData(Object.values(aboutMeData)[event.target.className.slice(-1)]);
    return
  };

  return (
    <div className="main-container" style={{ flexWrap: window.innerWidth < 519 ? 'wrap' : 'nowrap' }}>
      <PersonalCard buttonFunction={buttonFunction}/>
      <div className="card-container">
        <SmallCards data={data}/>
      </div>
    </div>
  );
}
