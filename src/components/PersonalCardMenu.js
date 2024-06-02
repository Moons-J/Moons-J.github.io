import React from "react";
import aboutMeData from "../data/AboutMeData";

const PersonalCardMenu = (props) => {

  return (
    <React.Fragment>
    {Object.keys(aboutMeData).map((key, index) => (
      <button
      className={`about-button ${index}`}
      onClick={props.buttonFunction}>{key.toString()}
      </button>
    ))}
    </React.Fragment>
  );
}

export { PersonalCardMenu };
