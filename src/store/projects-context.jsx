import React, { createContext, useReducer } from "react";

export const ProjectsContext = createContext({
  projects: [],
  projectClick: () => {},
  projectAdd: () => {},
  projectDelete: () => {},
  addTask: () => {},
  deleteTask: () => {},
  changeView: () => {},
  currentView: "",
  showProject: "",
});

const projectsReducer = (state, action) => {
  if (action.type === "ADD_PROJECT") {
    const newArr = [
      ...state.projectList,
      {
        id: Math.random(),
        title: action.payload.title,
        desc: action.payload.desc,
        date: action.payload.date,
        todos: [],
      },
    ];

    return {
      ...state,
      projectList: newArr,
    };
  } else if (action.type === "DELETE_PROJECT") {
    const arr = state.projectList.filter(
      (project) => project.id !== action.payload.info.id
    );
    return {
      ...state,
      projectList: arr,
      currView: "add",
    };
  } else if (action.type === "CLICK_PROJECT") {
    const pom = state.projectList.find(
      (project) => project.id === action.payload.info
    );
    // setProjectInfo(projects.find((project) => project.id === info));
    return {
      ...state,
      projectInf: pom,
      view: action.payload.view,
    };
  } else if (action.type === "ADD_TASK") {
    const arr = state.projectList.map((project) => {
      if (project.id === action.payload.projectId) {
        return {
          ...project,
          todos: [
            ...project.todos,
            { title: action.payload.task, id: Math.random() },
          ],
        };
      } else return project;
    });

    return {
      ...state,
      projectList: arr,
    };
  } else if (action.type === "DELETE_TASK") {
    const arr = state.projectList.map((project) => {
      if (project.id === action.payload.projectID) {
        const newTodos = project.todos.filter(
          (todo) => todo.id !== action.payload.todoID
        );
        return {
          ...project,
          todos: newTodos,
        };
      } else return project;
    });

    return {
      ...state,
      projectList: arr,
    };
  } else if (action.type === "CHANGE_VIEW") {
    return {
      ...state,
      currView: action.payload
    }
  }
  return state;
};

const ProjectsContextProvider = ({ children }) => {
  const [projectsState, projectsDispatch] = useReducer(projectsReducer, {
    projectList: [],
    projectInf: "",
    currView: "start",
  });

  const addProject = (projectInfo) => {
    projectsDispatch({
      type: "ADD_PROJECT",
      payload: projectInfo,
    });
  };

  const handleChangeView = (newView) => {
    projectsDispatch({
      type: "CHANGE_VIEW",
      payload: newView,
    });
  };

  const handleProjectClick = (info) => {
    projectsDispatch({
      type: "CLICK_PROJECT",
      payload: {
        info: info,
        view: "info",
      },
    });
  };

  const handleDeleteProject = (info) => {
    projectsDispatch({
      type: "DELETE_PROJECT",
      payload: {
        info: info,
        view: "add",
      },
    });
  };

  const handleAddNewTask = (projectId, task) => {
    projectsDispatch({
      type: "ADD_TASK",
      payload: {
        projectId,
        task,
      },
    });
  };

  const handleDeleteTask = (projectID, todoID) => {
    projectsDispatch({
      type: "DELETE_TASK",
      payload: {
        projectID,
        todoID,
      },
    });
  };

  const ctxValue = {
    projects: projectsState.projectList,
    projectClick: handleProjectClick,
    projectAdd: addProject,
    projectDelete: handleDeleteProject,
    addTask: handleAddNewTask,
    deleteTask: handleDeleteTask,
    changeView: handleChangeView,
    currentView: projectsState.currView,
    showProject: projectsState.projectInf,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
