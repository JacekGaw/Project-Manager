import React, { useRef, useContext } from "react";
import Tasks from "./Tasks";
import Modal from "./Modal";
import { ProjectsContext } from "../store/projects-context";

const ProjectView = ({
  projectInfo,
  onAddTodo,
}) => {
  const {projectDelete, addTask, deleteTask} = useContext(ProjectsContext);
    const modal = useRef();
  const taskInput = useRef();


  const handleAddTask = () => {
    let newTask = taskInput.current.value;
    taskInput.current.value = "";
    newTask.length > 0 ? addTask(projectInfo.id, newTask): modal.current.open();
  };

  return (
    <>
    <Modal ref={modal}>
    <h2 className="text-3xl font-bold mb-5">Invalid input!</h2>
      <p className="text-slate-700 mb-5">Empty task? If you have nothing to do, just don't add one. If you have, please fill input!</p>
    </Modal>
    <section class="flex flex-col flex-1 w-full p-20">
      <header class="flex justify-between mb-2">
        <h2 class="text-4xl font-bold text-dark-blue">{projectInfo.title}</h2>
        <button
          class="p-2 mx-2 hover:shadow-md hover:-translate-y-0.5 transition"
          onClick={() => projectDelete(projectInfo)}
        >
          Delete
        </button>
      </header>
      <p class="text-light-blue mb-5">{projectInfo.date}</p>
      <p class="text-ml border-b-2 border-lightest-blue pb-5 whitespace-pre-line">
        {projectInfo.desc}
      </p>
      <header class="flex justify-between mb-2 mt-5">
        <h2 class="text-4xl font-bold text-dark-blue">Tasks</h2>
      </header>
      <div class="flex justify-start gap-1">
        <input ref={taskInput} type="text" class="bg-lightest-blue p-2"></input>
        <button
          class="p-2 hover:shadow-md hover:-translate-y-0.5 transition"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <Tasks
        taskList={onAddTodo}
        projectId={projectInfo.id}
      />
    </section>
    </>
  );
};

export default ProjectView;
