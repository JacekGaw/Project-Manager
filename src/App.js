import React, { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

const App = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    <main class="h-screen flex-col">
      <header class="h-1/5 flex justify-center items-center">
        <h1 class="text-5xl text-center">Project Manager</h1>
      </header>
      <section class="flex max-w-screen-xl mx-auto h-4/5">
        <SidePanel projectsInfo={projects} />
        <MainPanel onAddProject={addProject} />
      </section>
    </main>
  );
};

export default App;
