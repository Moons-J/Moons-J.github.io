import PersonalCard from "../components/PersonalCard";
import AboutCard from "../components/AboutCard";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    // main div horizontal
    <div className="main-container">
      <PersonalCard />
      <AboutCard />
    </div>
  );
}
