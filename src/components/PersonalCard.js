import React from "react"
import './PersonalCard.css'
import image from '../JM.JPG'
import { PersonalCardMenu } from "./PersonalCardMenu"

// icons
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg'
import { ReactComponent as GitHubIcon } from '../icons/github.svg'
import { ReactComponent as WhatsAppIcon } from '../icons/whatsapp.svg'
import { ReactComponent as EmailIcon } from '../icons/email.svg'


const PersonalCard = (props) => {
  var fullUrl = window.location.href;
  var path = fullUrl.split('/').pop();
  var pathTitle = path.split('-').join(' ');

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
        <h2 className="img-header">{pathTitle}</h2>
      </div>
      <div className="personal-menu">
        <PersonalCardMenu buttonFunction={props.buttonFunction}/>
      </div>
      <div className="align-column">
      <h4>Story:</h4>
        <p className="story hidden">Greetings! 👋🤩 I'm Jonas, a Junior full-stack developer and former quality expert in communication.
           On the 8th of December 2023, I completed the Le Wagon Full-Stack Developer Bootcamp.
           Enthusiastic and eager to learn, I bring a unique blend of technical skills and
           effective communication. Committed to continuous improvement and staying
           current in the ever-evolving tech world. Excited to contribute to innovative
           projects and make a meaningful impact.
           Please feel free to contact me for any questions.
           Thank you for reading. 😇
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
      <a href="../dowloadable/JM CV Full Stack.pdf" download="Jonas Moons Full Stack Web Developer CV">download my CV here.</a>
    </div>
  );
};

export default PersonalCard;
