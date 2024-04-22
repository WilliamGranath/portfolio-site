import * as React from "react";
import "./styles.css";

function ExperiencesTemplate({ experience }) {
  console.log(experience);
  return (
    <div id="Experiences" className="screen">
      <div></div>
      <ul className="container">
        <li className="list-item">
          <div className="experience-content">
            <div>
              <h3 className="experience-title">
                <a
                  href={experience.link}
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  {experience.title}
                </a>
              </h3>{" "}
              <h4 className="experience-interval">
                <a
                  href={experience.link}
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  {experience.interval}
                </a>
              </h4>{" "}
              <h4 className="experience-role">
                <a
                  href={experience.link}
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  {experience.role}
                </a>
              </h4>{" "}
              <div className="experience-description">
                <p>{experience.experienceDesc}</p>
              </div>
              <ul className="experience-tech-list">
                <span>{experience.techList}</span>
              </ul>
              <div className="experience-links">
                <a
                  href={experience.link}
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ExperiencesTemplate;
