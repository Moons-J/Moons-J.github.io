import React from "react"
import './PersonalCard.css'
import image from '../JM.JPG'

const PersonalCard = (props) => {
  var fullUrl = window.location.href;
  var url = fullUrl.split('/').pop();

  const toggleStory = () => {
    const story = document.querySelector('.story');
    story.classList.toggle('hidden');
    const button = document.querySelector('.story-button');
    if (story.classList.contains('hidden')) {
      button.textContent = 'read more';
      return;
    }
    button.textContent = 'show less';
  };

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
      <div className="flex-center column">
        <p className="story hidden"><h4>Story:</h4>Greetings! 👋🤩 I'm Jonas, a Junior full-stack developer and former quality expert in communication.
           On the 8th of December 2023, I completed the Le Wagon Full-Stack Developer Bootcamp.
           Enthusiastic and eager to learn, I bring a unique blend of technical skills and
           effective communication. Committed to continuous improvement and staying
           current in the ever-evolving tech world. Excited to contribute to innovative
           projects and make a meaningful impact.
        </p>
        <button className="story-button" onClick={toggleStory}>read more</button>
      </div>
    </div>
  );
};

export default PersonalCard;
