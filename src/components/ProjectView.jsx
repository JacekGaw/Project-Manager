import React from 'react';

const ProjectView = ({projectTitle, projectDesc, projectDate}) => {
    return (
        <section class="flex flex-col flex-1 w-full p-20">
            <header class="flex justify-between mb-2">
                <h2 class="text-4xl font-bold text-dark-blue">{projectTitle}</h2>
                <button class="p-2 mx-2 hover:shadow-md hover:-translate-y-0.5 transition">Delete</button>
            </header>
            <p class="text-light-blue mb-5">{projectDate}</p>
            <p class="text-ml border-b-2 border-lightest-blue pb-5">{projectDesc}</p>
        </section>
    );
}
 
export default ProjectView;