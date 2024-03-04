import React from "react"
import './PersonalCard.css'
import image from '../JM.JPG'

const PersonalCard = (props) => {
  var fullUrl = window.location.href;
  var url = fullUrl.split('/').pop();
  return (
    <div className='personal-card basic-card'>
      <div className="p-card-header">
        <img id="head-shot" src={image} alt="Head shot of Jonas Moons" />
        <h2 className="img-header">{url}</h2>
      </div>
      <div className="personal-menu">
          <button>skills</button>
          <button>certificates</button>
          <button>awards</button>
      </div>
      <div>
        <h6>Story:</h6>
        <p>Greeting! 👋🤩 I'm Jonas, Junior full-stack developer and former quality expert in communication.
Recently completed the Le Wagon Full-Stack Developer Bootcamp.
Enthusiastic and eager to learn, I bring a unique blend of technical skills and
effective communication. Committed to continuous improvement and staying
current in the ever-evolving tech world. Excited to contribute to innovative
projects and make a meaningful impact.</p>
      </div>
    </div>
  );
};

export default PersonalCard;
