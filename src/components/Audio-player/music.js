import * as React from "react";
import { useState, useEffect } from "react";
import pageAudio from "../Music/UnderWorld.mp3";
import "./styles.css";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const myAudio = new Audio(pageAudio);

function Music() {
  const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    console.log(isPlay);
    isPlay ? myAudio.play() : myAudio.pause();
  }, [isPlay]);

  return (
    <div id="Music">
      <audio id="myAudio" preload="metadata" loop></audio>
      <button className="button" onClick={() => setIsPlay(!isPlay)}>
        {isPlay ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </button>
    </div>
  );
}

export default Music;
