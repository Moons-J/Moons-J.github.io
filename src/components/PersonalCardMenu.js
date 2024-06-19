import React from "react";

const PersonalCardMenu = (props) => {
  return (
    <React.Fragment>
      <h2>menu</h2>
      {Object.keys(props.allData).map((key, index) => (
        <button
        className={`about-button ${index}`}
        onClick={props.buttonFunction}>{key.toString()}
        </button>
      ))}
    </React.Fragment>
  );
}

export { PersonalCardMenu };
