import React from "react";

const Tasks = ({ taskList, projectId, deleteTodo }) => {
  let todosList = taskList.filter((project) => project.id === projectId)[0]
    .todos;

  return (
    <>
      {todosList.length > 0 ? (
        <ul>
          <p className="text-xs text-slate-500 mt-5">
            Click on todo to delete it.
          </p>
          {todosList.map((todo) => (
            <li
              className="bg-slate-100 px-5 py-2 my-2 cursor-pointer"
              key={todo.id}
              onClick={() => deleteTodo(projectId, todo.id)}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-s text-slate-500 mt-5">
          You don't have any task. Add one!
        </p>
      )}
    </>
  );
};

export default Tasks;