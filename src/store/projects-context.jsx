import React, { createContext } from 'react';

export const ProjectsContext = createContext({
    projects: [],
    testValue:"",
    projectClick: () => {}
});