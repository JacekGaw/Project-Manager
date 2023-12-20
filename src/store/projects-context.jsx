import React, { createContext, useState } from 'react';

export const ProjectsContext = createContext({
    projects: [],
    projectClick: () => {},
    projectAdd: () => {},
    projectDelete: () => {},
    addTask: () => {},
    deleteTask: () => {},
    changeView: () => {},
    currentView: "",
    showProject: ""
});


const ProjectsContextProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
  const [currentView, setCurrentView] = useState("start");
  const [projectInfo, setProjectInfo] = useState();

  const addProject = (projectInfo) => {
    setProjects((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          title: projectInfo.title,
          desc: projectInfo.desc,
          date: projectInfo.date,
          todos: [],
        },
      ];
    });
  };

  const handleChangeView = (newView) => {
    setCurrentView(newView);
  };

  const handleProjectClick = (info) => {
    setProjectInfo(projects.find((project) => project.id === info));
    setCurrentView("info");
  };

  const handleDeleteProject = (info) => {
    const arr = projects.filter((project) => project.id !== info.id);
    setProjects(arr);
    setCurrentView("add");
  };

  const handleAddNewTask = (projectId, task) => {
    setProjects((prevState) => {
      const arr = prevState.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            todos: [...project.todos, { title: task, id: Math.random() }],
          };
        } else return project;
      });
      return arr;
    });
  };

  const handleDeleteTask = (projectID, todoID) => {
    setProjects((prevState) => {
      const arr = prevState.map((project) => {
        if (project.id === projectID) {
          const newTodos = project.todos.filter((todo) => todo.id !== todoID);
          return {
            ...project,
            todos: newTodos,
          };
        } else return project;
      });
      return arr;
    });
  };

  const ctxValue = {
    projects: projects,
    projectClick: handleProjectClick,
    projectAdd: addProject,
    projectDelete: handleDeleteProject,
    addTask: handleAddNewTask,
    deleteTask: handleDeleteTask,
    changeView: handleChangeView,
    currentView: currentView,
    showProject: projectInfo
  }

  return <ProjectsContext.Provider value={ctxValue}>
    {children}
  </ProjectsContext.Provider>
};

export default ProjectsContextProvider;