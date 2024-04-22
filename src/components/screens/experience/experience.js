import React from "react";
import ExperiencesTemplate from "./experience-templet";

const experienceInfo = [
  {
    title: "NA-KD",
    interval: "2022-2024",
    role: "Front-end Developer",
    experienceDesc: `Collaborated closely with designers to enhance user experience (UX) through frontend development, ensuring optimal functionality and aesthetics. Specialized in writing and updating reusable code to maintain and improve the company's websites and digital platforms. Conducted regular code reviews to uphold coding standards and optimize code efficiency. Provided assistance to fellow frontend developers with complex JavaScript tasks, fostering knowledge sharing and teamwork. Proficiently utilized CMS (EPI) to manage content and implement changes on the company's websites. Primarily utilized CSS, HTML, and JavaScript to develop and maintain frontend components and features.`,
    techList: "JavaScript, HTML, CSS, Git, CMS",
    link: "https://www.na-kd.com/en",
  },
];

function experiences() {
  const renderexperiences = experienceInfo.map((experience, index) => {
    return <ExperiencesTemplate key={index} experience={experience} />;
  });
  return (
    <div id="experiences">
      <h2 className="experience-heading" style={{}}>
        Experiences
      </h2>
      {renderexperiences}
    </div>
  );
}

export default experiences;
