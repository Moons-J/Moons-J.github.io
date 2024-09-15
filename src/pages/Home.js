import HomeCard from "../components/HomeCard";
import videoBG from "../data/data_video/bg.mp4";
import "./Home.css";

export default function Home() {
  return (
    <div>
    <div className="overlay"></div>
      <video className="video-bg" src={videoBG} autoPlay loop muted />
      <div className="Home flex-center container">
        <HomeCard />
      </div>
    </div>
  );
}
