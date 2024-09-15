import React, { useRef } from 'react';
import HomeCard from "../components/HomeCard";
import videoBG from "../data/data_video/bg.mp4";
import "./Home.css";

export default function Home() {
  const videoRef = useRef();

  const setPlayBack = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  };

  return (
    <div>
    <div className="overlay"></div>
    <video
        className="video-bg"
        src={videoBG}
        autoPlay
        loop
        muted
        ref={videoRef}
        onCanPlay={setPlayBack}
      />
      <div className="Home flex-center container">
        <HomeCard />
      </div>
    </div>
  );
}
