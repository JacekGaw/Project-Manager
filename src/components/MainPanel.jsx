import React from "react";
import AddProject from "./AddProject";
import ProjectView from "./ProjectView";

const MainPanel = ({ onAddProject, panelView, onChangeView, onShowProject, onDeleteProject, onAddNewTask}) => {

  return (
    <section
      id="mainPanel"
      class="flex flex-col justify-center items-center flex-1 "
    >
      {panelView === "start" && (
        <div class="flex flex-col justify-center items-center">
          <h3 class="text-2xl font-bold">No Project Selected</h3>
          <p>Select a project or get started with a new one</p>
          <button class="bg-medium-blue px-4 py-2 my-5 hover:translate-y-1 transition text-white" onClick={() => onChangeView("add")}>
            Create new project
          </button>
        </div>
      )}

      {panelView === "add" && <AddProject onAdd={onAddProject} />}
      {panelView === "info" && (
        <ProjectView projectInfo={onShowProject} deleteProject={onDeleteProject} addNewTask={onAddNewTask}/>
      )}
    </section>
  );
};

export default MainPanel;
