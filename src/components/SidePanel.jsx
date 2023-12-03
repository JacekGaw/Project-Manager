import React from 'react';
import ProjectList from './ProjectList';

const SidePanel = () => {
    return ( 
        <aside class="flex-none bg-dark-blue py-10 pl-10 pr-20 flex-col text-white">
            <header>
                <h2 class="text-3xl font-bold">Projects</h2>
            </header>
            <button class="bg-medium-blue px-4 py-2 my-5 hover:translate-x-1 transition">+ Add Project</button>
            <ProjectList />
        </aside>
    );
}
 
export default SidePanel;