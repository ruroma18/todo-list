import ACTION_TYPES from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const newTaskList = {
        text: action.text,
        isDone: false,
        id: Date.now()
      }
      return {
        taskList: [...state.taskList, newTaskList]
      }
    } case ACTION_TYPES.IS_DONE: {
      const newTaskList = state.taskList.map((task) => ({
        ...task,
        isDone: task.id === action.id ? !task.isDone : task.isDone,
      }))

      return {
        taskList: newTaskList
      };
    } case ACTION_TYPES.REMOVE: {
      const newTaskList = state.taskList.filter((task) => task.id !== action.id)
      return {
        taskList: newTaskList
      }
    }
    default:
      return state
  }
}