import React, { useState } from "react";
import PersonalCard from "../components/PersonalCard";
import DataContainer from "../components/DataContainer";
import WorkData from "../data/WorkData";

export default function MyWork() {
  const [data, setData] = useState(Object.values(WorkData)[0]);
  const [dataTitle, setDataTitle] = useState(Object.keys(WorkData)[0]);
  const allData = WorkData;

  function buttonFunction(event) {
    const buttons = document.querySelectorAll('.about-button');

    buttons.forEach(button => {
      button.disabled = false;
    });
    event.target.disabled = true;
    setData(Object.values(WorkData)[event.target.className.slice(-1)]);
    setDataTitle(Object.keys(WorkData)[event.target.className.slice(-1)]);
    return
  };

  return (
    <div className="main-container container" style={{ flexWrap: window.innerWidth < 519 ? 'wrap' : 'nowrap' }}>
      <PersonalCard buttonFunction={buttonFunction} allData={allData}/>
      <DataContainer data={data} dataTitle={dataTitle}/>
    </div>
  );
}
