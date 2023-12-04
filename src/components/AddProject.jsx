import React, { useState, useRef } from "react";

const AddProject = () => {
  const [newProject, setNewProject] = useState({});
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const handleSave = () => {
    setNewProject({
      title: titleRef.current.value,
      desc: descRef.current.value,
      date: dateRef.current.value,
    });
    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
  };

  const handleCancel = () => {
    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
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
      <form id="createProject" class="flex flex-col">
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
  );
};

export default AddProject;
