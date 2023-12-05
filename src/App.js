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
          title: projectInfo.title,
          desc: projectInfo.desc,
          date: projectInfo.date,
        },
      ];
    });
  };

  const handleChangeView = (newView) => {
    setCurrentView(newView);
  }

  const handleProjectClick = (info) => {
    setProjectInfo(info);
    setCurrentView("info");
  }

  const handleDeleteProject = (info) => {
    const arr = projects.filter(project => project.title !== info);
    setProjects(arr);
    setCurrentView("add");
  }

  return (
    <main class="h-screen flex-col">
      <header class="h-1/5 flex justify-center items-center">
        <h1 class="text-5xl text-center">Project Manager</h1>
      </header>
      <section class="flex max-w-screen-xl mx-auto h-4/5">
        <SidePanel projectsInfo={projects} onChangeView={handleChangeView} onProjectClick={handleProjectClick}/>
        <MainPanel onAddProject={addProject} panelView={currentView} onChangeView={handleChangeView} onShowProject={projectInfo} onDeleteProject={handleDeleteProject}/>
      </section>
    </main>
  );
};

export default App;
