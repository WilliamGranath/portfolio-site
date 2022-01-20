import * as React from "react";
import "./styles.css";
import RetroWaves from "../../Videos/Outrun-Grid.mp4";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div id="Home" className="videoContainer">
    <video autoPlay preload="auto" muted loop id="myVideo">
        <source src={RetroWaves} pre type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="welcome">
          <h1 className="glitch" data-text="Welcome">
            Welcome
          </h1>
        </div>
        <div className="content">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("to my world.").start();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
