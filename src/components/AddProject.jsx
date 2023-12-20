import React, { useRef, useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
import Modal from "./Modal";

const AddProject = ({ onAdd }) => {
  const {projects, testValue} = useContext(ProjectsContext);
  console.log(testValue);
  const modal = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  let projectInfo = {};

  const handleSave = () => {
    if (
      titleRef.current.value.trim().length === 0 ||
      descRef.current.value.trim().length === 0 ||
      dateRef.current.value.trim().length === 0
    ){
      modal.current.open();
      return;
    }
    if (
      titleRef.current.value.trim().length !== 0 &&
      descRef.current.value.trim().length !== 0 &&
      dateRef.current.value.trim().length !== 0
    ) {
      projectInfo = {
        title: titleRef.current.value,
        desc: descRef.current.value,
        date: dateRef.current.value,
      };
      titleRef.current.value = "";
      descRef.current.value = "";
      dateRef.current.value = "";
      onAdd(projectInfo);
    }
  };

  const handleCancel = () => {
    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <>
    <Modal ref={modal}>
      <h2 className="text-3xl font-bold mb-5">Invalid input!</h2>
      <p className="text-slate-700 mb-5">Make sure that every input field is filled! You can't make a new projet without title, description or date!</p>
    </Modal>
    <section class="flex flex-col flex-1 w-full p-20">
      <div class="flex justify-end mb-2">
        <button
          class="p-2 mx-2 hover:shadow-md hover:-translate-y-0.5 transition"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          class="py-2 px-5 mx-2 bg-dark-blue text-white hover:shadow-md hover:-translate-y-0.5 transition"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <form
        id="createProject"
        class="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label class="font-bold text-dark-blue">TITLE</label>
        <input
          ref={titleRef}
          type="text"
          class="bg-lightest-blue p-2 mb-5"
        ></input>
        <label class="font-bold text-dark-blue">DESCRIPTION</label>
        <textarea
          ref={descRef}
          rows="3"
          class="bg-lightest-blue p-2 mb-5"
        ></textarea>
        <label class="font-bold text-dark-blue">DUE DATE</label>
        <input ref={dateRef} type="date" class="bg-lightest-blue p-2"></input>
      </form>
    </section>
    </>
  );
};

export default AddProject;
