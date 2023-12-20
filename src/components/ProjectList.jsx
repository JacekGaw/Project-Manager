import React, {useContext} from "react";
import { ProjectsContext } from "../store/projects-context";


const ProjectList = ({  onChangeView }) => {
  
  const {projects, projectClick} = useContext(ProjectsContext);
  
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
