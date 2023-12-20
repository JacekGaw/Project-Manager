import React, { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";
import { ProjectsContext } from "./store/projects-context";

const App = () => {
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

  const handleDeleteTodo = (projectID, todoID) => {
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
    testValue: "Testing context",
    projectClick: handleProjectClick
  }

  return (
    <ProjectsContext.Provider value={ctxValue}>
    <main class="h-screen flex-col">
      <header class="h-1/5 flex justify-center items-center">
        <h1 class="text-5xl text-center">Project Manager!</h1>
      </header>
      <section class="flex max-w-screen-xl mx-auto h-4/5">
        <SidePanel
          onChangeView={handleChangeView}
        />
        <MainPanel
          onAddProject={addProject}
          panelView={currentView}
          onChangeView={handleChangeView}
          onShowProject={projectInfo}
          onDeleteProject={handleDeleteProject}
          onAddNewTask={handleAddNewTask}
          onAddTodos={projects}
          onDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
    </ProjectsContext.Provider>
  );
};

export default App;
