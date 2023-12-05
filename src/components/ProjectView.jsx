import React from 'react';

const ProjectView = ({projectInfo, deleteProject} ) => {

    const handleClick = (info) => {
        deleteProject(info.title);
    }

    return (
        <section class="flex flex-col flex-1 w-full p-20">
            <header class="flex justify-between mb-2">
                <h2 class="text-4xl font-bold text-dark-blue">{projectInfo.title}</h2>
                <button class="p-2 mx-2 hover:shadow-md hover:-translate-y-0.5 transition" onClick={() => handleClick(projectInfo)}>Delete</button>
            </header>
            <p class="text-light-blue mb-5">{projectInfo.date}</p>
            <p class="text-ml border-b-2 border-lightest-blue pb-5">{projectInfo.desc}</p>
        </section>
    );
}
 
export default ProjectView;