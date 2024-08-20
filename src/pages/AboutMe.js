import React, { useState } from "react";
import PersonalCard from "../components/PersonalCard";
import DataContainer from "../components/DataContainer";
import aboutMeData from "../data/AboutMeData";

import "./AboutMe.css";

export default function AboutMe() {
  const [data, setData] = useState(Object.values(aboutMeData)[0]);
  const [dataTitle, setDataTitle] = useState(Object.keys(aboutMeData)[0]);
  const allData = aboutMeData;

  function buttonFunction(event) {
    const buttons = document.querySelectorAll('.about-button');

    buttons.forEach(button => {
      button.disabled = false;
    });
    event.target.disabled = true;
    setData(Object.values(aboutMeData)[event.target.className.slice(-1)]);
    setDataTitle(Object.keys(aboutMeData)[event.target.className.slice(-1)]);
    return
  };

  return (
    <div className="main-container" style={{ flexWrap: window.innerWidth < 519 ? 'wrap' : 'nowrap' }}>
      <PersonalCard buttonFunction={buttonFunction} allData={allData}/>
      <DataContainer data={data} dataTitle={dataTitle}/>
    </div>
  );
}
