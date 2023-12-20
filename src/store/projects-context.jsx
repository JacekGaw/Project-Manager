import React, { createContext, useState, useReducer } from "react";

export const ProjectsContext = createContext({
  projects: [],
  projectClick: () => {},
  projectAdd: () => {},
  projectDelete: () => {},
  addTask: () => {},
  deleteTask: () => {},
  changeView: () => {},
  currentView: "",
  showProject: "",
});

const projectsReducer = (state, action) => {
  if (action.type === "ADD_PROJECT") {
    const newArr = [
      ...state.projectList,
      {
        id: Math.random(),
        title: action.payload.title,
        desc: action.payload.desc,
        date: action.payload.date,
        todos: [],
      },
    ];

    return {
      ...state,
      projectList: newArr,
    };
  }
  if (action.type === "DELETE_PROJECT") {
    const arr = state.projectList.filter(
      (project) => project.id !== action.payload.id
    );
    return {
      ...state,
      projectList: arr,
    };
  } else if (action.type === "CLICK_PROJECT") {
    const pom = state.projectList.find(
      (project) => project.id === action.payload
    );
    // setProjectInfo(projects.find((project) => project.id === info));
    return {
      ...state,
      projectInf: pom,
    };
  }

  return state;
};

const ProjectsContextProvider = ({ children }) => {
  const [projectsState, projectsDispatch] = useReducer(projectsReducer, {
    projectList: [],
    projectInf: "",
  });
  const [projects, setProjects] = useState([]);
  const [currentView, setCurrentView] = useState("start");
  const [projectInfo, setProjectInfo] = useState();

  const addProject = (projectInfo) => {
    projectsDispatch({
      type: "ADD_PROJECT",
      payload: projectInfo,
    });
  };

  const handleChangeView = (newView) => {
    setCurrentView(newView);
  };

  const handleProjectClick = (info) => {
    projectsDispatch({
      type: "CLICK_PROJECT",
      payload: info,
    });

    setCurrentView("info");
  };

  const handleDeleteProject = (info) => {
    projectsDispatch({
      type: "DELETE_PROJECT",
      payload: info,
    });
    setCurrentView("add");
  };

  const handleAddNewTask = (projectId, task) => {
    setProjects((prevState) => {
      const arr = prevState.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            todos: [...project.todos, { title: task, id: Math.random() }],
          };
        } else return project;
      });
      return arr;
    });
  };

  const handleDeleteTask = (projectID, todoID) => {
    setProjects((prevState) => {
      const arr = prevState.map((project) => {
        if (project.id === projectID) {
          const newTodos = project.todos.filter((todo) => todo.id !== todoID);
          return {
            ...project,
            todos: newTodos,
          };
        } else return project;
      });
      return arr;
    });
  };

  const ctxValue = {
    projects: projectsState.projectList,
    projectClick: handleProjectClick,
    projectAdd: addProject,
    projectDelete: handleDeleteProject,
    addTask: handleAddNewTask,
    deleteTask: handleDeleteTask,
    changeView: handleChangeView,
    currentView: currentView,
    showProject: projectsState.projectInf,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;

// const shoppingCartReducer = (state, action) => {
//   if (action.type === "ADD_ITEM") {
//     const updatedItems = [...state.items];

//     const existingCartItemIndex = updatedItems.findIndex(
//       (cartItem) => cartItem.id === action.payload
//     );
//     const existingCartItem = updatedItems[existingCartItemIndex];

//     if (existingCartItem) {
//       const updatedItem = {
//         ...existingCartItem,
//         quantity: existingCartItem.quantity + 1,
//       };
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       const product = DUMMY_PRODUCTS.find(
//         (product) => product.id === action.payload
//       );
//       updatedItems.push({
//         id: action.payload,
//         name: product.title,
//         price: product.price,
//         quantity: 1,
//       });
//     }

//     return {
//       ...state,
//       items: updatedItems,
//     };
//   }
//   if (action.type === "UPDATE_ITEM") {
//     const updatedItems = [...state.items];
//     const updatedItemIndex = updatedItems.findIndex(
//       (item) => item.id === action.payload.productId
//     );

//     const updatedItem = {
//       ...updatedItems[updatedItemIndex],
//     };

//     updatedItem.quantity += action.payload.amount;

//     if (updatedItem.quantity <= 0) {
//       updatedItems.splice(updatedItemIndex, 1);
//     } else {
//       updatedItems[updatedItemIndex] = updatedItem;
//     }

//     return {
//       ...state,
//       items: updatedItems,
//     };
//   }

//   return state;
// };

// const CartContextProvider = ({ children }) => {
//   const [shoppingCartState, shoppingCartDispatch] = useReducer(
//     shoppingCartReducer,
//     {
//       items: [],
//     }
//   );

//   function handleAddItemToCart(id) {
//     shoppingCartDispatch({
//       type: "ADD_ITEM",
//       payload: id,
//     });
//   }
