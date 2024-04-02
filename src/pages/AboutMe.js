import React, { useState, useEffect } from "react";
import PersonalCard from "../components/PersonalCard";
import { CreateCard } from "../components/AboutCard";
import "./AboutMe.css";

import { skills, certificates, awards } from "../data/About";

export default function AboutMe() {
  const [data, setData] = useState(skills);

  function buttonFunction(event) {
    const buttons = document.querySelectorAll('.about-button');
    buttons.forEach(button => {
      button.disabled = false;
    });
    event.target.disabled = true;
    const buttonText = event.target.textContent;
    if (buttonText === 'skills') {
      setData(skills);
    } else if (buttonText === 'certificates') {
      setData(certificates);
    } else if (buttonText === 'awards') {
      setData(awards);
    } else {
      setData(skills);
    }
    return
  };

  // useEffect(() => {
  //   // Code to handle rerendering of cards when data changes
  //   console.log(data);

  //   // optional return function
  // }, [data]); // the button in menu

  return (
    <div className="main-container" style={{ flexWrap: window.innerWidth < 519 ? 'wrap' : 'nowrap' }}>
      <PersonalCard buttonFunction={buttonFunction} />
      <div className="card-container">
        <CreateCard data={data}/>
      </div>
    </div>
  );
}
