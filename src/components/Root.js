import React from "react";
import Sidebar from "./Sidebar/sidebar";
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Projects from "./screens/projects/projects";
import Contacts from "./screens/contacts/contacts";
import Music from "./Audio-player/music";
import "./styles.css";
const ScreensRoot = () => {
  return (
    <div className="flex">
      <Music />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Sidebar />
    </div>
  );
};

export default ScreensRoot;
