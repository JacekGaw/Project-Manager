import React, { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentView, setCurrentView] = useState('start');
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
          todos: []
        },
      ];
    });
  };

  const handleChangeView = (newView) => {
    setCurrentView(newView);
  }

  const handleProjectClick = (info) => {
    setProjectInfo(projects.filter(project => project.id === info));
    console.log(projectInfo);
    setCurrentView("info");
  }

  const handleDeleteProject = (info) => {
    const arr = projects.filter(project => project.id !== info.id);
    setProjects(arr);
    setCurrentView("add");
  }


  const handleAddNewTask = (projectTitle, task) => {
    setProjects(prevState => {
      const arr = prevState.map((project) => {
        if(project.title === projectTitle){
          return (
            {
              ...project,
              todos: [...project.todos,{title: task, id: Math.random()}]
            }
          )
        }
        else return project;
      })
      return (
        arr
      )
    })
  } 

  return (
    <main class="h-screen flex-col">
      <header class="h-1/5 flex justify-center items-center">
        <h1 class="text-5xl text-center">Project Manager</h1>
      </header>
      <section class="flex max-w-screen-xl mx-auto h-4/5">
        <SidePanel projectsInfo={projects} onChangeView={handleChangeView} onProjectClick={handleProjectClick}/>
        <MainPanel onAddProject={addProject} panelView={currentView} onChangeView={handleChangeView} onShowProject={projectInfo} onDeleteProject={handleDeleteProject} onAddNewTask={handleAddNewTask}/>
      </section>
    </main>
  );
};

export default App;
