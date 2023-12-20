import React, { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

const ProjectList = () => {
  const { projects, projectClick, changeView } = useContext(ProjectsContext);

  const handleClick = (project) => {
    changeView("info");
    projectClick(project);
  };

  return (
    <ul>
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
