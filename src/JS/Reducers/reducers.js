// reducers/rootReducer.js

const INITIAL_STATE = {
  tasks: [],
  filter: 'all',
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case 'TOGGLE_TASK':
      const toggledTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks,
      };
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case 'SET_FILTER':
      localStorage.setItem('filter', action.payload);
      return {
        ...state,
        filter: action.payload,
      };
    default:
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const storedFilter = localStorage.getItem('filter') || 'all';
      return {
        ...state,
        tasks: storedTasks,
        filter: storedFilter,
      };
  }
};

export default rootReducer;
