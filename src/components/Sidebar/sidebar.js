import * as React from "react";
import "./styles.css";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import DomainTwoToneIcon from "@mui/icons-material/DomainTwoTone";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? "navbar navbar-open" : "navbar"}>
      <ul className="navbar-nav">
        <li className="logo">
          <div className="nav-link">
            <span className="link-text logo-text">Portfolio</span>
            <button
              className="buttonSidebar"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </li>
        <li className="nav-item">
          <a href="#home" className="nav-link">
            <HomeTwoToneIcon
              href="#home"
              className="sidebar-icon icon-color theme-icon"
            />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            <PermIdentityTwoToneIcon
              href="#about"
              className="sidebar-icon icon-color theme-icon"
            />
            <span className="link-text">About</span>
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="#experiences" className="nav-link">
            <DomainTwoToneIcon
              href="#experiences"
              className="sidebar-icon icon-color theme-icon"
            />
            <span className="link-text">Experiences</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            <RocketLaunchTwoToneIcon
              href="#projects"
              className="sidebar-icon icon-color theme-icon"
            />
            <span className="link-text">Projects</span>
          </a>
        </li>
        <li className="nav-item last-nav-item">
          <a href="#contacts" className="nav-link">
            <EmailTwoToneIcon
              href="#contacts"
              className="sidebar-icon icon-color theme-icon"
            />
            <span className="link-text">Contacts</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
