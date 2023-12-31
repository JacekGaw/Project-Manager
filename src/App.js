import React from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";
import ProjectsContextProvider from "./store/projects-context";

const App = () => {
  return (
    <ProjectsContextProvider>
      <main class="h-screen flex-col">
        <header class="h-1/5 flex justify-center items-center">
          <h1 class="text-5xl text-center">Project Manager!</h1>
        </header>
        <section class="flex max-w-screen-xl mx-auto h-4/5">
          <SidePanel />
          <MainPanel />
        </section>
      </main>
    </ProjectsContextProvider>
  );
};

export default App;
