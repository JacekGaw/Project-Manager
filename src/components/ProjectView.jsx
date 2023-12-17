import React, {useRef, useState} from 'react';
import Tasks from './Tasks';


const ProjectView = ({projectInfo, deleteProject, addNewTask, onAddTodo} ) => {

    const taskInput = useRef();
    // const [newTask, setNewTask] = useState();
    const handleClick = (info) => {
        deleteProject(info);
    }

    const handleAddTask = () => {
        let newTask = taskInput.current.value;
        taskInput.current.value = '';
        addNewTask(projectInfo.id, newTask)
    }

    return (
        <section class="flex flex-col flex-1 w-full p-20">
            <header class="flex justify-between mb-2">
                <h2 class="text-4xl font-bold text-dark-blue">{projectInfo.title}</h2>
                <button class="p-2 mx-2 hover:shadow-md hover:-translate-y-0.5 transition" onClick={() => handleClick(projectInfo)}>Delete</button>
            </header>
            <p class="text-light-blue mb-5">{projectInfo.date}</p>
            <p class="text-ml border-b-2 border-lightest-blue pb-5">{projectInfo.desc}</p>
            <header class="flex justify-between mb-2 mt-5">
                <h2 class="text-4xl font-bold text-dark-blue">Tasks</h2>
            </header>
            <div class="flex justify-start gap-1">
                <input ref={taskInput} type="text" class="bg-lightest-blue p-2"></input>
                <button class="p-2 hover:shadow-md hover:-translate-y-0.5 transition" onClick={handleAddTask}>Add Task</button>
            </div>
            <Tasks taskList={onAddTodo} projectId={projectInfo.id} />
        </section>
    );
}
 
export default ProjectView;