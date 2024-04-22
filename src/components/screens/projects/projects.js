import React from "react";
import ProjectsTemplate from "./projects-templet";

const projectInfo = [
  {
    title: "Spotify Clone",
    projectDesc: `A simple Spotify clone built during Techover Academy 2022.
                  With the help of API:s you can log in on ur own account and
                  see ur personal playlists, play, pause and skip songs, come and test the site ur self by clicking the picture.`,
    techList: "Javascript, React, Redux, Spotify API, CSS, Git",
    image: "./Spotify.png",
    GitLink: "https://github.com/WilliamGranath/Spotify-clone",
    link: "https://spotifyclone-wille.netlify.app",
  },
  {
    title: "Web Shop",
    projectDesc: `A shop build with Fakestore API toghether with React and Redux. I integrated klarna via Iframe in the checkout, come and test the site ur self by clicking the picture.  `,
    techList: "Javascript, React, Redux, Klarna API, CSS, Git",
    image: "./Web-shop.png",
    GitLink: "https://github.com/WilliamGranath/webb-shop",
    link: "https://webshop-wille.netlify.app",
  },
];

function Projects() {
  const renderProjects = projectInfo.map((project, index) => {
    return <ProjectsTemplate key={index} project={project} />;
  });
  return (
    <div id="projects">
      <h2 className="project-heading" style={{}}>
        Projects
      </h2>
      {renderProjects}
    </div>
  );
}

export default Projects;
