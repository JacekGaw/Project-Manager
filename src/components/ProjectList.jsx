import React from "react";

const ProjectList = ({ projects, onChangeView, projectClick }) => {
  const handleClick = (project) => {
    onChangeView = "info";
    projectClick(project);
  };

  return (
    <ul role="list">
      {projects.map((project) => {
        return (
          <li key={project.id} onClick={() => handleClick(project.id)}>
            {project.title}
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
