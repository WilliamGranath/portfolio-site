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
  {
    title: "15-Puzzle",
    projectDesc: `A 15 puzzle game implemented using React and TypeScript (TSX). Test your problem-solving skills by rearranging the numbered tiles to form the correct sequence. Click on the image to experience the game for yourself `,
    techList: "Typescript, React, CSS, Git",
    image: "./15-puzzle.png",
    GitLink: "https://github.com/WilliamGranath/15-game-tsx",
    link: "https://15-game-tsx.vercel.app",
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
