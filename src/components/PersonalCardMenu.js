import React from "react";

const PersonalCardMenu = props => {

  return (
    <React.Fragment>
      <button className="about-button" onClick={props.buttonFunction}>skills</button>
      <button className="about-button" onClick={props.buttonFunction}>certificates</button>
      <button className="about-button" onClick={props.buttonFunction}>awards</button>
    </React.Fragment>
  );
}

export { PersonalCardMenu };
