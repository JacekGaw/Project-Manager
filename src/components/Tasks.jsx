import React from 'react';

const Tasks = ({taskList, projectId}) => {
    let todosList = taskList.filter((project) => project.id === projectId)[0].todos;
    return ( 
        <>
        <div>Task List</div>
        {todosList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </>
    );
}
 
export default Tasks;