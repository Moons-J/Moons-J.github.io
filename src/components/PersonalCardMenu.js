import React, { useState } from "react";

const PersonalCardMenu = (props) => {
  function clickFunction(event) {
    props.buttonFunction(event);
    event.target.classList.add('disabled');
    const buttons = document.getElementsByClassName('about-button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] !== event.target) {
        buttons[i].classList.remove('disabled');
      }
    }
  }
  return (
    <>
      <h2>menu</h2>
      {Object.keys(props.allData).map((key, index) => (
        <button
          key={index}
          className={`about-button ${index}`}
          onClick={clickFunction}
        >{key.toString()}
        </button>
      ))}
    </>
  );
}

export { PersonalCardMenu };
