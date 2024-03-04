import React from "react"
import './PersonalCard.css'
import image from '../JM.JPG'

// icons
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg'
import { ReactComponent as GitHubIcon } from '../icons/github.svg'
import { ReactComponent as WhatsAppIcon } from '../icons/whatsapp.svg'
import { ReactComponent as EmailIcon } from '../icons/email.svg'

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
      <div className="align-column">
        <p className="story hidden"><h4>Story:</h4>Greetings! 👋🤩 I'm Jonas, a Junior full-stack developer and former quality expert in communication.
           On the 8th of December 2023, I completed the Le Wagon Full-Stack Developer Bootcamp.
           Enthusiastic and eager to learn, I bring a unique blend of technical skills and
           effective communication. Committed to continuous improvement and staying
           current in the ever-evolving tech world. Excited to contribute to innovative
           projects and make a meaningful impact.
        </p>
        <button className="story-button" onClick={toggleStory}>read more</button>
      </div>
      <div className="contact">
        <h3>Contact me:</h3>
          <div className="align-row">
            <a href="https://www.linkedin.com/in/jonas-moons-232538285/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/Moons-J" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://wa.me/+34654229630" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="mailto: jonas_jobs@icloud.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
      </div>
    </div>
  );
};

export default PersonalCard;
