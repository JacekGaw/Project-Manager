import React from "react";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <ul role="list">
      {projects.map((project) => {
        return <li key={project.title}>{project.title}</li>;
      })}
    </ul>
  );
};

export default ProjectList;
