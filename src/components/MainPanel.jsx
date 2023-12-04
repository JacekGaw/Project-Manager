import React from 'react';
import AddProject from './AddProject';
import ProjectView from './ProjectView';

const MainPanel = () => {

    const desc = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
    return ( 
        <section id="mainPanel" class="flex flex-col justify-center items-center flex-1 ">
            {/* <div class="flex flex-col justify-center items-center">
                <h3 class="text-2xl font-bold">No Project Selected</h3>
                <p>Select a project or get started with a new one</p>
                <button class="bg-medium-blue px-4 py-2 my-5 hover:translate-y-1 transition text-white">Create new project</button>
            </div> */}
            {/* <AddProject /> */}
            <ProjectView projectTitle="Project" projectDesc={desc} projectDate="Dec 29, 2024"/>
        </section>
    );
}
 
export default MainPanel;