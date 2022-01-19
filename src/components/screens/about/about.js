import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles.css";
import Skillbar from "./Skillbar/skillbar";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "Front-end",
    width: "90%",
  },
  {
    title: "Back-end",
    width: "50%",
  },
  {
    title: "React",
    width: "70%",
  },
  {
    title: "Git",
    width: "80%",
  },
];

const renderSkillbar = skills.map((skill, index) => {
  return <Skillbar key={index} skill={skill} />;
});

function About() {
  return (
    <div id="About" className="screen">
      <div className="text-zone">
        <h2 className="title">
          Skills & <br /> About me
        </h2>
        <p className="text__project">
          I am a responsible and humble developer at the beginning of my career
          which has programmed both frontend and backend and has a large passion
          for problem solving and good eye for design.
        </p>
        <p className="text__project">
          Sports has been and is a big part of my life, I see myself as a great
          team player who always works hard together my colleagues.
        </p>
        <p className="text__project">
          I am passionate about developing and therefore looking for a workplace
          with a clear vision for the future. I see each challenge as one chance
          to develop and become sharper.
        </p>
        <div clasName="info-container">
          <div className="quick-contacts">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="text-mainColor w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path>
            </svg>
            <p> Sweden, Stockholm/Uppsala</p>
          </div>
          <div className="quick-contacts">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className="text-mainColor w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
            </svg>
            <p>+(46) 070 524 95 94</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <img className="profilePic" src="Profile-pic.jpg" />
        <div id="bars-container" data-animation="slide-in-right">
          {renderSkillbar}
        </div>
      </div>
    </div>
  );
}

export default About;
